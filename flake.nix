{
  description = "nobbz.dev - Website";

  outputs = {
    self,
    nixpkgs,
    nix-filter,
    flake-parts,
    ...
  } @ inputs: let
    systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin"];
  in
    flake-parts.lib.mkFlake {inherit inputs;} {
      inherit systems;

      imports = [];

      perSystem = {
        config,
        pkgs,
        self',
        inputs',
        system,
        ...
      }: {
        formatter = pkgs.alejandra;

        # apps.serve.program = "${pkgs.writeShellScript "serve" ''
        #   set -e
        #   result=$(nom build .#blog --print-out-paths)
        #   ${pkgs.miniserve}/bin/miniserve -p 3001 --index index.html ''${result}
        # ''}";

        # packages.default = self'.packages.blog;

        devShells.default = pkgs.mkShell {
          packages = let
            astro-ls = pkgs.writeShellScriptBin "astro-ls" ''exec yarn run astro-ls "$@"'';
          in
            builtins.attrValues {
              inherit (pkgs) nodejs_20 yarn2nix nil;
              inherit (pkgs.nodejs_20.pkgs) yarn;
              inherit astro-ls;
            };
          # shellHook = config.pre-commit.installationScript;
        };
      };
    };

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixpkgs-unstable";
    nix-filter.url = "github:numtide/nix-filter";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };
}
