<script lang="ts">
	import '$lib/styles/pages.css';
	import Member from '$lib/components/member.svelte';

	let { data } = $props();
</script>

<main>
	<h1>Members</h1>
	<section class="members">
		{#each data.members as member}
			<Member
				name={member.name}
				job={member.job}
				research={member.research}
				contact={member.email}
			/>
		{/each}
	</section>
</main>

<style>
	.members {
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
	}
</style>
