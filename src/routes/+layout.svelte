<script lang="ts">
	import '../app.css';

	import 'open-props/style';
	import 'open-props/buttons';
	import 'open-props/normalize';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<Header />
<div class="layout">
	{@render children()}
</div>
<Footer />

<style>
	.layout {
		margin-inline: auto;
		margin-bottom: var(--size-7);
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 80vh;
	}
</style>
