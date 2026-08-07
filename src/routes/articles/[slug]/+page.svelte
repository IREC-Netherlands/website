<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '$lib/styles/pages.css';
	import '$lib/styles/classic.css';
	let { data } = $props();

	let counter = $state(0);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<main>
	<article>
		<hgroup>
			<h1 class="text-5xl capitalize">{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="tags flex gap-3 mt-9">
			{#each data.meta.categories as category}
				<span class="surface-4 rounded-2xl px-3 py-2">&num;{category}</span>
			{/each}
		</div>
		<div class="grid grid-cols-[1fr_2fr] my-5 gap-3 max-sm:grid-cols-1">
			<div class=" min-w-sm">
				<div class="max-sm:hidden flex flex-wrap gap-2">
					{#each data.images as image}
						<img alt={data.meta.title} src={image.default} />
					{/each}
				</div>
				<div class="sm:hidden">
					<Splide>
						{#each data.images as image}
							<SplideSlide>
								<img alt={data.meta.title} src={image.default} />
							</SplideSlide>
						{/each}
					</Splide>
				</div>
			</div>
			<div class="prose">
				<data.content />
			</div>
		</div>
	</article>
</main>


