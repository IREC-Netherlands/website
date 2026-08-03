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
	<aside>
		{#each data.abouts as about, i}
		<button onclick={() => (index = i)} >
				{about.title}
			</button>
		{/each}
	</aside>
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
		gap: 20px;

		& aside {
			display: block;
			padding-top: 5em;
			border-right: 1px solid  rgba(235, 224, 224, 1);

			& button {
				padding-block: 10px;
				width: 250px;
				text-align: left;
			}

			& button:hover {
				background-color: rgba(235, 224, 224, 0.3);
				transition: ease-in 0.1s;
			}
		}
	}
</style>
