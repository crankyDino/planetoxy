import type { IEmail } from "../../models/email-payload.model.js";
import { MOONBASE_URL } from "$env/static/private";

export async function sendEmail(content: IEmail): Promise<any> {
    try {
        const _url = `${MOONBASE_URL}/communication/send`

        const httpHeaders = new Headers();
        httpHeaders.append("Content-Type", "application/json");

        const options: RequestInit = {
            method: "POST",
            headers: httpHeaders,
            body: JSON.stringify(content),
            // redirect: "follow"
        };

        return await fetch(_url , options)
        // .then((response) => response.text())
        // .then((result) => console.log(result))
        // .catch((error) => console.error(error));

    } catch (error) {
        console.error(error);
        throw error;
    }
}
