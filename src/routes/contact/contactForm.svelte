<script lang="ts">
	import '$lib/styles/pages.css';

	import { enhance } from '$app/forms';
	let submitting = $state(false);
	let completed = $state(false);
	let error = $state('');
</script>

<div class="email-box surface-1">
	{#if completed}
		<p>Thank you for your message. I'll get back to you as soon as possible.</p>
	{:else}
		<form
			method="post"
			use:enhance={() => {
				submitting = true;
				error = '';
				return async ({ result }) => {
					submitting = false;
					if (result.type === 'failure' && result.data) {
						error = result.data.text as string;
					} else if (result.type === 'success') {
						completed = true;
					}
				};
			}}
		>
			{#if error !== ''}
				<p class="error">{error}</p>
			{/if}
			<label for="name">Name</label>
			<input type="text" id="name" name="name" required />

			<label for="email">Email</label>
			<input type="email" id="email" name="email" required />

			<label for="subject">Subject</label>
			<input type="text" id="subject" name="subject" required />

			<label for="message">Message</label>
			<textarea id="message" name="message" rows="5" minlength="10" maxlength="750" required
			></textarea>

			<button type="submit" class="submit-button">
				{#if submitting}Submitting...{:else}Submit{/if}
			</button>
		</form>
	{/if}
</div>

<style>
	.email-box {
		flex-grow: 2;
		border-radius: var(--radius-xl);
	}

	form {
		display: grid;
		padding: var(--size-3);
		gap: var(--size-1);
	}

	input,
	textarea {
		background-color: white;
		padding: var(--size-2);
	}

	.submit-button {
		width: var(--size-12);
		margin-block: var(--size-3);

		align-items: center;
		appearance: none;
		background-color: #fff;
		border-radius: 24px;
		border-style: none;
		box-shadow:
			rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
			rgba(0, 0, 0, 0.14) 0 6px 10px 0,
			rgba(0, 0, 0, 0.12) 0 1px 18px 0;
		box-sizing: border-box;
		color: #3c4043;
		cursor: pointer;
		display: inline-flex;
		fill: currentcolor;
		font-family: 'Google Sans', Roboto, Arial, sans-serif;
		font-size: 14px;
		font-weight: 500;
		height: var(--size-7);
		justify-content: center;
		letter-spacing: 0.25px;
		line-height: normal;
		max-width: 100%;
		overflow: visible;
		padding: 2px 24px;
		position: relative;
		text-align: center;
		text-transform: none;
		transition:
			box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
			opacity 15ms linear 30ms,
			transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		will-change: transform, opacity;
		z-index: 0;
	}

	.submit-button:hover {
		background: #f6f9fe;
		color: #174ea6;
	}

	.submit-button:active {
		box-shadow:
			0 4px 4px 0 rgb(60 64 67 / 30%),
			0 8px 12px 6px rgb(60 64 67 / 15%);
		outline: none;
	}

	.submit-button:focus {
		outline: none;
		border: 2px solid #4285f4;
	}

	.submit-button:not(:disabled) {
		box-shadow:
			rgba(60, 64, 67, 0.3) 0 1px 3px 0,
			rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
	}

	.submit-button:not(:disabled):hover {
		box-shadow:
			rgba(60, 64, 67, 0.3) 0 2px 3px 0,
			rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
	}

	.submit-button:not(:disabled):focus {
		box-shadow:
			rgba(60, 64, 67, 0.3) 0 1px 3px 0,
			rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
	}

	.submit-button:not(:disabled):active {
		box-shadow:
			rgba(60, 64, 67, 0.3) 0 4px 4px 0,
			rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
	}

	.submit-button:disabled {
		box-shadow:
			rgba(60, 64, 67, 0.3) 0 1px 3px 0,
			rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
	}
</style>
