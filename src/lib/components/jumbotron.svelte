<script>
	import { MapPin } from 'lucide-svelte';
	const title = 'IREC Netherlands';
	const subtitle = 'International Reformed Evangelical Church in the Netherlands';
	const description =
		'We are a Bible-believing, Reformed church that aims to share the Gospel to the people in the Netherlands. Join us every Sunday for worship.';
	const buttonText = 'Our Location';
	const buttonLink = 'https://maps.app.goo.gl/eN5qRN4VpHedyr7FA';
</script>

<div class="jumbotron">
	<div class="text">
		<p class="title">{title}</p>
		<p class="subtitle">
			{subtitle}
		</p>
		<p>{description}</p>
	</div>
</div>

<style>
	.jumbotron {
		width: 100%;
		justify-self: center;
		padding: 70px 10%;
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: left;
	}

	.jumbotron .text {
		max-width: 30rem;
	}

	.jumbotron .title {
		font-size: var(--text-5xl);
		line-height: var(--text-5xl--line-height);
		font-weight: var(--font-weight-7);
	}

	.jumbotron .subtitle {
		font-size: 1.5rem;
		font-weight: var(--font-weight-5);
	}

	.jumbotron p {
		margin-top: 10px;
	}

	.jumbotron button {
		margin-top: 16px;
		width: 100%;
		padding: 12px 16px;
		color: var(--text-1);
		font-weight: var(--font-weight-medium);
		background-color: var(--surface-1);
		border: none;
		border-radius: var(--radius-3xl);
		cursor: pointer;
		transition: background-color 0.1s;

		&:hover {
			font-weight: var(--font-weight-semibold);
			box-shadow: var(--shadow-md);
		}
	}
</style>
