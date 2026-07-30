<script lang="ts">
	import { activePage } from '$lib/state/activePage.svelte';
	import * as config from '$lib/config';
	import { Menu } from 'lucide-svelte';

	let isOpen = $state(false);
	function toggleMenu() {
		isOpen = !isOpen;
	}

	const navigator = [
		{
			title: 'About Us',
			anchor: '/about'
		},
		{
			title: 'Activities',
			anchor: '/activities'
		},
		{
			title: 'Locations',
			anchor: '/location'
		},
		{
			title: 'Contact Us',
			anchor: '/contact'
		}
	];
</script>

<nav>
	<a href="/" class="logo">
		<img class="img-logo" src="/assets/logo/grii-logo-black.png" alt="GRII Belanda" />
	</a>

	<button class="hamburger" onclick={toggleMenu}><Menu /></button>

	<ul class="links {isOpen ? 'open' : ''}">
		{#each navigator as nav}
			<a href={nav.anchor} onclick={toggleMenu}>
				<li class={nav.title === activePage.page ? 'active' : ''}>
					{nav.title}
				</li>
			</a>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-top: var(--size-1);
		padding-bottom: var(--size-1);
		padding-inline: var(--size-12);
		background-color: var(--surface-1);

		@media (min-width: 1440px) {
			display: flex;
			justify-content: space-between;

			ul {
				align-items: center;
				justify-items: center;
			}
		}

		@media (max-width: 1440px) {
			display: grid;
			grid-template-rows: auto auto auto;
			justify-items: center;
			row-gap: var(--size-7);
			padding-inline: var(--size-9);
		}

		@media (max-width: 768px) {
			row-gap: var(--size-0);
		}

		.hamburger {
			display: none;
			background-color: var(--surface-3);
			margin-top: var(--size-1);
			margin-bottom: var(--size-3);
			@media (max-width: 768px) {
				display: block;
				justify-self: center;
			}
		}

		.links {
			margin-block: var(--size-7);
			display: flex;
			gap: var(--size-7);
			margin-block: 0;

			a {
				color: inherit;
				text-decoration: none;
				white-space: nowrap;
				font-size: var(--font-size-1);
				font-weight: var(--font-weight-5);
			}

			li {
				border-bottom-width: 2.5px;
				border-bottom-color: transparent;
				border-bottom-style: inset;
			}

			li:hover:not(.active) {
				border-bottom-color: rgb(128, 128, 128);
				transition: ease-in 0.2s;
			}

			/* Mobile view */
			@media (max-width: 768px) {
				display: none; /* become flex when toggled */
				flex-direction: column;
				gap: var(--size-2);
				justify-self: center;
				align-self: center;
				text-align: center;
			}
		}

		.links.open {
			display: flex;
		}

		li.active {
			font-weight: var(--font-weight-6);
			border-bottom-color: black;
		}

		.logo {
			align-items: center;
			margin-block: var(--size-3);
			.img-logo {
				width: var(--size-13);
				border-radius: 0;
			}
		}
	}
</style>
