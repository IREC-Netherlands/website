import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(category: string) {
	let posts: Post[] = [];

	const paths = import.meta.glob('$lib/assets/markdown/posts/*.md', { eager: true });
	const imgPaths: Record<string, any> = import.meta.glob('$lib/assets/images/posts/*', {
		eager: true,
	});

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			if (category && metadata.categories.includes(category) && metadata.published) {
				let image: any = undefined;
				for (const _imgPath in imgPaths) {
					if (_imgPath.includes(slug)) {
						image = imgPaths[_imgPath].default;
					}
				}

				const post = { ...metadata, slug, image } satisfies Post;
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET({ params }) {
	const posts = await getPosts(params.slug);
	return json(posts);
}
