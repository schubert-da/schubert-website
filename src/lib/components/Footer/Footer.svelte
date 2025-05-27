<script>
	import InstagramIcon from '$lib/assets/images/icons/instagram.svg?raw';
	import TwitterIcon from '$lib/assets/images/icons/twitter.svg?raw';
	import LinkedInIcon from '$lib/assets/images/icons/linkedin.svg?raw';
	import EmailIcon from '$lib/assets/images/icons/email.svg?raw';
	import BlueskyIcon from '$lib/assets/images/icons/bluesky.svg?raw';

	import TileBlank from '$lib/assets/images/wave-playground/tile-blank.jpg';
	import TileDeadend from '$lib/assets/images/wave-playground/tile-deadend.jpg';
	import TileTJunction from '$lib/assets/images/wave-playground/tile-tjunction.jpg';
	import TileCurve from '$lib/assets/images/wave-playground/tile-curve.jpg';

	const tiles = [TileBlank, TileDeadend, TileTJunction, TileCurve];

	let screenWidth = $state(1000);
	let gridWidth = $state(500);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<footer>
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
					<div class="icon-container"><a href="www.google.com">{@html InstagramIcon}</a></div>
					<div class="icon-container"><a href="www.google.com">{@html BlueskyIcon}</a></div>
					<div class="icon-container"><a href="www.google.com">{@html LinkedInIcon}</a></div>
					<div class="icon-container"><a href="www.google.com">{@html EmailIcon}</a></div>
					<div class="icon-container"><a href="www.google.com">{@html TwitterIcon}</a></div>
				</div>
			</div>

			<div class="footer-section game-section">
				<div class="footer-description game-desc">
					Thanks for sticking around for so long. While you have been browsing my site, this little
					algorithm has been slowly working away at creating this small village.
				</div>

				<div class="ban">
					<span class="label">You've been here for</span>
					<div class="value-content">
						<span class="value">20</span>
						<span class="unit">seconds</span>
					</div>
				</div>

				<div class="ban">
					<span class="label">In that time, Bob has placed</span>
					<div class="value-content">
						<span class="value">105</span>
						<span class="unit">tiles</span>
					</div>
				</div>
			</div>
		</div>

		<div class="game-grid" bind:clientWidth={gridWidth}>
			{#each Array(15).fill() as _, i}
				{@const tile = tiles[Math.floor(Math.random() * tiles.length)]}
				{@const tileRotation = Math.floor(Math.random() * 4) * 90}
				<div class="tile" style:--tile-width="{gridWidth / 5 - 0.05}px">
					<img
						src={tile}
						alt="tile"
						style:width="{gridWidth / 5 - 0.05}px"
						style="transform: rotate({tileRotation}deg);"
					/>
				</div>
			{/each}
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

				.footer-description {
					margin-bottom: 1.5rem;
					max-width: 50%;
					font-size: var(--font-size-0);
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

			.game-grid {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				max-width: 1100px;
				margin: 4rem auto 0 auto;
				border: 4px solid #666;
				border-radius: 6px;

				.tile {
					width: var(--tile-width);
					height: var(--tile-width);
					border: 1px solid #666;
				}
			}
		}
	}
</style>
