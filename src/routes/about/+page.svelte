<script lang="ts">
	import { formatDate } from '$lib/utils';
	import '$lib/styles/pages.css';
	import '$lib/styles/classic.css';
	let { data } = $props();
	let index = $state(0);

	let about = () => data.abouts.at(index)!.content;
</script>

<!-- <svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head> -->

<main>
	<div class="sidebar">
		<select bind:value={index} class="select">
			{#each data.abouts as about, i}
				<option value={i}>
					{about.title}
				</option>
			{/each}
		</select>

		{#each data.abouts as about, i}
			<button onclick={() => (index = i)} class="button {index === i ? 'active' : ''}">
				{about.title}
			</button>
		{/each}
	</div>

	<article>
		<div class="content">
			{#each data.abouts.slice(index, index + 1) as about}
				<h1>{about.title}</h1>
				<about.content />
			{/each}
		</div>
	</article>
</main>

<style>
	main {
		display: flex;
		gap: 10px;

		.sidebar {
			.select {
				display: none;
				width: 100%;
				font-size: var(--text-md);
				line-height: var(--text-md--line-height);
				border: 1px solid black;
				border-radius: var(--radius-xl);
				padding-block: 1em;
				font-weight: var(--font-weight-medium);
				margin-bottom: 2em;
			}

			flex: 0 0 250px;
			padding-top: 5em;
			border-right: 1px solid var(--surface-1);

			& button {
				padding-inline: var(--size-2);
				padding-block: var(--size-3);
				text-align: left;
				width: 100%;

				&.active {
					background-color: var(--surface-1);
				}
			}

			& button:hover {
				background-color: var(--surface-1);
				transition: ease-in 0.2s;
			}
		}

		& article {
			flex: 1;
		}

		@media (width <= 768px) {
			display: block;

			.sidebar {
				padding-top: 0;

				.select {
					display: block;
				}

				.button {
					display: none;
				}
			}
		}
	}
</style>
