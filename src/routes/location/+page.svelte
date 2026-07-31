<script lang="ts">
	import '$lib/styles/pages.css';

	const maps_url =
		'https://www.google.com/maps/embed/v1/search?q=Vierhovenkerk%2C%20Obrechtstraat%2C%20Delft%2C%20Netherlands&key=AIzaSyDL6gW0lwVxvjiV7SZQ3qZ0cGOkiuYZLoU';
</script>

<main>
	<div class="prose">
		<h1>Location</h1>
		<div class="locations">
			<div class="contact-info">
				<p class="title">International Reformed Evangelical Church in the Netherlands</p>
				<p>
					<b> Vierhovenkerk </b>
					<br />Obrechtstraat 50
					<br />2625 XN, Delft
				</p>
				<br />
			</div>
			<div class="maps-frame">
				<iframe
					title="location"
					width="99.9%"
					height="99.9%"
					loading="lazy"
					allowfullscreen
					src={maps_url}
				></iframe>
			</div>
		</div>
	</div>
</main>

<style>
	.title {
		font-weight: var(--font-weight-7);
	}
	.locations {
		flex-direction: row;
	}
	.contact-info {
		max-width: var(--size-15);
	}
	p {
		margin-block: var(--size-2);
	}

	.maps-frame {
		border-width: 1px;
		border-color: rgba(63, 63, 63, 0.3);
		aspect-ratio: var(--ratio-portrait);
		@media (width >= 48rem) {
			aspect-ratio: var(--ratio-landscape);
		}
	}
</style>
