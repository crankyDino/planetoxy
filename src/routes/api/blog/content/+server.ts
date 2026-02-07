import { GITHUB_API_KEY } from '$env/static/private';
import { PUBLIC_BLOG_REPO } from '$env/static/public';
import type { TPostMeta } from '$lib/types/post/TPost.type';
import { json } from '@sveltejs/kit';
import { compile } from 'mdsvex';

/**
 * 
 * @returns
 */
async function fetchBlogPostContent(title: string) {
    console.log(`${PUBLIC_BLOG_REPO}/contents/${title}.md`);
    const headers = new Headers({
        "X-GitHub-Api-Version": "2022-11-28",
        "Authorization": `Bearer ${GITHUB_API_KEY}`,
    });
    
    // "Accept": "application/vnd.github.html+json"

    const repo = await fetch(`${PUBLIC_BLOG_REPO}/contents/${title}.md`, { headers });

    const repo_content = await repo.json()

    const article = await fetch(repo_content.download_url);

    const article_content = await article.text();

    const response = await compile(article_content, {
        extensions: ['.md'],
        filename: `${title}.md`
    })

    if (!response) {
        throw new Error(`Could not fetch ${title}`);
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
}

export async function GET({ url }) {
    const title = url.searchParams.get('title');
    console.log("brooo", title);
    if (!title) { return json(null); }

    const posts = await fetchBlogPostContent(title)
    return json(posts)
}
