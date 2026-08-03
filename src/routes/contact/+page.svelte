<script lang="ts">
	import '$lib/styles/pages.css';
	import ContactForm from './contactForm.svelte';

</script>

<main>
	<h1>Contact</h1>
	<div class="contact">
		<div>
			<div class="descriptions">
				<div class="contact-info">
					<p>
						If you have any questions, please contact us through the phone numbers and email below
						or fill-in the contact form on this page
					</p>
					<br />
					<p class="title">International Reformed Evangelical Church in the Netherlands</p>
					<p>
						<b> Vierhovenkerk </b>
						<br />Obrechtstraat 50
						<br />2625 XN, Delft
					</p>
					<br />
				</div>
			</div>
		</div>
		<ContactForm />
	</div>
</main>

<style>

	.contact {
		display: flex;
		gap: var(--size-3);
		flex-wrap: wrap;
		max-width: 1080px;
	}

	.title {
		font-weight: var(--font-weight-7);
	}

	.contact-info {
		max-width: var(--size-14);
	}

	p {
		margin-block: var(--size-2);
	}
</style>
