import type { IContact } from "./contact.model.js";

export interface IEmail {
    contacts: Array<IContact>,
    subject: string,
    message: string
    template: string
}

// export class IEmail {
//     contacts: Array<IContact>
//     subject: string
//     message: string

//     constructor() {
//         this.contacts = new Array<IContact>(new IContact)
//         this.message = ""
//         this.subject = ""
//     }
// }