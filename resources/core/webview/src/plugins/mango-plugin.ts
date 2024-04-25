import { type App, type Plugin, shallowReadonly, type ShallowRef, shallowRef, toValue } from "vue";
import { initMango } from "@altv-mango/webview";

const MangoPlugin: Plugin = {
    install: (app: App) => {
        const mango = shallowRef(initMango());

        app.config.globalProperties.$mango = toValue(mango);

        app.provide<Readonly<ShallowRef<ReturnType<typeof initMango>>>>("mango", shallowReadonly(mango));
    },
};

export default MangoPlugin;
