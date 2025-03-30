import { SANITY_API_KEY, SANITY_APP_ID } from "$env/static/private";
import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: SANITY_APP_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: SANITY_API_KEY
})

export async function fetchMedia(refId: string) {
    const query = `*[_type=='graphic' && _id == '${refId}']{title, type, contentUrl, description}`;
    return await client.fetch(query);
}