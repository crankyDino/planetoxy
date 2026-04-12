import { load_Articles } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
    return await load_Articles({ event });
}
