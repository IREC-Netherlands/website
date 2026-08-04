<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<a href="/" class="logo">
		<img class="img-logo" src="/assets/logo/grii-logo.png" alt="GRII Belanda" />
	</a>
	<div class="footer-content">
		<div class="credits">
			<p class="mb-2 font-bold">International Reformed Evangelical Church Netherlands</p>
			<p class="font-semibold">Vierhovenkerk</p>
			<p>Obrechtstraat 50</p>
			<p>2625 XN, Delft</p>
		</div>
		<div class="schedules">
			<p class="mb-2 font-bold">Weekly Schedules</p>
			<p class="font-medium">Sunday Service</p>
			<p class="mb-2">🕤 13:00 AMS Time (Sunday)</p>
			<p class="font-medium">Bible Study</p>
			<p class="mb-2">🕤 11:00 AMS Time (Saturday)</p>
			<p class="font-medium">Prayer Meeting</p>
			<p class="mb-2">🕤 19:00 AMS Time (Wednesday)</p>
		</div>
		<div class="quicklinks">
			<p class="font-bold">Partners Quicklinks</p>
			<ol>
				<li>
					<a href="https://grii.org/" target="_blank" rel="noopener noreferrer">IREC Global</a>
				</li>
				<li>
					<a href="https://pusat.grii.org/" target="_blank" rel="noopener noreferrer">GRII Pusat</a>
				</li>
				<li>
					<a href="https://stemi.org/" target="_blank" rel="noopener noreferrer">STEMI</a>
				</li>
				<li>
					<a href="https://www.recjakarta.com/" target="_blank" rel="noopener noreferrer"
						>REC Jakarta</a
					>
				</li>
				<li>
					<a href="https://www.reformed21.tv/" target="_blank" rel="noopener noreferrer"
						>Reformed 21</a
					>
				</li>
				<li>
					<a href="https://plkmomentum.com/" target="_blank" rel="noopener noreferrer"
						>Momentum Christian Literature</a
					>
				</li>
				<li>
					<a href="https://front.aulasimfoniajakarta.com/" target="_blank" rel="noopener noreferrer"
						>Aula Simfonia Jakarta</a
					>
				</li>
			</ol>
		</div>
	</div>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		bottom: 0%;
		width: 100%;
		color: var(--color-1);
		background-color: var(--surface-3);
		border-top: 1px solid var(--border);

		margin-top: var(--size-12);
		padding-top: var(--size-11);
		padding-bottom: var(--size-11);
		padding-inline: var(--size-14);

		vertical-align: bottom;
		@media (width < 768px) {
			padding-inline: var(--size-5);
		}

		.footer-content {
			@media (width > 1280px) {
				align-items: flex-start;
				justify-content: space-between;
				display: flex;
				gap: var(--size-11);
			}

			div {
				max-width: var(--size-14);
				margin-bottom: var(--size-8);
			}
		}
	}

	.img-logo {
		max-width: var(--size-13);
		margin-block: var(--size-5);
	}

	:is(ol) {
		padding: 0;
	}
	
	:is(li) {
		list-style-type: circle;
		list-style-position: inside;
		padding: 0;
	}
</style>
