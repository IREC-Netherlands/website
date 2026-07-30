<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1>Error {$page.status}:</h1>
	<h2>{$page.error?.message}</h2>
</div>

<style>
	.error {
		height: 50vh;
		justify-self: center;
		align-content: center;
	}
</style>
