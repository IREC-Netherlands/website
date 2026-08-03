<script>
	const title = 'IREC Netherlands (PRII)';
	const subtitle = 'International Reformed Evangelical Church in the Netherlands';
	const description =
		'We are Bible-believing, Reformed church that aims to share the Gospel to the people in the Netherlands. Join us every Sunday for worship.';
	const buttonText = 'Our Location';
	const buttonLink = 'https://maps.app.goo.gl/eN5qRN4VpHedyr7FA';
</script>

<div class="jumbotron surface-4">
	<div class="text">
		<p class="title">{title}</p>
		<p class="subtitle">
			{subtitle}
		</p>
		<p>{description}</p>
		<br />
		<p class="footnote">
			<sup>*1</sup> PRII is the first out of three church growth stages in the Synod of IREC
		</p>

		<a href={buttonLink}>
			<button>{buttonText}</button>
		</a>
	</div>
</div>

<style>
	.jumbotron {
		width: 100%;
		justify-self: center;
		padding: 70px 10%;
		text-align: left;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: left;
	}

	.jumbotron .text {
		max-width: var(--size-15);
	}

	.jumbotron .title {
		font-size: 2rem;
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
		margin-top: 40px;
		padding: 10px 15px;
		font-weight: var(--font-weight-medium);
		color: var(--text-1);
		background-color: var(--surface-1);
		border: none;
		border-radius: var(--radius-xl);
		cursor: pointer;
		transition: background-color 0.1s;

		&:hover {
			font-weight: var(--font-weight-semibold);
			box-shadow: var(--shadow-md);
		}
	}

	.jumbotron .footnote {
		font-size: var(--text-xs);
	}
</style>
