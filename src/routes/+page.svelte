<script lang="ts">
	import Cards from '$lib/components/cards.svelte';
	import Jumbotron from '$lib/components/jumbotron.svelte';
	import '$lib/styles/pages.css';
	import { MapPin } from 'lucide-svelte';
	let { data } = $props();
	const buttonText = 'Our Location';
	const buttonLink = 'https://maps.app.goo.gl/eN5qRN4VpHedyr7FA';
</script>

<div class="relative grid grid-cols-12">
	<div class="row-start-1 row-span-4 col-span-full items-start justify-start relative z-10">
		<div class="relative bg-(--surface-4) w-full h-full rounded-b-4xl"></div>
	</div>

	<div class="row-start-1 col-span-full relative z-20 flex justify-center px-5 md:px-20 text-white">
		<Jumbotron />
	</div>
	<section
		class="w-full mx-auto grid md:grid-cols-2 2xl:grid-cols-12 gap-5 lg:gap-8 row-start-2 row-span-4 col-span-full relative z-20 px-5 md:px-20"
	>
		<div class="discovery-widget 2xl:col-start-2 2xl:col-span-5">
			<h2
				class="text-black mb-4 xl:mb-6 text-xl sm:text-base md:text-base lg:text-lg xl:text-xl font-medium"
			>
				Join our Sunday Service!
			</h2>
			<a href={buttonLink}>
				<button
					class="w-full hover:shadow-none inline-flex items-center text-center rounded-3xl leading-none transform transition duration-200 cursor-pointer font-sans text-base px-4 py-3 sm:px-8 font-medium shadow-md justify-center bg-(--surface-4) hover:bg-black text-white hover:text-white"
					><MapPin class="inline me-1" />{buttonText}</button
				>
			</a>
		</div>
		<div class="discovery-widget 2xl:col-span-5">
			<h2
				class="text-black mb-4 xl:mb-6 text-xl sm:text-base md:text-base lg:text-lg xl:text-xl font-medium"
			>
				Join our Sunday Service!
			</h2>
			<a href={buttonLink}>
				<button
					class="w-full hover:shadow-none inline-flex items-center text-center rounded-3xl leading-none transform transition duration-200 cursor-pointer font-sans text-base px-4 py-3 sm:px-8 font-medium shadow-md justify-center bg-(--surface-4) hover:bg-black text-white hover:text-white"
					><MapPin class="inline me-1" />{buttonText}</button
				>
			</a>
		</div>
	</section>

	<section class="relative col-span-full z-10 my-16 px-2 md:px-20">
		<div class="w-full flex text-5xl text-left font-semibold mb-8 py-4 sm:ms-15 border-b">Seminar and Events</div>
		<div class="w-full flex flex-wrap justify-center gap-10">
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

	<section class="col-span-full relative z-10 bg-[#2d4685] py-16 px-5 md:px-20">
		<div class="w-full flex text-5xl text-center font-semibold mb-8 py-4 text-white sm:ms-15 border-b">
			Community
		</div>
		<div class="w-full flex flex-wrap justify-center gap-10">
			{#each data.communities as community}
				<a href="/articles/{community.slug}">
					<Cards
						title={community.title}
						description={community.description}
						image={community.image.default}
						--aspect-ratio="16/10"
						--caption-height="8rem"
					/>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.discovery-widget {
		position: relative;
		z-index: 10;
		background-color: var(--surface-2);
		border-radius: var(--radius-3xl);
		padding-inline: calc(7 * var(--spacing));
		padding-block: calc(5 * var(--spacing));

		@media (width >= 40rem) {
			padding-inline: calc(var(--spacing) * 9);
			padding-block: calc(var(--spacing) * 10);
		}

		@media (width >= 48rem) {
			padding-inline: calc(var(--spacing) * 5);
		}

		@media (width >= 80rem /* 1280px */) {
			padding-inline: calc(var(--spacing) * 12);
		}
	}
</style>
