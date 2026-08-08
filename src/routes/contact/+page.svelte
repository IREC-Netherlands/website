<script lang="ts">
	import '$lib/styles/pages.css';
	import ContactForm from './contactForm.svelte';
</script>

<main>
	<h1 class="text-2xl">Contact</h1>
	<hr />
	<div class="contact">
		<div class="pe-5">
			<div class="descriptions">
				<div class="contact-info">
					<p>
						If you have any questions, please contact us through the phone numbers and email below
						or fill-in the contact form on this page
					</p>
					<br />
					<p class="title">International Reformed Evangelical Church in the Netherlands</p>
					<p class="italic">
						<a href="mailto:contact@irec-netherlands.org">contact@irec-netherlands.org</a>
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
		margin-block: 1.5rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		max-width: 1080px;
	}

	.title {
		font-weight: var(--font-weight-bold);
	}

	.contact-info {
		max-width: 20rem;
	}

	a:hover {
		font-weight: var(--font-weight-medium);
	}

	p {
		margin-block: 0.5rem;
	}
</style>
