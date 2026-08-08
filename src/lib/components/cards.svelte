<script>
	import default_icon from '$lib/assets/logo/grii/icon.png';

	let {
		title = 'Card Title',
		description = 'This is a description of the card.',
		image
	} = $props();
</script>

<div class="card">
	<div class="image-container">
		{#if image}
			<img alt={title} src={image} class="shadow-sm hover:-translate-y-2 duration-300" />
		{:else}
			<img alt="default" src={default_icon} />
		{/if}
	</div>
	<div class="captions">
		<p class="text-xl font-bold m-0">{title}</p>
		<p class="card-description text-md">{description}</p>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-rows: auto 1fr;
		/* height: 100%; */
		overflow: hidden;
		background-color: var(--surface-1);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;
		border-top-left-radius: var(--radius-3xl);
		border-bottom-right-radius: var(--radius-4xl);
		@media (width >= 768px) {
			max-width: var(--max-width, 25rem);
		}

		.image-container {
			max-height: var(--max-image-height);
		}

		img {
			width: 100%;
			aspect-ratio: var(--aspect-ratio);
			object-fit: cover;
		}
	}

	.card:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.card-description {
		color: var(--text-1);
		font-weight: var(--font-weight-3);
		margin-top: 10px;
		height: 4rem;

		line-clamp: 3;
		overflow-y: scroll;
		text-overflow: ellipsis;
		scrollbar-width: none;
	}

	.captions{
		background-color: var(--surface-1);
		padding: calc(5 * var(--spacing));
		height: var(--caption-height);
		z-index: 10;
	}
</style>
