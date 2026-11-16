import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import houdini from 'houdini/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const msdsvexOpt = { extensions: ['.md'] };

export default defineConfig({
    envPrefix: ['VITE_', 'PUBLIC_'],
    plugins: [
        houdini(),
        tailwindcss(),
        sveltekit({
            extensions: ['.svelte', '.svx', '.md'],
            preprocess: [vitePreprocess(), mdsvex(msdsvexOpt)],
            adapter: adapter({ out: 'build' }),
            alias: { $houdini: ".houdini/" } /* $houdini: path.resolve(__dirname, '.houdini') */
        })
    ],
    build: { rollupOptions: { maxParallelFileOps: 3 } }
});
