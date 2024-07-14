import { writable } from "svelte/store";
export type TDialogState = "open" | "closed"

function dialogState() {
    let modalState: TDialogState = "closed";
    const { subscribe, set, update } = writable<TDialogState>(modalState)

    return {
        subscribe,
        close: () => update(() => "closed"),
        open: () => update(() => "open"),
    }
}
export const state = dialogState()

export function toggleDialog(dialog: HTMLDialogElement, dialogState: TDialogState) {
    if (!dialog) {
        return;
    }

    switch (dialogState) {
        case "open":
            openDialog(dialog);
            break;
        default:
            closeDialog(dialog);
            break;
    }
}

export function openDialog(dialog: HTMLDialogElement) {
    if (!dialog) {
        return;
    }
    dialog.showModal();
}

export function closeDialog(dialog: HTMLDialogElement, form?: HTMLFormElement) {
    if (!dialog) {
        return;
    }
    dialog.close();

    if (!form) {
        return
    }
}

