<script lang="ts">
	import { page } from '$app/state';
	import Cards from '$lib/components/cards.svelte';
	import Jumbotron from '$lib/components/jumbotron.svelte';
	import '$lib/styles/pages.css';
	let { data } = $props();
</script>

<Jumbotron />

<main>
	<h1>Research News</h1>

	<section class="news">
		{#each data.news as newsie}
			<a href="/articles/{newsie.slug}">
				<Cards title={newsie.title} description={newsie.description} />
			</a>
		{/each}
	</section>

	<h1>Notices</h1>

	<section class="notices">
		{#each data.notices as notice}
			<a href="/articles/{notice.slug}">
				<Cards title={notice.title} description={notice.description} />
			</a>
		{/each}
	</section>

	<h1>Events</h1>
	<section class="events">
		{#each data.events as event}
			<a href="/articles/{event.slug}">
				<Cards title={event.title} description={event.description} />
			</a>
		{/each}
	</section>
</main>

<style>
	.news,
	.notices,
	.events {
		display: flex;
		justify-content: center;
		gap: var(--size-7);
		flex-wrap: wrap;
	}
</style>
