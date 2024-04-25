import { inject, type ShallowRef, toValue } from "vue";
import type { initMango } from "@altv-mango/webview";

export const useMango = (): ReturnType<typeof initMango> => {
    const mangoRef = inject<Readonly<ShallowRef<ReturnType<typeof initMango>>>>("mango")!;
    return toValue(mangoRef);
};
