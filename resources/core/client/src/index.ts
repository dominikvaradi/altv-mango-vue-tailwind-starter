import "@abraham/reflection";
import { RootModule } from "./root.module";
import { createAppBuilder } from "@altv-mango/client";

const appBuilder = await createAppBuilder();
appBuilder.addWebView("webview", {
    url: process.env["WEBVIEW_URL"] as string,
    isVisible: true,
});
const app = await appBuilder.build();
await app.start(RootModule);
