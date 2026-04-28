import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const msdsvexOpt = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx','.md'],
	preprocess: [vitePreprocess(), mdsvex(msdsvexOpt)],
	kit: {
		adapter: adapter({ out: 'build' }),
		alias: { $houdini: ".houdini/" } // $houdini: path.resolve(__dirname, '.houdini')
	},
	extensions: ['.svelte', '.svx', '.md'],
	// compilerOptions: {
	// 	experimental: {async:true}
	// }
};

export default config;
