<script>
	import '$lib/styles/pages.css';
	import ProjectHighlight from '$lib/components/projectHighlight.svelte';
	import { PUBLIC_GOOGLE_CALENDAR_URL, PUBLIC_GOOGLE_SPREADSHEET_URL } from '$env/static/public';
</script>

<main>
	<div>
		<h1>Newsletter</h1>
		<hr />
		<section class="projects">
			<!-- <ProjectHighlight /> -->
			<!-- <ProjectHighlight /> -->
		</section>
		<section class="spreadsheet bulletin">
			<iframe title="bulletin" class="bulletin" src={PUBLIC_GOOGLE_SPREADSHEET_URL}></iframe>
			<iframe
				title="calendar"
				class="aspect-4/5 md:aspect-video calendar"
				src={PUBLIC_GOOGLE_CALENDAR_URL}
			></iframe>
		</section>
	</div>
</main>

<style>
	.bulletin {
		max-width: 1070px;
	}

	.calendar {
		width: 100%;
		margin-top: 1rem;
		justify-items: center;
		border-width: 1px;
		border-color: rgba(63, 63, 63, 0.3);
	}

	.projects {
		display: flex;
		margin-block: 1.25rem;
		flex-wrap: wrap;
	}

	iframe {
		width: 100%;
		margin: 1px;
		align-items: center;
	}

	iframe.bulletin {
		min-height: 860px;
	}
</style>
