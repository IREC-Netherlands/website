import type { AboutContent } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	try {
		const response = await fetch('api/about');
		const abouts: AboutContent[] = await response.json();

		for (const about of abouts){
			const content = await import(`../../markdown/about/${about.slug}.md`)
			about.content = content.default
		}
		return { abouts };
		
	} catch (e) {
		console.log(e)
		error(404, `IDK`);
	}
}

// export async function load({ fetch }) {
// 	const response = await fetch('api/posts')
// 	const posts: Post[] = await response.json()
// 	return { posts }
// }
