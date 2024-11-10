import { PUBLIC_SANITY_APP_ID } from "$env/static/public";
import { createClient } from '@sanity/client';


const client = createClient({
    projectId: PUBLIC_SANITY_APP_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

export async function fetchMedia(refId: string) {
    const query = `*[_type=='frame' && _id == '${refId}']{title, type, contentUrl, description}`;
    return await client.fetch(query);
}
