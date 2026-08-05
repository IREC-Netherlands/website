<script>
	import '$lib/styles/pages.css';
	import ProjectHighlight from '$lib/components/projectHighlight.svelte';
</script>

<main>
	<div>
		<h1>Newsletter</h1>
		<section class="projects">
			<ProjectHighlight />
			<ProjectHighlight />
		</section>
		<section class="aspect-4/5 md:aspect-video calendar">
			<iframe
				title="calendar"
				src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FAmsterdam&showPrint=0&src=cmVmb3JtZWRiaWJsZXN0dWR5bmxAZ21haWwuY29t&src=ZTY0YmZmMzUzODEzZWYyNmZiN2YyMTQyOGY5NTZlMzlkOWYzMDEwY2E5ZmE1Y2ExMTA0YzgwOGM5YzMxOWJiY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233f51b5&color=%23f6bf26"
				scrolling="no"
			></iframe>
		</section>
	</div>
</main>

<style>
	.calendar {
		width: 80%;
		margin-top: var(--size-10);
		justify-items: center;
		border-width: 1px;
		border-color: rgba(63, 63, 63, 0.3);
	}

	.projects {
		display: flex;
		gap: var(--size-4);
		flex-wrap: wrap;
	}

	iframe {
		width: 100%;
		height: 100%;
		margin: 1px;
		align-items: center;
	}
</style>
