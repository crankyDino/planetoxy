import { resetForm } from "../form.handler/form.handler";

export type TDialogState = "open" | "closed"

export function dialogState() {
    let modalState: TDialogState = 'closed';

    return {
        openDialog,
        closeDialog,
        set toggle(_state: TDialogState) { modalState = _state }
    }
}

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
    resetForm(form);
}

