export const validationOptions = {
    hasValue: {
        attribute: 'required',
        isValid: (controller: HTMLInputElement | HTMLTextAreaElement) => { return controller.value.trim() !== "" },
        onSuccess: (label: Element) => { label.setAttribute("hidden", "") },
        errorMsg: (controller: Element, label: string) => { return `${label} is required` },
        onError: (errLabel: Element) => { errLabel.removeAttribute("hidden") }
    },
    maxLength: {
        attribute: 'maxlength',
        isValid: (controller: HTMLInputElement | HTMLTextAreaElement) => {
            const max = controller.getAttribute('maxlength');
            return controller.value.length <= parseInt(max!)
        },
        errorMsg: (controller: Element, label: string) => { return `${label} is too long` },
        onSuccess: (label: Element) => { label.setAttribute("hidden", "") },
        onError: (errLabel: Element) => { errLabel.removeAttribute("hidden") }
    },
    minLength: {
        attribute: 'minlength',
        isValid: (controller: HTMLInputElement | HTMLTextAreaElement) => {
            const min = controller.getAttribute('minlength');
            return controller.value.length >= parseInt(min!)
        },
        onSuccess: (label: Element) => { label.setAttribute("hidden", "") },
        errorMsg: (controller: Element, label: string) => { return `${label} is too short` },
        onError: (errLabel: Element) => { errLabel.removeAttribute("hidden") }
    },
    formatIsValid: {
        attribute: 'minlength',
        isValid: (controller: HTMLInputElement | HTMLTextAreaElement) => {
            const min = controller.getAttribute('minlength');
            return controller.value.length >= parseInt(min!)
        },
        onSuccess: (label: Element) => { label.setAttribute("hidden", "") },
        errorMsg: (controller: Element, label: string) => { return `${label} is too short` },
        onError: (errLabel: Element) => { errLabel.removeAttribute("hidden") }
    },
}