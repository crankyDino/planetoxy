import { PUBLIC_BLOG_URL } from '$env/static/public';
import type { TPostMeta } from '$lib/types/post/TPost.type.js';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
// import fs from 'fs/promises';
// import os from 'os';
// import path from 'path';
// import crypto from 'crypto';

// const CACHE_DIR = path.join(os.tmpdir(), 'mdsvex-cache');
// await fs.mkdir(CACHE_DIR, { recursive: true });

// function hashCode(s: string) {
//     return crypto.createHash('sha256').update(s).digest('hex').slice(0, 16);
// }


/**
 * you're doing this cause you need to get the params from the slug/path
 * i know you'll forget...
 * 
 * @param event 
 * @returns 
 */
export async function load({ params }) {
    try {
        const url = `${PUBLIC_BLOG_URL}/refs/heads/master/${params.article}.md`

        const res = await fetch(url);

        const post = await res.text();

        const response = await compile(post, {
            extensions: ['.md'],
            filename: `${params.article}.md`
        })

        if (!response) {
            throw new Error(`Could not fetch ${params.article}`);
        }

        const content = response.code

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
