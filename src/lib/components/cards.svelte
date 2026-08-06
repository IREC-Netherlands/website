<script>
	import default_icon from '$lib/assets/logo/grii/icon.png';

	let {
		title = 'Card Title',
		description = 'This is a description of the card.',
		image
	} = $props();
</script>

<div class="card">
	{#if image}
		<enhanced:img
			alt={title}
			src={image}
			class="card-image shadow-sm hover:-translate-y-2 duration-300"
		/>
	{:else}
		<img alt="default" src={default_icon} />
	{/if}
	<div class="card-body">
		<p class="card-title">{title}</p>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ddd;
		overflow: hidden;
		background-color: var(--surface-1);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;

		.card-image {
			border-radius: var(--radius-lg);
			object-fit: cover;
		}

		@media (width >= 768px) {
			max-width: var(--size-15);
		}
	}

	.card:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.card-body {
		padding: 20px;
		max-height: var(--size-12);
	}

	.card-title {
		font-size: var(--text-lg);
		line-height: var(--text-lg--line-height);
		font-weight: 700;
		margin: 0;
	}

	.card-description {
		font-size: var(--size-19);
		color: var(--text-1);
		font-weight: var(--font-weight-3);
		margin-top: 10px;

		line-clamp: 3;
		overflow-y: scroll;
		text-overflow: ellipsis;
		height: var(--size-9);
		scrollbar-width: none;
	}
</style>
