<script lang="ts">
	import Cards from '$lib/components/cards.svelte';
	import Jumbotron from '$lib/components/jumbotron.svelte';
	import '$lib/styles/pages.css';
	import { MapPin } from 'lucide-svelte';
	let { data } = $props();
	const buttonText = 'Our Location';
	const buttonLink = 'https://maps.app.goo.gl/eN5qRN4VpHedyr7FA';
</script>

<div class="row-start-1 row-end-8 col-span-full flex items-start justify-start relative z-10">
	<article>
		<div class="relative surface-4 w-screen h-[25vh] rounded-b-4xl"></div>
	</article>
</div>

<header
	class="row-start-1 col-span-full relative z-20 flex justify-center px-5 md:px-20 text-white"
>
	<Jumbotron />
</header>
<section
	class=" mx-auto grid md:grid-cols-2 2xl:grid-cols-12 gap-5 lg:gap-8 row-start-2 col-span-full relative z-20 px-5 md:px-20"
>
	<div
		class="relative z-20 bg-blue-400 rounded-3xl w-2xl px-7 sm:px-9 md:px-5 xl:px-10 py-5 sm:py-10 mb-5 md:mb-0 2xl:col-span-5 2xl:col-start-2"
	>
		<a href={buttonLink}>
			<button class="loc-button"><MapPin class="inline" /> {buttonText}</button>
		</a>
	</div>
	<div
		class="relative z-10 bg-blue-400 rounded-3xl px-7 sm:px-9 md:px-5 xl:px-12 py-5 sm:py-10 2xl:col-span-5"
	>
		asdf
	</div>
</section>

<section class="row-start-3 col-span-full relative z-10 mb-16 px-5 md:px-20">
	<div class="w-full flex justify-center text-5xl text-center font-semibold py-6">
		⨎ Events & Summary
	</div>
	<div class="w-full flex justify-center gap-10">
		{#each data.events.slice(0, 3) as event}
			<a href="/articles/{event.slug}">
				<Cards
					title={event.title}
					description={event.description}
					image={event.image.default}
					--aspect-ratio="4/5"
				/>
			</a>
		{/each}
	</div>
</section>
<section
	class="relative z-0 pointer-events-none row-start-1 row-end-6 col-span-full v-gradient-bg v-gradient-bg--gold v-gradient-bg--fade c-home-discover-end"
></section>
<section class="row-start-5 col-span-full relative z-10 bg-[#2d4685] px-5 md:px-20">
	<div class="w-full flex justify-center text-5xl text-center font-semibold py-6">⨎ Community</div>
	<div class="w-full flex justify-center gap-10">
		{#each data.communities as community}
			<a href="/articles/{community.slug}">
				<Cards
					title={community.title}
					description={community.description}
					image={community.image.default}
					--aspect-ratio="16/10"
				/>
			</a>
		{/each}
	</div>
</section>

<style>
	/* section {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		padding-block: 5rem;
		padding-inline: 1.5rem;
	} */

	.loc-button {
		margin-top: 16px;
		width: 100%;
		padding: 12px 16px;
		color: var(--text-1);
		font-weight: var(--font-weight-medium);
		background-color: var(--surface-1);
		border: none;
		border-radius: var(--radius-3xl);
		cursor: pointer;
		transition: background-color 0.1s;

		&:hover {
			font-weight: var(--font-weight-semibold);
			box-shadow: var(--shadow-md);
		}
	}
</style>
