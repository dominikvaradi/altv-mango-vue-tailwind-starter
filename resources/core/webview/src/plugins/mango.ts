import type { App, Plugin } from "vue";
import { initMango } from "@altv-mango/webview";

const MangoPlugin: Plugin = {
    install: (app: App) => {
        app.config.globalProperties.$mango = initMango();
    },
};

export default MangoPlugin;
