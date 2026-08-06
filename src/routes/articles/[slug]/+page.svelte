<script lang="ts">
	import { formatDate } from '$lib/utils';
	import '$lib/styles/pages.css';
	import '$lib/styles/classic.css';
	let { data } = $props();
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
			<div class="min-w-sm">
				<img alt={data.meta.title} src={data.image} />
			</div>

			<div class="prose">
				<data.content />
			</div>
		</div>
	</article>
</main>
