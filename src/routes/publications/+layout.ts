import { activePage } from "$lib/state/activePage.svelte";

export function load() {
    activePage.page = 'Publications';
}