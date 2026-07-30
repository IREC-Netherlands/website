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
			<h1>{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="tags">
			{#each data.meta.categories as category}
				<span class="surface-4">&num;{category}</span>
			{/each}
		</div>

		<div class="prose">
			<data.content />
		</div>
	</article>
</main>

<style>
	article {
		margin-inline: auto;

		h1 {
			text-transform: capitalize;
			font-size: 3.5rem;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-7);

			> * {
				padding: var(--size-2) var(--size-3);
				border-radius: var(--radius-round);
			}
		}
	}
</style>
