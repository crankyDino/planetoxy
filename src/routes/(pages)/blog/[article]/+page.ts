import { load_Article } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

/**
 * you're doing this cause you need to get the params from the slug/path
 * i know you'll forget...
 * 
 * @param event 
 * @returns 
 */
export async function load(event: LoadEvent) {
    const { params } = event;

    const loadArticle = {
        ...await load_Article({
            event,
            variables: { article: params.article! }
        })
    };

    return { loadArticle };
}
