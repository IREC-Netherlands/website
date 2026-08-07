<script lang="ts">
	import '../app.css';
	import '$lib/styles/open.css';
	import { ChevronUpCircle } from 'lucide-svelte';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<Header />
<div class="layout">
	{@render children()}
</div>
<Footer />
<a title="Back to top" class="back-to-top" href="#top"><ChevronUpCircle size="40px" /></a>

<style>
	.layout {
		margin-inline: auto;
		min-height: 80vh;
	}

	.back-to-top {
		display: none;
		position: fixed;
		bottom: 40px;
		right: 40px;
		padding: 5px;
		background-color: rgba(175, 175, 175, 0.35);
		z-index: 100;
		border-radius: var(--radius-2xl);
		translate: 100px;
		transition:
			0.4s translate,
			0.2s background-color;

		@media (width < 40rem) {
			display: block;
		}
	}
	.back-to-top:hover {
		background-color: rgba(136, 136, 136, 1);
	}

	
	@container scroll-state(scrollable: top) {
		.back-to-top {
			translate: 0;
		}
	}
</style>
