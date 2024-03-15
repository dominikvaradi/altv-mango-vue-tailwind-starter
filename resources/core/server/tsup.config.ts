import { defineConfig } from "tsup";
import packageJson from "./package.json";

const watchServerEnabled: boolean = process.env["NODE_ENV"]?.toLowerCase() === "development";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    splitting: false,
    sourcemap: "inline",
    clean: true,
    dts: false,
    format: "esm",
    bundle: true,
    minify: false,
    external: Object.keys(packageJson.dependencies),
    noExternal: Object.keys(packageJson.devDependencies),
    onSuccess: async () => {
        if (!watchServerEnabled) return;

        try {
            await fetch("http://localhost:7789/restart-core-resource", {
                method: "POST",
            });
        } catch (e) {
            // Do nothing
        }
    },
});
