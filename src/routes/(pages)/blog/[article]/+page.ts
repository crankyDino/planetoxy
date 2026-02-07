import { error } from '@sveltejs/kit';

type TArticle = {
    metadata: any,
    content: any,
    map: any
}

/**
 * @param event 
 * @returns 
 */
export async function load({ params }) {
    try {        
        const res = await fetch(`/api/blog/content?title=${params.article}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        
        const article: TArticle = await res.json();
        
        return article
    } catch (e) {
        error(404, `Could not find ${params.article}`)
    }
}
