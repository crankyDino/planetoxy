import { sendEmail } from "$lib/server/email.service/email.service.js";
import { json } from "@sveltejs/kit";


export async function POST({ request, cookies }): Promise<Response> {
    const { status } = await sendEmail(await request.json());
    return json({ status: status });
}
