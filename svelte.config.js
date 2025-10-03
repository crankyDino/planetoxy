import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const msdsvexOpt = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(msdsvexOpt)],
	kit: {
		adapter: adapter({
			edge: false,//create a Netlify Edge Function
			split: false // creating a single function for the entire app
		}),
		alias: { $houdini: ".houdini/" } // $houdini: path.resolve(__dirname, '.houdini')
	},
	extensions: ['.svelte', '.svx','.md']
};

export default config;
