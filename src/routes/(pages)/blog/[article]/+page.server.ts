import { PUBLIC_BLOG_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';


/**
 *
 * 
 * @param event 
 * @returns 
 */
export async function load({ params }) {
    try {
        const url = `${PUBLIC_BLOG_URL}/refs/heads/master/${params.article}.md`

        const res = await fetch(url);

        const post = await res.text();
        // const postt = await import(post)

        // const response = await compile(post, {
        //     extensions: ['.md'],
        //     filename: `${params.article}.md`
        // })

        // if (!response) {
        //     throw new Error(`Could not fetch ${params.article}`);
        // }
        // // const content = svc(response.code, {})
        // // const content = response.code.replace(/{@html `([^``]*)`}/g, '$1').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
        // const content = marked.parse(
        //     response.code.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
        // )
        // const meta = (response.data as any).fm;

        // Extract frontmatter and markdown content
        const { data: metadata, content: markdown } = matter(post);

        // Convert markdown to HTML
        const content = marked(markdown);
        // console.log(html);

        return {
            metadata,
            content,
            // map: response.map
        }
    } catch (e) {
        console.error(e);
        error(404, `Could not find ${params.article}`)
    }
}
