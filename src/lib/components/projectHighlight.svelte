<script>
	let {
		title = 'Card Title',
		description = 'This is a description of the card.',
		image = ''
	} = $props();
</script>

<div class="card">
	{#if image}
		<img src={image} alt={title} />
	{:else}
		<img src="/assets/logo/UBIG-logo only.png" alt={title} />
	{/if}
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ddd;
		border-radius: 10px;
		overflow: hidden;
		width: 40%;
		aspect-ratio: var(--ratio-landscape);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s ease;

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.card:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.card img {
		width: 100%;
		height: 60%;
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
		font-size: 1rem;
		color: #555;
		margin-top: 10px;
	}
</style>
