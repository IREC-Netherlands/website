<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<a href="/" class="logo">
		<img class="img-logo" src="/assets/logo/grii-logo.png" alt="GRII Belanda" />
	</a>
	<div>
		<p class="title">International Reformed Evangelical Church Netherlands</p>
		<p class="emphasize">Vierhovenkerk</p>
		<p>Obrechtstraat 50</p>
		<p>2625 XN, Delft</p>
		<p>{config.title} &copy {new Date().getFullYear()}</p>
	</div>
</footer>

<style>
	footer {
		bottom: 0%;
		width: 100%;

		background-color: var(--surface-3);
		border-top: 1px solid var(--border);

		margin-top: var(--size-12);
		padding-top: var(--size-13);
		padding-bottom: var(--size-11);
		padding-inline: var(--size-12);

		vertical-align: bottom;

		@media (max-width: 768px) {
			padding-inline: var(--size-3);
		}

		img {
			max-width: var(--size-13);
			margin-block: var(--size-5);
		}

		p {
			color: var(--text-3);
		}

		.title {
			font-weight: var(--font-weight-6);
		}

		.emphasize {
			font-weight: var(--font-weight-4);
		}
	}
</style>
