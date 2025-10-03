import type { TPost } from '$lib/types/post/TPost.type.js';
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
        const url = `https://raw.githubusercontent.com/crankyDino/blog/refs/heads/master/${params.article}.md`

        const res = await fetch(url);

        const post = await res.text();

        const response = await compile(post, {
            extensions: ['.md'],
            filename: `${params.article}.md`
        })

        if (!response) {
            throw new Error(`Could not fetch ${params.article}`);
        }

        // const { js } = svelteCompile(response.code, {
        //     generate: 'server' // correct option name
        //     // do not rely on non-standard options like `format: 'cjs'` here
        // });

        // // Convert compiled JS to a data: URL and import it as an ES module (server-side)
        // // NOTE: Buffer is available in Node; SvelteKit server runs on Node (ESM capable).
        // const b64 = Buffer.from(js.code).toString('base64');
        // const mod = await import(`data:text/javascript;base64,${b64}`);

        // const Component = mod.default;
        // // render SSR output
        // const { html } = Component.render ? Component.render() : { html: '' };
        // -------------------------------------------------------------------------------
        // const { js } = svelteCompile(response.code, { generate: 'server' });

        // // create cache filename based on hash of js.code
        // const id = hashCode(js.code + params.article);
        // const filePath = path.join(CACHE_DIR, `${id}.mjs`);

        // // write file only if missing (cache)
        // try {
        //     await fs.access(filePath);
        // } catch {
        //     // write module as ESM; ensure file extension .mjs
        //     await fs.writeFile(filePath, js.code, 'utf8');
        // }

        // // dynamically import the file via file://
        // const mod = await import(pathToFileURL(filePath).toString());
        // const Component = mod.default;
        // const { html } = Component.render ? Component.render() : { html: '' };

        // console.log(html);

        // const content = response.code.replaceAll("{@html `", "'").replaceAll("`}</pre>", "'</pre>")
        const content = response.code
        // console.log(content);
        // const tf=(response.data as TPost ).fm;
        const meta=(response.data as any).fm;
        return {
            metadata: meta satisfies TPost,
            content,
            map: response.map
        }
    } catch (e) {
        error(404, `Could not find ${params.article}`)
    }
}


// function pathToFileURL(p: string) {
//     // node's URL.pathToFileURL would be nicer, but keep simple
//     const u = new URL(`file://${p}`);
//     return u;
// }

/**
 *
 *
 *
 * @param source your md file
 * @returns
 */
// async function processMarkdown(source: string, filename: string) {
//     const compiled = await processor.markup({ content: source, filename: filename + '.md' })
//     console.log(compiled);

//     return compiled
// }

// export async function load(event: LoadEvent) {
//     const { params } = event;

//     const loadArticle = {
//         ...await load_Article({
//             event,
//             variables: { article: params.article! }
//         })
//     };

//     return { loadArticle };
// }
