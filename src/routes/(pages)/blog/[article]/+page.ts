// import { PUBLIC_SANITY_APP_ID } from '$env/static/public';
import { load_Article } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
    const { params } = event;

    async function fetchMedia(refId: string) {
        const res = await fetch(`/api/sanity/media?ref=${refId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        return await res.json();
    }

    const getMedia = (_ref: string) => {
        return fetchMedia(_ref)
    }

    const loadArticle = {
        ...await load_Article({
            event,
            variables: { article: params.article! }
        })
    };

    return { getMedia, loadArticle };
}