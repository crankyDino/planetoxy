import { load_Project } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
    const { params } = event;

    const loadProject = {
        ...await load_Project({
            event,
            variables: { article: params.article! }
        })
    };

    return { loadProject };
}
