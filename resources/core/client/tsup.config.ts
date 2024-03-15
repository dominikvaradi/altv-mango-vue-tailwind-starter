import { defineConfig } from "tsup";
import packageJson from "./package.json";

const webviewUrl: string =
    process.env["NODE_ENV"]?.toLowerCase() === "development" ? "http://localhost:5173" : "http://resource/webview/dist/index.html";

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
    env: {
        WEBVIEW_URL: webviewUrl,
    },
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
