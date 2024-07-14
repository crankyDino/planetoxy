import type { TDialogState } from "$lib/handlers/dialog.handler/dialog.handler.js"
import { writable } from "svelte/store"
import { IContact } from "../../models/contact.model.js"
import { IEmail } from "../../models/email-payload.model.js"
import { IFullname } from "../../models/fullname.model.js"
import { sendEmail } from "../../services/email.service/email.service.js"
import { validateForm } from "$lib/handlers/form.handler/form.handler.js"

let reasons: Map<number, string> = new Map<number, string>()
function initChips() {
    const { subscribe, set, update } = writable(reasons)
    return {
        subscribe,
        createChip: (reason: string) => update((c) => { c.set(reasons.size + 1, reason); return c }),
        deleteChip: (id: number) => update((c) => { c.delete(id); return c }),
        popChip: () => update((c) => { c.delete(c.size); return c }),
        clear: () => set(new Map<number, string>())
    }
}
export const chips = initChips();

//DON'T FORGET THIS
// resetForm(form);  //handle when clearing 

export function submitHitMeUp(form: HTMLFormElement) {
    console.log(validateForm(form));

    if (!validateForm(form)) {
        return
    }
    sendContactEmail(form);
}


/**
 * 
 * @param {HTMLFormElement}form 
 * @returns 
 */
function sendContactEmail(form: HTMLFormElement): void {
    const controls = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input,textarea"))
    let payload: IEmail = new IEmail()
    let contact: IContact = new IContact()

    if (!controls) {
        return;
    }

    controls.forEach(control => {
        if (!control.labels) {
            return;
        }

        switch (control.labels[0].textContent) {
            case "First name:":
                {
                    contact.fullname.firstname = control.value
                    break;
                }
            case "Last name:":
                {
                    contact.fullname.lastname = control.value
                    break;
                }
            case "E-Mail":
                {
                    contact.email = control.value
                    break;
                }
            case "Reason":
                {
                    let listOfReasons: string = "Re:"
                    if (reasons) {
                        reasons.forEach(reason => {
                            listOfReasons += `, ${reason}`
                        });
                        payload.subject += listOfReasons
                    }
                    break
                };
            case "What's up?":
                {
                    payload.message += control.value
                    break;
                }
        }
    })

    payload.contacts = [contact]
    sendEmail(payload)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}