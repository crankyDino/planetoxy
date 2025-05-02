import type { IFullname } from "./fullname.model"

export interface IContact {
    fullname: IFullname
    email: string
}

// export class IContact {
//     email: string
//     fullname: IFullname
//     constructor() {
//         this.email = ""
//         this.fullname = new IFullname()
//     }
// }