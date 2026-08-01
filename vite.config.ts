import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server:{
		fs: {
			strict: true,
			deny: ['*.*']
		}
	},
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
        		warningFilter: (warning) => warning.code !== "script_context_deprecated",
			},
			prerender: {
				handleHttpError: 'warn',
				handleMissingId: 'warn',
				handleUnseenRoutes: 'warn'
			},
			adapter: adapter(),
			preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
			extensions: ['.svelte', '.svx', '.md']
		}),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
