<script>
	import CareerImage from '$lib/assets/images/schubert-career-viz.png';
	import { navbarHeight } from '$lib/utils/stores';

	let captionHeight = 0;
</script>

<section style="--navbar-height: {$navbarHeight}px">
	<div class="card">
		<div class="text-content">
			<h2>Hi there, I&#x2019m <span class="highlight">Schubert!</span></h2>
			<div class="description">
				<p>
					I build charts and weird interactives on the web while I struggle to fill out a sketchbook
					on the side.
				</p>
				<p>
					If it's creative and I've worked on it, you will likely find it in realms of this site
				</p>
			</div>
		</div>

		<div class="image-content">
			<div class="image-container">
				<div class="image-wrapper" style="--caption-height: {captionHeight}px">
					<img src={CareerImage} alt="graph showing Schubert's career" />
				</div>

				<div class="caption" bind:clientHeight={captionHeight}>
					<p>
						<span class="header">Urban sketching</span>
						<span>USK Goa sessison near the Old Patto Bridge, Goa</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;

		height: calc(100vh - var(--navbar-height) - 0.5rem);
		background-color: var(--palette-yellow-muted);
	}

	.card {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		max-width: max(75vw, 1200px);
		height: 100%;
		padding: 0 3rem;
		background-color: var(--color-background);

		background: #f5f5f5;
		border: 1px solid #929292;
		box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;

		.text-content {
			h2 {
				font-size: 3rem;
				margin-bottom: 2rem;

				span.highlight {
					padding: 0rem 0.65rem;
					color: white;
					background-color: var(--palette-yellow-muted);
					font-size: 2.75rem;
					border-radius: 7px;
				}
			}

			.description {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				gap: 1rem;
			}

			p {
				max-width: 30ch;
				font-size: 1.6rem;
			}
		}

		.image-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			overflow: hidden;

			width: 50%;
			max-width: 700px;
			height: 100%;
			padding: 1.5rem 0;

			.image-container {
				width: 100%;
				max-height: 100%;

				.image-wrapper {
					--bottom-margin: 0.6rem;

					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					overflow: hidden;

					margin-bottom: var(--bottom-margin);
					max-height: calc(100% - var(--caption-height) - var(--bottom-margin));
					border: 2px solid #666;
					border-radius: 10px;

					&::after {
						position: absolute;
						left: 0;
						top: 0;
						content: '';
						display: block;
						z-index: 1;

						width: 100%;
						height: 100%;
						box-shadow: inset -3px 4px 4px rgba(0, 0, 0, 0.4);
					}
				}

				img {
					width: 100%;
					height: auto;
					overflow: hidden;

					background-color: #aaa;
				}

				.caption {
					display: flex;
					flex-direction: row;
					align-items: baseline;
					justify-content: flex-end;
					gap: 0.25rem;

					p {
						font-size: 1.125rem;
						text-align: right;
					}

					span.header {
						font-size: 1.25rem;
						font-weight: 700;
					}
				}
			}
		}
	}
</style>
