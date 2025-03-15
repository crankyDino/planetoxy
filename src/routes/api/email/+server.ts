import type { IEmail } from "$lib/models/email-payload.model.js";
import { sendEmail } from "$lib/server/email.service/email.service.js"
import { json } from "@sveltejs/kit";


export async function POST({ request, cookies }): Promise<Response> {

    // console.log(await request.json());
    
    const { status } = await sendEmail(await request.json())
    return json({ status: status })
}
