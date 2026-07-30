<script>
	let {
		title = 'Card Title',
		description = 'This is a description of the card.',
		image = ''
	} = $props();
</script>

<div class="card">
	<img src={image ? image : '/assets/logo/grii-icon.png'} alt={title} />
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ddd;
		overflow: hidden;
		width: var(--size-14);
		aspect-ratio: var(--ratio-portrait);
		background-color: var(--surface-1);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;
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
		font-size: 1.5rem;
		font-weight: bold;
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
