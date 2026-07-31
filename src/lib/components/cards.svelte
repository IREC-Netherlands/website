<script>
	let {
		title = 'Card Title',
		description = 'This is a description of the card.',
		image = ''
	} = $props();
</script>

<div class="card">
	<img
		class="rounded-lg shadow-sm object-cover hover:-translate-y-2 duration-300"
		src={image ? image : '/assets/logo/grii-icon.png'}
		alt={title}
	/>
	<div class="card-body">
		<p class="card-title">{title}</p>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ddd;
		overflow: hidden;
		aspect-ratio: var(--ratio-portrait);
		background-color: var(--surface-1);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;

		@media (width >= 40rem) {
			max-width: var(--size-14);
		}
	}

	.card:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.card img {
		width: 100%;
		aspect-ratio: var(--ratio-landscape);
		object-fit: cover;
	}

	.card-body {
		padding: 20px;
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
