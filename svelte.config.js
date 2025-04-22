import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$assets: './src/lib/assets',
		}
	}
};

export default config;
