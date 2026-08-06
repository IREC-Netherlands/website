import { json } from '@sveltejs/kit';
import type { AboutContent } from '$lib/types';

async function getContent() {
	let abouts: AboutContent[] = [];

	const paths = import.meta.glob('$lib/assets/markdown/about/*.md', { eager: true });

	for (const path in paths) {

		const file = paths[path] as any;
		const slug = path.split('/').at(-1)?.replace('.md', '');

		const content = ""

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<AboutContent, 'slug' | 'content'>;
			const about = { ...metadata, slug, content } satisfies AboutContent;
			abouts.push(about);
		}
	}

	return abouts;
}

export async function GET() {
	const abouts = await getContent();
	return json(abouts);
}
