<script lang="ts">
	import { page } from '$app/state';
	import Cards from '$lib/components/cards.svelte';
	import Jumbotron from '$lib/components/jumbotron.svelte';
	import '$lib/styles/pages.css';
	let { data } = $props();
</script>

<Jumbotron />

<main>
	<h1>Upcoming Events</h1>
	<section class="events">
		{#each data.events.slice(0, 3) as event}
			<a href="/articles/{event.slug}">
				<Cards title={event.title} description={event.description} />
			</a>
		{/each}
	</section>

	<!-- <h1>Acticles</h1>
	<section class="notices">
		{#each data.notices.slice(0, 3) as notice}
			<a href="/articles/{notice.slug}">
				<Cards title={notice.title} description={notice.description} />
			</a>
		{/each}
	</section> -->
</main>

<style>
	h1 {
		font-size: var(--text-6xl);
		line-height: var(--text-6xl--line-height);
		margin-top: var(--size-9);
		justify-self: center;
	}
	.events {
		display: flex;
		justify-content: center;
		gap: var(--size-7);
		flex-wrap: wrap;
	}
</style>
