import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(category: string) {
	let posts: Post[] = [];

	const paths = import.meta.glob('../../../../markdown/posts/*.md', { eager: true });
	const imgPaths = import.meta.glob('../../../../../static/assets/posts/*', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		let imgPath: string | undefined = undefined;

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			for (const _imgPath in imgPaths) {
				if (_imgPath.includes(slug)) {
					const querry = /(?<=static).*$/.exec(_imgPath);
					if (querry) {
						imgPath = querry[0];
					}
				}
			}

			const metadata = file.metadata as Omit<Post, 'slug' | 'imgPath'>;
			const post = { ...metadata, slug, imgPath } satisfies Post;
			if (category) {
				post.categories.includes(category) && post.published && posts.push(post);
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
