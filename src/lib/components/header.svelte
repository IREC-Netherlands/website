<script lang="ts">
	import { activePage } from '$lib/state/activePage.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import logo from '$lib/assets/logo/grii/logo.png';
	let isOpen = $state(false);

	const navigator = [
		{
			title: 'About Us',
			anchor: '/about'
		},
		{
			title: 'Newsletter',
			anchor: '/newsletter'
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
		title="home"
		href="/"
		class="logo"
		onclick={() => {
			isOpen = false;
		}}
	>
		<img src={logo} alt="GRII Belanda" class="logo-img" />
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
		padding-inline: 10rem;
		padding-block: 1rem;
		z-index: 40;

		@media (width < 1280px) {
			display: grid;
			justify-items: center;
			padding-inline: 0rem;
		}

		@media (width < 768px) {
			padding-block: 0rem;
			padding-top: 1rem;
		}

		.logo {
			margin-block: 1rem;

			.logo-img {
				width: 15rem;
			}
		}

		button {
			display: flex;
			position: relative;
			padding-block: 0.5rem;
			justify-content: center;
			width: 100%;

			@media (width > 768px) {
				display: none;
			}
		}

		button.open {
			background-color: rgba(0, 0, 0, 0.8);
			transition: ease-in 0.25s;
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
				padding-inline: 1rem;
				gap: 2rem;

				@media (width < 1280px) {
					justify-content: center;
				}

				@media (width < 768px) {
					display: none;
					background-color: rgba(0, 0, 0, 0.8);
					gap: 0.5rem;
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
					font-size: var(--text-lg);
					line-height: var(--text-lg--line-height);
					margin: 0.5rem;
				}

				li.active {
					font-weight: var(--font-weight-bold);
					border-bottom-color: rgb(255, 255, 255);
				}

				li:hover:not(.active) {
					border-bottom-color: rgb(192, 192, 192);
					transition: ease-in 0.05s;
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
