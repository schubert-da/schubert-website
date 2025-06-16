<script>
	import InstagramIcon from '$lib/assets/images/icons/instagram.svg?raw';
	import TwitterIcon from '$lib/assets/images/icons/twitter.svg?raw';
	import LinkedInIcon from '$lib/assets/images/icons/linkedin.svg?raw';
	import EmailIcon from '$lib/assets/images/icons/email.svg?raw';
	import BlueskyIcon from '$lib/assets/images/icons/bluesky.svg?raw';
	import WaveCityGrid from './WaveCityGrid/WaveCityGrid.svelte';
	import { onMount } from 'svelte';
	import { navSectionsConfig } from '$lib/utils/stores';

	let screenWidth = $state(1000);
	let numTilesPlaced = $state(0);
	const TIME_SCALE = 1;
	let DELAY = 2.5 / TIME_SCALE;
	let timeSpent = $derived(Math.floor((numTilesPlaced * DELAY) / (30 / TIME_SCALE)) * 0.5);

	let footerHeight = $state(0);

	onMount(() => {
		let timeout = setTimeout(() => {
			let currentNavSections = $navSectionsConfig.slice();
			let worksSection = currentNavSections.find((section) => section.name === 'Contact');
			worksSection.sections = [
				{
					name: 'footer',
					href: '#footer',
					width: footerHeight,
					color: 'var(--color-background)'
				}
			];

			navSectionsConfig.set(currentNavSections);
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />

<footer bind:clientHeight={footerHeight}>
	<div class="card">
		<div class="text-content">
			<div class="footer-section">
				<h2 class="card-title">Contact</h2>
				<div class="footer-description">
					While I have a pretty great gig creating dataviz at <a href="https://www.revisual.co"
						>Revisual Labs</a
					>, I am always open to freelance opportunities, creating interactives and visuals on the
					web. Feel free to reach out on any of my socials below.
				</div>

				<div class="share-button-row">
					<div class="icon-container">
						<a href="https://www.instagram.com/schu.draws.stuff/">{@html InstagramIcon}</a>
					</div>
					<div class="icon-container">
						<a href="https://bsky.app/profile/schubert-da.bsky.social">{@html BlueskyIcon}</a>
					</div>
					<div class="icon-container">
						<a href="https://www.linkedin.com/in/schubert-de-abreu-47a56037/"
							>{@html LinkedInIcon}</a
						>
					</div>
					<div class="icon-container">
						<a href="mailto:schubertdeabreu2@gmail.com">{@html EmailIcon}</a>
					</div>
					<div class="icon-container">
						<a href="https://x.com/schubertda1">{@html TwitterIcon}</a>
					</div>
				</div>
			</div>

			<div class="footer-section game-section">
				<div class="footer-description game-desc">
					Thanks for sticking around for so long. While you have been browsing my site, this little
					algorithm has been slowly working away at creating this small village.
				</div>

				<div class="ban-list">
					<div class="ban">
						<span class="label">You've been here for</span>
						<div class="value-content">
							<span class="value">{timeSpent}</span>
							<span class="unit">minutes</span>
						</div>
					</div>

					<div class="ban">
						<span class="label">In that time, Bob has placed</span>
						<div class="value-content">
							<span class="value">{numTilesPlaced}</span>
							<span class="unit">tiles</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="game-grid-container">
			<WaveCityGrid {DELAY} bind:numTilesPlaced></WaveCityGrid>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		padding-top: 4rem;

		background-color: var(--palette-yellow-muted);

		.card {
			width: 100%;
			max-width: unset;
			padding: 4rem var(--card-padding);
			border-radius: 24px;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			box-shadow: -4px -3px 4px rgba(0, 0, 0, 0.25);

			.footer-section {
				margin-bottom: 1.75rem;

				&:not(:last-of-type) {
					padding-bottom: 1.75rem;
					border-bottom: 4px solid #333333;
				}

				h2 {
					margin-bottom: 0.5rem;
					font-size: var(--font-size-3);
				}

				.footer-description {
					margin-bottom: 2rem;
					max-width: 60ch;
					font-size: var(--font-size-0);

					a {
						color: var(--text-grey);
						font-weight: 500;
					}
				}

				.share-button-row {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					gap: 1rem;

					.icon-container {
						display: flex;
						align-items: center;
						justify-content: center;

						width: 2rem;
						height: 2rem;
						// background-color: #999;
					}
				}
			}

			.footer-section.game-section {
				display: flex;
				gap: 2rem;

				@media (max-width: 600px) {
					flex-direction: column;
					gap: 0.5rem;

					div.footer-description {
						max-width: 60ch;
					}

					.ban-list {
						.ban:first-of-type {
							padding-left: 1rem;
							border-left: none;
						}

						.ban:last-of-type {
							padding-right: 1rem;
						}
					}
				}

				.footer-description {
					margin-bottom: 1.5rem;
					max-width: 50%;
					font-size: var(--font-size-0);
				}

				.ban-list {
					display: flex;
				}

				.ban {
					font-size: var(--font-size-0);
					padding: 0 1.25rem;
					border-left: 1px solid #333333;

					.label {
						font-size: var(--font-size--1);
						line-height: 1.2;
					}

					.value {
						font-family: var(--font-display);
						font-size: 4rem;
						line-height: 1;
					}

					.unit {
						font-size: var(--font-size--1);
						line-height: 1.2;
					}
				}
			}
		}
	}
</style>
