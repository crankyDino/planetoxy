import { load_Article } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
    const { params } = event;
    return await load_Article({
        event,
        variables: { article: params.article! }
    });
}
