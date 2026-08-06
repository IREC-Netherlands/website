import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`$lib/assets/markdown/posts/${params.slug}.md`);
		const imgPaths: Record<string, any> = import.meta.glob(
			`$lib/assets/images/posts/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}`,
			{
				eager: true,
				query: {
					enhanced: true
				}
			}
		);

		for (const imgPath in imgPaths) {
			if (imgPath.includes(params.slug)) {
				return {
					content: post.default,
					meta: post.metadata,
					image: imgPaths[imgPath].default
				};
			}
		}

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
