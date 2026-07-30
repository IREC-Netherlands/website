<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		bottom: 0%;
		width: 100%;

		background-color: var(--surface-3);
		border-top: 1px solid var(--border);

		padding-block: var(--size-7);
		padding-inline: var(--size-12);

		@media (max-width: 768px) {
			padding-inline: var(--size-3);
		}

		p {
			color: var(--text-2);
		}
	}
</style>
