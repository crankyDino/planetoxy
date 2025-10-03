import { env } from '$env/dynamic/public'
import type { TPost } from '$lib/types/post/TPost.type'
import { json } from '@sveltejs/kit'

/**
 * 
 * @returns
 */
async function getPosts() {
    const paths = import.meta.glob('/../blog/*.md', { eager: true })
    let posts: Array<TPost> = []

    for (const path in paths) {
        const file = paths[path]

        if (!file || typeof file !== 'object' || !('metadata' in file)) { continue } //check for metadata fn 

        const metadata = file.metadata as TPost
        const post = { ...metadata } satisfies TPost

        if (!!post.published && env.PUBLIC_IS_PROD) { continue }

        posts.push(post)
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}
