import { sendEmail } from "#lib/server/email.service/email.service.js";


export async function POST({ request, cookies }): Promise<Response> {
    const { status } = await sendEmail(await request.json());
    return Response.json({ status: status });
}
