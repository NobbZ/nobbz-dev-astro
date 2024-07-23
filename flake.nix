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
        formatter = pkgs.writeShellScriptBin "formatter" ''
          ${pkgs.lib.getExe pkgs.alejandra} .
          yarn prettier -w .
        '';

        # apps.serve.program = "${pkgs.writeShellScript "serve" ''
        #   set -e
        #   result=$(nom build .#blog --print-out-paths)
        #   ${pkgs.miniserve}/bin/miniserve -p 3001 --index index.html ''${result}
        # ''}";

        # packages.default = self'.packages.blog;

        devShells.default = pkgs.mkShell {
          packages = let
            astro-ls = pkgs.writeShellScriptBin "astro-ls" ''exec yarn run astro-ls "$@"'';
            mdx-language-server = pkgs.writeShellScriptBin "mdx-language-server" ''exec yarn run mdx-language-server "$@"'';
          in
            builtins.attrValues {
              inherit (pkgs) nodejs_20 yarn2nix nil tailwindcss-language-server;
              inherit (pkgs) pre-commit alejandra;
              inherit (pkgs.nodejs_20.pkgs) yarn typescript-language-server;
              inherit astro-ls mdx-language-server;
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
