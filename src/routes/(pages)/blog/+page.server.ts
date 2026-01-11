import { error } from '@sveltejs/kit';

/**
 *
 * @param event 
 * @returns 
 */
export async function load({ fetch }) {
    try {
        const res = await fetch('/api/blog/posts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const Articles = await res.json();

        // if (posts !== 200) { console.warn("Failed to fetch blog posts"); return; }
        // console.log(Articles);

        return { Articles }
    } catch (e) {
        error(404, `Could not fetch blog posts`)
    }
}
