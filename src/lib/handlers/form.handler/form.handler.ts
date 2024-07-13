import { validationOptions } from "./form-validation";

/**
 * 
 * @param {string} form 
 * @param { {id: string, openTrigger: string, closeTrigger: string } } dialog 
 * @returns 
 */
export function initForm(form: HTMLFormElement): void {
    const formControlGroups = Array.from(form.querySelectorAll(".form__group"))

    formControlGroups.forEach((group) => {
        const label = group.querySelector("label")
        const controller = group.querySelector("input,textarea") as HTMLInputElement | HTMLTextAreaElement;
        const errLabel = group.querySelector(".form--error") as HTMLElement;
        controller.onblur = (ev) => {
            if (controller.hasAttribute(validationOptions.hasValue.attribute) && !validationOptions.hasValue.isValid(controller)) {
                // errLabel.textContent = validationOptions.hasValue.errorMsg(controller, controller.labels[0]); //dynamic error message
                validationOptions.hasValue.onError(errLabel);
                errLabel.textContent = validationOptions.hasValue.errorMsg(controller, label!.textContent!.split("*")[0]);
            } else {
                validationOptions.hasValue.onSuccess(errLabel);
            }
        }
    })
    validateForm(form);
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @returns 
 */
export function validateForm(form: HTMLFormElement): boolean {
    let isValid: boolean = false;
    form.setAttribute("novalidate", "");

    form.get

    form.onsubmit = (ev) => {
        ev.preventDefault();
        if (!form.checkValidity()) {
            isValid = false;
            console.log("form: " + form.id + ":submitted successfully");
            return isValid;
        }

        //validate all form groups
        const formGroups = Array.from(form.querySelectorAll(".form__group"))
        formGroups.forEach((group) => {
            isValid = validateFormGroup(group)
        })
    }
    return isValid;
}

/**
 * 
 * @param {Element}formGroup 
 * @returns 
 */
function validateFormGroup(formGroup: Element): boolean {
    const label = formGroup.querySelector("label")
    const formControl = formGroup.querySelector("input, textarea") as HTMLInputElement | HTMLTextAreaElement
    const errLabel = formGroup.querySelector(".form--error") as Element

    if (!label || !formControl || !errLabel) {
        return false;
    }

    for (const opt of Object.values(validationOptions)) {
        if (formControl.hasAttribute(opt.attribute) && !opt.isValid(formControl)) {
            errLabel.textContent = opt.errorMsg(formControl, label.textContent!.split("*")[0]);
            opt.onError(errLabel);
            return false
        }
    }
    return true;
}

/**
 * 
 * @param {string}form 
 * @returns 
 */
export function resetForm(form: HTMLFormElement): void {
    const controls = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input,textarea"));
    const errLabel = Array.from(form.querySelectorAll<HTMLElement>(".form--error"));

    controls.forEach((ctrl: HTMLInputElement | HTMLTextAreaElement) => {
        ctrl.value = ""
    });

    errLabel.forEach((label) => {
        label.setAttribute("hidden", "true")
    });
}