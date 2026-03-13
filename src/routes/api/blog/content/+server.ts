import { GITHUB_API_KEY } from '$env/static/private';
import { PUBLIC_BLOG_REPO } from '$env/static/public';
import type { TPostMeta } from '$lib/types/post/TPost.type';
import { json } from '@sveltejs/kit';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import matter from 'gray-matter';

marked.use(markedHighlight({
    emptyLangClass: 'hljs',
    highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    }
}));

async function fetchBlogPostContent(title: string) {
    console.log(`${PUBLIC_BLOG_REPO}/contents/${title}.md`);
    const headers = new Headers({
        "X-GitHub-Api-Version": "2022-11-28",
        "Authorization": `Bearer ${GITHUB_API_KEY}`,
    });

    const repo = await fetch(`${PUBLIC_BLOG_REPO}/contents/${title}.md`, { headers });
    const repo_content = await repo.json();
    const article = await fetch(repo_content.download_url);
    const article_content = await article.text();

    const { data: meta, content: body } = matter(article_content);
    const content = await marked.parse(body);

    return {
        metadata: meta satisfies TPostMeta,
        content,
    }
}

export async function GET({ url }) {
    const title = url.searchParams.get('title');
    console.log("brooo", title);
    if (!title) { return json(null); }

    const posts = await fetchBlogPostContent(title)
    return json(posts)
}
