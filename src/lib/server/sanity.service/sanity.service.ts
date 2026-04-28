import { SANITY_API_KEY, SANITY_APP_ID } from "$env/static/private";
import { createClient, type SanityClient } from '@sanity/client';

let _client: SanityClient;

function getClient(): SanityClient {
    if (!_client) {
        _client = createClient({
            projectId: SANITY_APP_ID,
            dataset: 'production',
            useCdn: true,
            apiVersion: '2023-05-03',
            token: SANITY_API_KEY
        });
    }
    return _client;
}

export async function fetchMedia(refId: string): Promise<Response> {
    try {
        const query = `*[_type=='graphic' && _id == '${refId}']{title, type, contentUrl, description}`;
        return getClient().fetch(query);
    } catch (error) {
        console.error(error);
        throw error;
    }
}