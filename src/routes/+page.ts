import type { Post } from '$lib/types';
import { activePage } from '$lib/state/activePage.svelte.js';

export async function load({ fetch }) {
    activePage.page = 'Home'
    const responseNews = await fetch('api/posts/news');
    const responseNotices = await fetch('api/posts/notices');
    const responseEvents = await fetch('api/posts/events');
    const news: Post[] = await responseNews.json();
    const notices: Post[] = await responseNotices.json();
    const events: Post[] = await responseEvents.json();
    return { news, notices, events };
}
