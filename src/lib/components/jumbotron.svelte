<script>
	import { MapPin } from 'lucide-svelte';
	const title = 'IREC Netherlands';
	const subtitle = 'International Reformed Evangelical Church in the Netherlands';
	const description =
		'We are a Bible-believing, Reformed church that aims to share the Gospel to the people in the Netherlands. Join us every Sunday for worship.';
</script>

<div class="jumbotron">
	<div class="text">
		<p class="title">{title}</p>
		<p class="subtitle">
			{subtitle}
		</p>
		<p class="description">{description}</p>
	</div>
</div>

<style>
	.jumbotron {
		width: 100%;
		justify-self: center;
		padding-block: 1.5rem;
		padding-bottom: 8rem;

		@media (width > 40rem) {
			padding-left: 6rem;
		}

		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: left;
	}

	.jumbotron .text {
		max-width: 33rem;
	}

	.jumbotron .title {
		font-size: var(--text-5xl);
		line-height: var(--text-5xl--line-height);
		font-weight: var(--font-weight-semibold);
		margin-bottom: 0.5rem;
	}

	.jumbotron .subtitle {
		font-size: var(--text-xl);
		line-height: var(--text-xl--line-height);
		font-weight: var(--font-weight-medium);
		margin-bottom: 1rem;
		border-bottom: 1px white solid;
	}

	.jumbotron p.description {
		margin-top: 1rem;
		font-size: var(--text-lg);
		line-height: var(--text-lg--line-height);
	}
</style>
