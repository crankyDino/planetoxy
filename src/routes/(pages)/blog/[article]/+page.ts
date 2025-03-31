import { load_Article } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
    const { params } = event;

    async function getMedia(refId: string) {
        const res = await fetch(`/api/sanity/media?ref=${refId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        return await res.json();
    }

    const loadArticle = {
        ...await load_Article({
            event,
            variables: { article: params.article! }
        })
    };

    return { getMedia, loadArticle };
}

