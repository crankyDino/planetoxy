import { resetForm } from "../form.handler/form.handler";

export type TDialogState = "open" | "closed"

export function dialogState() {
    let modalState: TDialogState = 'closed';

    return {
        open,
        close,
        set toggle(_state: TDialogState) { modalState = _state }
    }
}

function toggleDialog(dialog: HTMLDialogElement, dialogState: TDialogState) {
    if (!dialog) {
        return;
    }

    switch (dialogState) {
        case "open":
            open(dialog);
            break;
        default:
            close(dialog);
            break;
    }
}

function open(dialog: HTMLDialogElement) {
    if (!dialog) {
        return;
    }
    dialog.showModal();
}

function close(dialog: HTMLDialogElement, form?: HTMLFormElement) {
    if (!dialog) {
        return;
    }
    dialog.close();

    if (!form) {
        return
    }
    resetForm(form);
}

