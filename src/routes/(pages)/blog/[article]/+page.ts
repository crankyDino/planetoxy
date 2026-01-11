import { PUBLIC_BLOG_URL } from '$env/static/public';
import type { TPostMeta } from '$lib/types/post/TPost.type.js';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';


/**
 *
 * 
 * @param event 
 * @returns 
 */
export async function load({ params }) {
    try {
        // const url = `${PUBLIC_BLOG_URL}/refs/heads/master/${params.article}.md`
        const url = `${PUBLIC_BLOG_URL}/${params.article}.md`

        const res = await fetch(url);

        const post = await res.text();

        const response = await compile(post, {
            extensions: ['.md'],
            filename: `${params.article}.md`
        })

        if (!response) {
            throw new Error(`Could not fetch ${params.article}`);
        }
        // let content = response.code
        //     .replace(/{@html `([^`]*)`}/g, '$1')
        //     .replace(/&lt;/g, '<')
        //     .replace(/&gt;/g, '>')
        //     .replace(/&amp;/g, '&');

        const content = response.code
        // console.log(content);
        // const tf=(response.data as TPost ).fm;
        const meta = (response.data as any).fm;
        return {
            metadata: meta satisfies TPostMeta,
            content,
            map: response.map
        }
    } catch (e) {
        error(404, `Could not find ${params.article}`)
    }
}
