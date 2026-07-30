<script lang="ts">
	import '$lib/styles/pages.css';
</script>

<main>
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
		<iframe
			title="location"
			width="800"
			height="650"
			style="border:0"
			loading="lazy"
			allowfullscreen
			src="https://www.google.com/maps/embed/v1/search?q=Vierhovenkerk%2C%20Obrechtstraat%2C%20Delft%2C%20Netherlands&key=AIzaSyDL6gW0lwVxvjiV7SZQ3qZ0cGOkiuYZLoU"
		></iframe>
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
</style>
