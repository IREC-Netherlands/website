<script>
	import '$lib/styles/pages.css';
	import ProjectHighlight from '$lib/components/projectHighlight.svelte';
</script>

<main>
	<h1>Activities Bulletins</h1>
	<section class="projects">
		<ProjectHighlight />
		<ProjectHighlight />
		<ProjectHighlight />
		<ProjectHighlight />
		<ProjectHighlight />
		<ProjectHighlight />
	</section>
</main>

<style>
	.projects {
		display: flex;
		gap: var(--size-4);
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
