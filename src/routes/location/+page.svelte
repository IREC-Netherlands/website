<script lang="ts">
	import '$lib/styles/pages.css';
	import { TrainFront, TramFront, TrainTrack, Church, Footprints, ArrowRight } from 'lucide-svelte';

	const maps_url =
		'https://www.google.com/maps/embed/v1/search?q=Vierhovenkerk%2C%20Obrechtstraat%2C%20Delft%2C%20Netherlands&key=AIzaSyDL6gW0lwVxvjiV7SZQ3qZ0cGOkiuYZLoU';
</script>

<main>
	<div>
		<h1>Location</h1>
		<hr />
		<div class="locations">
			<div class="contact-info">
				<p class="title">International Reformed Evangelical Church in the Netherlands</p>
				<p>Vierhovenkerk</p>
				<p>Obrechtstraat 50</p>
				<p>2625 XN, Delft</p>
			</div>
			<div class="mb-7">
				<h3>Routes</h3>
				<p>
					<TrainFront class="inline" /> <b>Train</b> to Delft
					<ArrowRight class="inline" />
					<TramFront class="inline" /> Tram Stop <b>Delft Station</b>
				</p>
				<p>
					<TrainTrack class="inline" /> 6 min. <b>HTM Tram 1</b>
					<ArrowRight class="inline" />
					<TramFront class="inline" /> Tram Stop <b>Martinus Nijhofflaan</b>
				</p>
				<p>
					<Footprints class="inline" /> 3 min. <b>walking</b> (226m)
					<ArrowRight class="inline" />
					<Church class="inline" /> <b>Vierhovenkerk</b>
				</p>
			</div>
			<div class="widgets">
				<a
					href="https://9292.nl/en?to=delft/poi/kerk/vierhovenkerk"
					data-9292="widget"
					data-9292-text="Vierhovenkerk%2C%20Delft"
					data-9292-ref="delft/poi/kerk/vierhovenkerk"
					data-9292-width="320"
					data-9292-height="580"
				>
					Plan my journey
				</a>
				<script src="https://9292.nl/static/js/widget.js"></script>
				<div class="maps-iframe">
					<iframe title="location" width="100%" height="100%" loading="lazy" src={maps_url}
					></iframe>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.title {
		font-weight: var(--font-weight-bold);
		margin-block: 0.5rem;
	}
	.locations {
		flex-direction: row;
		margin-block: 1.5rem;
	}
	.contact-info {
		max-width: 20rem;

		p {
			margin-block: 0.25rem;
		}
	}

	.widgets {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.maps-iframe {
		flex-grow: 1;
		aspect-ratio: var(--aspect-video);
		@media (width < 768px) {
			aspect-ratio: var(--ratio-portrait);
		}
	}
</style>
