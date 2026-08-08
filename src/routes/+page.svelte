<script lang="ts">
	import Cards from '$lib/components/cards.svelte';
	import Jumbotron from '$lib/components/jumbotron.svelte';
	import '$lib/styles/pages.css';
	import { MapPin, ArrowRight } from 'lucide-svelte';
	import images_erec from '$lib/assets/images/index.png';
	let { data } = $props();
	const locationText = 'Find Our Location';
	const locationLink = 'https://maps.app.goo.gl/LWAync8CgCAb9Pea9';
	const musicLink = 'https://music.irec-europe.org/';
	const musicText = 'UPCOMING: Musical Vespers in Autumn';
</script>

<div class="relative grid grid-cols-12">
	<div
		class="row-start-1 row-span-4 col-start-5 col-span-9 max-h-[68vh] items-start justify-start relative z-10 overflow-hidden hidden lg:flex"
	>
		<img src={images_erec} class="justify-center items-center rounded-b-[5rem]" alt="EREC" />
	</div>
	<div
		class="row-start-1 row-span-4 col-start-6 col-span-3 items-start justify-start relative z-10 hidden lg:block"
	>
		<div class="relative w-full h-full curved-corner-topleft"></div>
	</div>
	<div
		class="row-start-1 row-span-4 col-start-3 col-span-3 items-start justify-start relative z-10 hidden lg:block"
	>
		<div class="relative bg-(--surface-4) w-full h-full rounded-br-[10em] 2xl:rounded-br-[16em]"></div>
	</div>
	<div
		class="row-start-1 row-span-4 col-start-1 col-span-3 max-lg:col-span-full items-start justify-start relative z-10"
	>
		<div class="relative bg-(--surface-4) w-full h-full rounded-b-[5rem]"></div>
	</div>

	<div class="row-start-1 row-span-4 col-span-full relative z-20 flex justify-center items-center px-5 py-10 md:px-20 text-white">
		<Jumbotron />
	</div>
	<section
		class="w-full mx-auto grid md:grid-cols-2 2xl:grid-cols-12 gap-5 lg:gap-8 row-end-7 row-span-3 col-span-full relative z-20 px-5 md:px-20"
	>
		<div class="discovery-widget bg-(--surface-2) 2xl:col-start-2 2xl:col-span-5">
			<h2
				class="text-black mb-4 xl:mb-6 text-xl sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium"
			>
				<b>English Service</b> | Sunday, 1.00 PM
			</h2>
			<a href={locationLink}>
				<button
					class="w-full hover:shadow-none inline-flex items-center text-center rounded-3xl leading-none
					group transform transition duration-200 cursor-pointer font-sans text-base lg:text-xl px-4 py-3 sm:px-8
					font-medium shadow-md justify-center bg-(--surface-4) hover:bg-black text-white hover:text-white"
					><MapPin class="inline me-1 group-hover:translate-y-0.5" />{locationText}</button
				>
			</a>
		</div>
		<div class="discovery-widget bg-white 2xl:col-span-5">
			<h2
				class="text-black mb-4 xl:mb-6 text-xl sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium"
			>
				♫ <b>Choral</b> Service & <b>Concert</b> ♪
			</h2>
			<a href={musicLink}>
				<button
					class="w-full hover:shadow-none inline-flex items-center text-center rounded-3xl 
					leading-none transform transition duration-200 cursor-pointer font-sans 
					text-base lg:text-xl px-4 py-3 sm:px-8 font-medium shadow-md justify-center 
					bg-(--surface-4) group hover:bg-black text-white hover:text-white"
					><ArrowRight class="inline me-1 group-hover:translate-x-0.5" />
					{musicText}</button
				>
			</a>
		</div>
	</section>

	<section class="relative col-span-full z-10 my-16 px-3 md:px-20">
		<div class="w-full flex text-5xl text-left font-semibold mb-8 py-4 border-b">
			Seminar and Events
		</div>
		<div class="w-full flex flex-wrap justify-center gap-10">
			{#each data.events.slice(0, 4) as event}
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
		<div class="w-full flex text-5xl text-center font-semibold mb-8 py-4 text-white border-b">
			Community
		</div>
		<div class="w-full flex flex-wrap justify-center gap-6">
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
		border-radius: var(--radius-3xl);
		border: 0.4rem solid var(--surface-2);
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

	.curved-corner-topleft {
		width: 300px;
		height: 300px;
		overflow: hidden;
		position: relative;
		z-index: 100;
	}

	.curved-corner-topleft::before {
		content: '';
		display: block;
		width: 200%;
		height: 200%;
		position: absolute;
		border-radius: 50%;
		top: 0px;
		left: 0px;
		box-shadow: -150px -150px 0 0 var(--surface-4);
	}
</style>
