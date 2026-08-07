import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(category: string) {
	let posts: Post[] = [];

	const paths = import.meta.glob('$lib/assets/posts/**/*.md', { eager: true });
	const imgPaths: Record<string, any> = import.meta.glob(
		'$lib/assets/posts/**/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{ eager: true }
	);

	for (const path in paths) {
		const [_, directory, slug, ...rest] = /(.+\/(.+))\/[^\/]+$/.exec(path)!;
		const filteredKeys = Object.keys(imgPaths).filter((key) => key.includes(directory) && key.includes('/index.'));
		const file = paths[path];
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			if (category && metadata.categories.includes(category) && metadata.published) {
				let image: any = imgPaths[filteredKeys[0]] ? filteredKeys: undefined;
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
