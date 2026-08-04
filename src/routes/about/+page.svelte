<script lang="ts">
	import '$lib/styles/pages.css';
	import '$lib/styles/classic.css';

	import { fade, fly } from 'svelte/transition';
	let { data } = $props();
	let index = $state(0);

	let about = () => data.abouts.at(index)!.content;
</script>

<svelte:head>
	<title>IREC Netherlands | About</title>
	{#each data.abouts as about}
		<meta property="og:type" content="article" />
		<meta property="og:title" content={about.title} />
	{/each}
</svelte:head>

<main>
	<div class="sidebar">
		<select bind:value={index} class="select">
			<option disabled selected>Confessions of Faith:</option>
			{#each data.abouts as about, i}
				<option value={i}>
					{about.title}
				</option>
			{/each}
		</select>

		<h2 class="side-menu">Confessions of Faith</h2>
		{#each data.abouts as about, i}
			<button onclick={() => (index = i)} class="side-menu {index === i ? 'active' : ''}">
				{about.title}
			</button>
		{/each}
	</div>

	<article>
		{#key index}
			{const about = data.abouts.at(index)!}
			<div transition:fly class="content">
				<h1>{about.title}</h1>
				<about.content />
			</div>
		{/key}
	</article>
</main>

<style lang="scss">
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

				.side-menu {
					display: none;
				}
			}
		}
	}
</style>
