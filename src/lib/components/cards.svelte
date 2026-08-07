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
	<div class="surface-1 p-5 h-50 z-10">
		<p class="text-lg font-bold m-0">{title}</p>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		overflow: hidden;
		background-color: var(--surface-1);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;
		border-radius: var(--radius-2xl);
		@media (width >= 768px) {
			max-width: var(--max-width, var(--size-15));
		}

		.image-container {
			max-height: var(--max-height);
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
		font-size: var(--size-19);
		color: var(--text-1);
		font-weight: var(--font-weight-3);
		margin-top: 10px;
		height: var(--size-9);

		line-clamp: 3;
		overflow-y: scroll;
		text-overflow: ellipsis;
		scrollbar-width: none;
	}
</style>
