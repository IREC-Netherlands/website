import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-vercel';
import admonitions from 'remark-admonitions'
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

function myRemarkPlugin() {
    return (tree) => {
      visit(tree, (node) => {
        if (
          node.type === 'containerDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'textDirective'
        ) {
          if (node.name !== 'note') return
  
          const data = node.data || (node.data = {})
          const tagName = node.type === 'textDirective' ? 'span' : 'div'
  
          data.hName = tagName
          data.hProperties = h(tagName, node.attributes || {}).properties
        }
      })
    }
  }

const mdsvexOptions = {
	extensions: ['md'],
	remarkPlugins: [
        admonitions,
        [remarkToc, { tight: true }]
    ],
	rehypePlugins: [rehypeSlug],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
                themes: ['snazzy-light'],
                langs: [lang]
            });
			await highlighter.loadLanguage(lang);
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'snazzy-light' }));
            highlighter.dispose()
			return `{@html \`${html}\` }`;
		}
	}
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md'],
    compilerOptions: {
        warningFilter: (warning) =>
        warning.code !== "script_context_deprecated",
    }
};

export default config;
