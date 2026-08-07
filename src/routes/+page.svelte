<script lang="ts">
	import Cards from '$lib/components/cards.svelte';
	import Jumbotron from '$lib/components/jumbotron.svelte';
	import '$lib/styles/pages.css';
	let { data } = $props();
</script>

<Jumbotron />

<div class="w-full flex justify-center text-5xl text-center font-semibold pt-24">Latest Events & Summary</div>

<section>
	{#each data.events.slice(0, 3) as event}
		<a href="/articles/{event.slug}">
			<Cards title={event.title} description={event.description} image={event.image.default} />
		</a>
	{/each}
</section>

<div class="w-full flex justify-center text-5xl text-center text-white font-semibold pt-20 bg-[#2d4685]">
	Community
</div>

<section class="bg-[#2d4685]">
	{#each data.events.slice(0, 3) as event}
		<a href="/articles/{event.slug}">
			<Cards title={event.title} description={event.description} image={event.image.default} />
		</a>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		gap: var(--size-7);
		justify-content: center;
		padding-block: var(--size-10);
		padding-inline: var(--size-5);
	}
</style>
