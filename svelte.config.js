import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			//create a Netlify Edge Function
			edge: false,

			// creating a single function for the entire app
			split: false,
		}),
		alias: {
			$houdini: ".houdini/",
			// $houdini: path.resolve(__dirname, '.houdini')
		}
	}
};

export default config;
