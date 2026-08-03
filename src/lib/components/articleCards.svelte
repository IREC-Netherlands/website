<script lang="ts">
	let {
		image = '',
		title = 'Fullname',
		descriptions = 'Job descriptions',
		date = 'Research topic',
		categories = ['articles']
	} = $props();
</script>

<div class="card">
	{#if image}
		<img src={image} alt={title} />
	{:else}
		<img src="/assets/logo/UBIG-logo only.png" alt={title} />
	{/if}

	<div class="card-content">
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{descriptions}</p>

		<div class="card-date">
			<small>Date: {date}</small>
		</div>

		<div class="card-field">
			<!-- categories -->
			{#each categories as category}
				<span class="tag surface-4">&num; {category}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		border: 1px solid #ddd;
		overflow: hidden;
		width: 100%;
		background-color: white;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		align-items: center;

		@media (width < 768px) {
			flex-direction: column;
		}
	}

	.card:hover {
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.card img {
		width: 200px;
		height: 100%;
		object-fit: cover;
	}

	.card-content {
		width: 100%;
		padding: 20px;
		flex: 1;
	}

	.card-title {
		font-size: 1.75rem;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.card-description {
		font-size: 1rem;
		color: #555;
		margin-bottom: 20px;

		line-clamp: 2;
		overflow-y: scroll;
		text-overflow: ellipsis;
		height: var(--size-10);
		scrollbar-width: none;
	}

	.card-date {
		display: flex;
		justify-content: right;
	}

	.card-field {
		display: flex;
		gap: var(--size-2);
		margin-top: var(--size-7);

		> * {
			padding: var(--size-2) var(--size-3);
			border-radius: var(--radius-xl);
		}
	}

	.tag {
		text-wrap: nowrap;
	}
</style>
