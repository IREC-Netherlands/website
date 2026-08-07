<script lang="ts">
	import * as config from '$lib/config';
	import grii_logo from '$lib/assets/logo/grii/logo-nl-flag.png';
	import instagram from '$lib/assets/logo/social_media/instagram.svg';
	import youtube from '$lib/assets/logo/social_media/youtube.svg';
	import gmail from '$lib/assets/logo/social_media/gmail.svg';
</script>

<footer class="surface-3">
	<div class="footer-main">
		<div class="footer-logo">
			<div class="flex">
				<a title="Home" href="/">
					<img class="img-logo" src={grii_logo} alt="GRII Belanda" />
				</a>
			</div>
		</div>
		<div class="footer-content">
			<div class="credits">
				<p class="mb-2 font-bold">International Reformed Evangelical Church Netherlands</p>
				<p class="font-semibold">Vierhovenkerk</p>
				<p>Obrechtstraat 50</p>
				<p>2625 XN, Delft</p>
				<br />
				<div class="social-media">
					<a href="https://instagram.com/irs.netherlands">
						<img alt="instagram" src={instagram} class="icons" />
					</a>
					<a href="https://www.youtube.com/channel/UCJGpw2y2fAQ97CMXRpdPGMw">
						<img alt="youtube" src={youtube} class="icons" />
					</a>
					<a href="mailto:contact@irec-netherlands.org">
						<img alt="email" src={gmail} class="icons" />
					</a>
				</div>
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
		padding-top: 7.5rem;
		padding-bottom: 7.5rem;
		padding-inline: 15rem;

		@media (width < 768px) {
			padding-inline: 3rem;
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
					width: 15rem;
					margin-bottom: 3rem;
				}
			}
		}
	}

	.social-media {
		display: flex;
		gap: 1.5rem;
	}

	.icons {
		height: 2rem;
		aspect-ratio: 1;
		filter: invert();
	}

	.icons:hover {
		filter: invert(70%);
	}

	.img-logo {
		max-width: 15rem;
		margin-block: 1rem;
	}

	:is(ol) {
		padding-inline: 1.75rem;
		list-style-type: circle;
	}

	:is(li) {
		padding: 0;
		margin: 0;
	}
</style>
