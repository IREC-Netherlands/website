import type { Post } from '$lib/types';
import { activePage } from '$lib/state/activePage.svelte.js';

export async function load({ fetch }) {
    activePage.page = 'Home'
    const responseEvents = await fetch('api/posts/events');
    const responseCommunities = await fetch('api/posts/communities');
    const events: Post[] = await responseEvents.json();
    const communities: Post[] = await responseCommunities.json();
    return { events, communities };
}
