import { GITHUB_API_KEY } from '$env/static/private';
import { PUBLIC_BLOG_REPO } from '$env/static/public';
import type { IRepo } from '$lib/models/github/repo.model';
import type { TPostMeta } from '$lib/types/post/TPost.type';
import { json } from '@sveltejs/kit';
import { compile } from 'mdsvex';

/**
 * 
 * @returns
 */
async function getPosts() {
    const headers = new Headers({
        "X-GitHub-Api-Version": "2022-11-28",
        "Authorization": `Bearer ${GITHUB_API_KEY}`
    });
    
    const allBlog = await fetch(PUBLIC_BLOG_REPO, { headers });

    const repo: Array<IRepo> = JSON.parse(await allBlog.text()) satisfies Array<IRepo>;
    let posts: Array<TPostMeta> = []

    const req: Promise<string>[] = repo.filter(r => !r.path.startsWith(".") && r.download_url)
        .map(async r => (await fetch(r.download_url)).text())

    await Promise.all(req).then(async res => {
        while (res.length) {
            const post = res.shift();

            if (!post) return

            const response = await compile(post, {
                extensions: ['.md'],
            })

            if (!response) {
                console.error("you're fucked boet");
                return;
            }

            const meta: TPostMeta = (response.data as any).fm satisfies TPostMeta;

            console.log(response.data);

            console.log(repo);

            meta.url = repo.find(x => x.name.split(".md")[0] === meta.title)?.download_url ?? null;

            posts.push(meta satisfies TPostMeta);
        };
    });

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
