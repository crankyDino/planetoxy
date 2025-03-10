import { IEmail } from "../../models/email-payload.model.js";
import { MOONBASE_URL } from "$env/static/private";

export function sendEmail(content: IEmail): Promise<any> {
    try {
        const URL = `${MOONBASE_URL}/communication`

        const httpHeaders = new Headers();
        httpHeaders.append("Content-Type", "application/json");

        const options: RequestInit = {
            method: "POST",
            headers: httpHeaders,
            body: JSON.stringify(content),
            // redirect: "follow"
        };

        return fetch(URL + "/send", options)
        // .then((response) => response.text())
        // .then((result) => console.log(result))
        // .catch((error) => console.error(error));

    } catch (error) {
        console.log(error);
        throw error;
    }
}
