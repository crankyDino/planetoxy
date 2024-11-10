import { PUBLIC_SANITY_APP_ID } from '$env/static/public';
import { createClient } from '@sanity/client';
import { load_Article } from '$houdini';

const client = createClient({
    projectId: PUBLIC_SANITY_APP_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

// let article = $props()
export async function load(event) {
    const { params } = event;

    async function fetchMedia(refId: string) {
        const query = `*[_type=='frame' && _id == '${refId}']{title, type, contentUrl, description}`;
        return await client.fetch(query);
    }

    const getMedia = (_ref: string) => {
        return fetchMedia(_ref)
    }

    const getArticle = async () => {
        const prom = {
            ...(await load_Article({
                event,
                variables: { article: params.article }
            }))
        }
        return await prom.Article.fetch();
    }
    return { getMedia: getMedia, Article: getArticle }
}

