<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer class="surface-3">
	<div class="footer-main">
		<div class="footer-logo">
			<a href="/" class="logo">
				<img class="img-logo" src="/assets/logo/grii-logo.png" alt="GRII Belanda" />
			</a>
		</div>
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
						<a href="https://irec-europe.org/" target="_blank" rel="noopener noreferrer"
							>IREC Europe</a
						>
					</li>
					<li>
						<a href="https://www.recjakarta.com/" target="_blank" rel="noopener noreferrer"
							>REC Jakarta</a
						>
					</li>
					<li>
						<a href="https://pusat.grii.org/" target="_blank" rel="noopener noreferrer"
							>REC Indonesia HQ</a
						>
					</li>
					<li>
						<a href="https://stemi.org/" target="_blank" rel="noopener noreferrer"
							>Stephen Tong Evangelistic Ministry International (STEMI)</a
						>
					</li>
					<li>
						<a href="https://plkmomentum.com/" target="_blank" rel="noopener noreferrer"
							>Momentum Christian Literature</a
						>
					</li>
					<li>
						<a
							href="https://front.aulasimfoniajakarta.com/"
							target="_blank"
							rel="noopener noreferrer">Aula Simfonia Jakarta</a
						>
					</li>
					<li>
						<a href="https://www.reformed21.tv/" target="_blank" rel="noopener noreferrer"
							>Reformed 21</a
						>
					</li>
				</ol>
			</div>
		</div>
		<p>{config.title} &copy {new Date().getFullYear()}</p>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		margin-top: var(--size-12);
		padding-top: var(--size-11);
		padding-bottom: var(--size-11);
		padding-inline: var(--size-13);

		@media (width < 768px) {
			padding-inline: var(--size-8);
		}

		.footer-main {
			width: 100%;
			max-inline-size: 1440px;

			.footer-content {
				display: flex;
				flex-wrap: wrap;
				align-items: stretch;
				justify-content: space-between;

				@media (width < 768px) {
					display: grid;
				}

				div {
					width: var(--size-14);
					margin-bottom: var(--size-8);
				}
			}
		}
	}

	.img-logo {
		max-width: var(--size-13);
		margin-block: var(--size-3);
	}

	:is(ol) {
		padding-inline: var(--size-6);
		list-style-type: circle;
	}

	:is(li) {
		padding: 0;
		margin: 0;
	}
</style>
