import { fetchMedia } from "#lib/server/sanity.service/sanity.service.js";

export async function GET({ url }): Promise<Response> {
    const res = await fetchMedia(url.searchParams.get("ref") as string);
    return Response.json({ res });
}
