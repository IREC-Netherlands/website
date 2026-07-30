<script lang="ts">
	import { formatDate, getYear } from '$lib/utils';
	import * as config from '$lib/config';
	import '$lib/styles/pages.css';
	import ArticleCards from '$lib/components/articleCards.svelte';
	let { data } = $props();

	class Year {
		_year: string = `0`;

		isYearDifferent(date: string) {
			const inputYear: string = getYear(date);
			if (inputYear !== this._year) {
				this._year = inputYear;
				return true;
			} else {
				return false;
			}
		}

		printYear() {
			return this._year;
		}
	}
	let year = new Year();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<main>
	<h1>Articles</h1>

	<section>
		<ul class="posts">
			{#each data.posts as post}
				<a href="/articles/{post.slug}">
					{#if year.isYearDifferent(post.date)}
						<h3 class="year">
							{year.printYear()}
						</h3>
					{/if}

					<ArticleCards
						title={post.title}
						descriptions={post.description}
						date={formatDate(post.date)}
						categories={post.categories}
					/>
				</a>
			{/each}
		</ul>
	</section>
</main>

<style>
	.year {
		padding-top: var(--size-7);
		padding-bottom: var(--size-5);
	}

	a,
	a:hover,
	a:visited,
	a:active {
		color: inherit;
		text-decoration: none;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
	}
</style>
