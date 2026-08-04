<script lang="ts">
	import { activePage } from '$lib/state/activePage.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	let isOpen = $state(false);

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
			title: 'Location',
			anchor: '/location'
		},
		{
			title: 'Contact Us',
			anchor: '/contact'
		}
	];
</script>

<nav class="surface-4">
	<a href="/" class="logo">
		<img class="img-logo" src="/assets/logo/grii-logo.png" alt="GRII Belanda" />
	</a>
	<div class="link-section">
		<button
			transition:fly
			onclick={() => {
				isOpen = !isOpen;
			}}
			>{#if isOpen}
				<X />
			{:else}
				<Menu />
			{/if}
		</button>
		{#key isOpen}
			<ul transition:fly={{ y: -100 }} class="links {isOpen ? 'open' : ''}">
				{#each navigator as nav}
					<a
						href={nav.anchor}
						onclick={() => {
							isOpen = false;
						}}
					>
						<li class={nav.title === activePage.page ? 'active' : ''}>
							{nav.title}
						</li>
					</a>
				{/each}
			</ul>
		{/key}
	</div>
</nav>

<style>
	nav {
		padding-top: var(--size-1);
		position: relative;

		.link-section {
			display: block;
			width: 100%;
			align-self: center;
			justify-items: center;
			padding: 0;
			margin: 0;
			@media (width > 1280px) {
				justify-items: right;
			}
		}

		ul {
			list-style-type: none;
		}

		@media (width > 1280px) {
			display: flex;
			justify-content: space-between;
			padding-inline: var(--size-12);

			ul {
				align-items: center;
				justify-items: center;
			}
		}

		@media (width < 1280px) {
			display: grid;
			grid-template-rows: auto auto auto;
			justify-items: center;
			row-gap: var(--size-7);
		}

		@media (width < 768px) {
			row-gap: var(--size-0);
		}

		button {
			display: none;
			background-color: transparent;
			margin-block: var(--size-1);
			padding-bottom: var(--size-1);

			@media (width < 768px) {
				display: block;
				justify-self: center;
			}
		}

		.links {
			display: flex;
			gap: var(--size-7);
			align-items: center;

			a {
				color: inherit;
				text-decoration: none;
				white-space: nowrap;
				font-size: var(--font-size-1);
				font-weight: var(--font-weight-5);
				width: fit-content;
			}

			li {
				border-bottom-width: 2.5px;
				border-bottom-color: transparent;
				border-bottom-style: inset;
			}

			li:hover:not(.active) {
				border-bottom-color: rgb(192, 192, 192);
				transition: ease-in 0.2s;
			}

			/* Mobile view */
			@media (width < 768px) {
				display: none; /* become flex when toggled */
				flex-direction: column;
				justify-self: center;
				text-align: center;
				margin-bottom: var(--size-3);
				background-color: rgba(0, 0, 0, 0.8);
				gap: var(--size-2);
				width: 100%;
				z-index: 1;
			}
		}

		.links.open {
			display: flex;
			position: absolute;
		}

		li.active {
			font-weight: var(--font-weight-6);
			border-bottom-color: rgb(255, 255, 255);
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
