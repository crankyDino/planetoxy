import { fetchMedia } from "$lib/server/sanity.service/sanity.service.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }): Promise<Response> {
    const res = await fetchMedia(url.searchParams.get("ref") as string);
    return json({ res });
}