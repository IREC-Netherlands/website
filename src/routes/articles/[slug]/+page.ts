import { error } from '@sveltejs/kit';

export async function load({ params }: any) {
	try {
		const post = await import(`$lib/assets/posts/${params.slug}/index.md`);
		const imgPaths: Record<string, any> = import.meta.glob(
			`$lib/assets/posts/**/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}`,
			{
				eager: true
			}
		);

		const filteredKeys = Object.keys(imgPaths)
			.filter((key) => key.includes(params.slug))
			.sort((a: string, b: string) => Number(a.includes('/index.')) * -100 + (a > b ? 1 : -1));

		const images: any[] = [];
		for (const key of filteredKeys) {
			images.push(imgPaths[key]);
		}

		return {
			content: post.default,
			meta: post.metadata,
			images: images
		};
	} catch (e) {
		console.log(e);
		error(404, `Could not find ${params.slug}`);
	}
}
