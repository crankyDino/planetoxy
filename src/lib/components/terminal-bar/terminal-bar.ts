import { writable } from "svelte/store";

function getPath() {
    const { subscribe, set, update } = writable<String>("/...")
    return {
        subscribe,
        set: (p: string) => set(p),
        update: () => update(() => window?.location?.pathname ?? '/...'),
    }
}
export const path = getPath();