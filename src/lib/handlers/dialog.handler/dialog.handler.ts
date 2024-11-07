export type TDialogState = "open" | "closed"

// function _dialogState() {
//     let modalState: TDialogState = "closed";
//     const { subscribe, set, update } = writable<TDialogState>(modalState)

//     return {
//         subscribe,
//         close: () => update(() => "closed"),
//         open: () => update(() => "open"),
//     }
// }
// export const dialogState = _dialogState()
export function dialogState() {
    let modalState: TDialogState = $state("closed");
    // let toggle: TDialogState = $state("closed");

    return {
        get modalState() { return modalState },
        set open(_state: TDialogState) { modalState = "open",console.log("what") },
        set close(_state: TDialogState) { modalState = "closed" }
        // get toggle() { return toggle }
        // open: () => update(() => "open"),
    }
}
// export const dialogState = _dialogState()

export function toggleDialog(dialog: HTMLDialogElement, dialogState: TDialogState) {
    if (!dialog) {
        return;
    }

    switch (dialogState) {
        case "open":
            console.log("opening");
            openDialog(dialog);
            break;
        default:
            console.log("closing");
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

