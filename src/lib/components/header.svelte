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
	<a
		href="/"
		class="logo"
		onclick={() => {
			isOpen = false;
		}}
	>
		<img src="/assets/logo/grii-logo.png" alt="GRII Belanda" />
	</a>

	<button
		class={isOpen ? 'open' : ''}
		onclick={() => {
			isOpen = !isOpen;
		}}
		>{#if isOpen}
			<X />
		{:else}
			<Menu />
		{/if}
	</button>

	<div class="link-section">
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
		display: flex;
		position: relative;
		padding-inline: var(--size-12);
		padding-block: var(--size-3);

		@media (width < 1280px) {
			display: grid;
			justify-items: center;
			padding-inline: var(--size-0);
		}

		@media (width < 768px) {
			padding-block: var(--size-0);
			padding-top: var(--size-3);
		}

		.logo {
			margin-block: var(--size-3);

			img {
				width: var(--size-13);
			}
		}

		button {
			display: flex;
			position: relative;
			padding-block: var(--size-2);
			justify-content: center;
			width: 100%;

			@media (width > 768px) {
				display: none;
			}
		}

		button.open {
			background-color: rgba(0, 0, 0, 0.8);
			transition: ease-in 0.25s ;
		}

		.link-section {
			display: flex;
			position: relative;
			width: 100%;
			margin: 0;
			align-self: center;
			justify-content: right;

			@media (width < 1280px) {
				justify-content: center;
			}

			ul {
				display: flex;
				list-style-type: none;
				justify-content: right;
				padding-inline: var(--size-3);
				gap: var(--size-7);

				@media (width < 1280px) {
					justify-content: center;
				}

				@media (width < 768px) {
					display: none;
					background-color: rgba(0, 0, 0, 0.8);
					gap: var(--size-2);
					width: 100%;
					z-index: 1;
				}

				a {
					display: flex;
					justify-content: center;
				}

				li {
					border-bottom-width: 2.5px;
					border-bottom-color: transparent;
					border-bottom-style: inset;
					font-weight: var(--font-weight-medium);
					margin: var(--size-2);
				}

				li.active {
					font-weight: var(--font-weight-bold);
					border-bottom-color: rgb(255, 255, 255);
				}

				li:hover:not(.active) {
					border-bottom-color: rgb(192, 192, 192);
					transition: ease-in .05s;
				}
			}

			ul.open {
				@media (width < 768px) {
					display: block;
					position: absolute;
				}
			}
		}
	}
</style>
