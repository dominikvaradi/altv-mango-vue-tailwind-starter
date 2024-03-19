import { getCurrentInstance } from "vue";
import type { initMango } from "@altv-mango/webview";

export const useMango = (): ReturnType<typeof initMango> => {
    const app = getCurrentInstance();

    return app?.appContext.config.globalProperties.$mango!;
};
