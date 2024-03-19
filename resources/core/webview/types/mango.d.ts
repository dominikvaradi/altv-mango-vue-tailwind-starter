import { initMango } from "@altv-mango/webview";

export {};

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $mango: ReturnType<typeof initMango>;
    }
}

declare module "vue" {
    interface ComponentCustomProperties {
        $mango: ReturnType<typeof initMango>;
    }
}
