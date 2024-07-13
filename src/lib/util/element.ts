/**
 * focuses on html element if not already active/in-focus
 * @param element 
 */
export function focusOnElement<T extends HTMLElement | null>(element: T): void {
    if (element && element != document.activeElement) {
        element.focus();
    }
}