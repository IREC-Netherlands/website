<script>
	import '$lib/styles/pages.css';
	import ProjectHighlight from '$lib/components/projectHighlight.svelte';
	import { PUBLIC_GOOGLE_CALENDAR_URL, PUBLIC_GOOGLE_SPREADSHEET_URL } from '$env/static/public';
</script>

<main>
	<div>
		<h1>Newsletter</h1>
		<section class="projects">
			<!-- <ProjectHighlight /> -->
			<!-- <ProjectHighlight /> -->
		</section>
		<section class="spreadsheet">
			<iframe title="bulletin" class="bulletin" src={PUBLIC_GOOGLE_SPREADSHEET_URL}></iframe>
		</section>
		<section class="aspect-4/5 md:aspect-video calendar">
			<iframe title="calendar" src={PUBLIC_GOOGLE_CALENDAR_URL} scrolling="no"></iframe>
		</section>
	</div>
</main>

<style>
	iframe.bulletin {
		max-width: 1180px;
		aspect-ratio: 8/7;
		overflow: hidden;
		border: none;
	}

	.calendar {
		width: 100%;
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
