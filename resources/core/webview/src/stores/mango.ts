import { defineStore } from "pinia";
import { type Ref, ref } from "vue";
import type { initMango } from "@altv-mango/webview";

export type TMangoObject = ReturnType<typeof initMango>;

export const useMangoStore = defineStore("mango", () => {
    const mango: Ref<TMangoObject> = ref<TMangoObject>({
        /* TODO implement mock service for browser development */
    } as TMangoObject);

    const setMango = (newMango: TMangoObject) => {
        mango.value = newMango;
    };

    return { mango, setMango };
});
