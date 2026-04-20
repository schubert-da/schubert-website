import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/benfords-law')) return;
				throw new Error(message);
			}
		},
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$assets: './src/lib/assets',
		}
	}
};

export default config;
