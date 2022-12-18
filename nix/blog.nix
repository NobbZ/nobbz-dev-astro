{inputs, ...}: let
  inherit (inputs.nix-filter.lib) filter inDirectory matchExt;
in {
  perSystem = {
    dream2nix.inputs.self = {
      source = filter {
        root = ./.;
        include = [
          (inDirectory "src")
          (inDirectory "public")
          (matchExt "js")
          (matchExt "cjs")
          (matchExt "mjs")
          ./package.json
          ./yarn.lock
        ];
      };
      projects.blog = {
        name = "blog";
        subsystem = "nodejs";
        translator = "yarn-lock";
      };
      packageOverrides.blog-nobbz-dev.copyBlog = {
        installPhase = ''
          mkdir -p $out
          cp -rv ./dist/* $out
        '';
      };
    };
  };
}