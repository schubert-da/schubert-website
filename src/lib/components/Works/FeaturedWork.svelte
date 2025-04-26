<script>
	import Image1 from '$lib/assets/images/works/wdvp-1.png';
	import Image2 from '$lib/assets/images/works/wdvp-2.png';
	import Image3 from '$lib/assets/images/works/wdvp-3.png';
	import Image4 from '$lib/assets/images/works/wdvp-4.png';
	import Image5 from '$lib/assets/images/works/wdvp-5.png';
	import Image6 from '$lib/assets/images/works/wdvp-6.png';
	import ArtLearningImage from '$lib/assets/images/life-viz/art-learning.png?url';

	import { scrollerParams } from '$lib/utils/stores';

	export let currentIndex = 1;
</script>

<section>
	<div class="card">
		<div class="text-content">
			<div class="title">
				<h2>One Step Forward, But Still Short</h2>
				<span class="client">World Data Visualisation Prize 2024</span>
			</div>

			<div class="description">
				<img
					src={ArtLearningImage}
					alt="graph showing Schubert's career"
					style="width: 100%; max-width: 300px; height: auto; float: left; margin-right: 1rem; shape-outside: url({ArtLearningImage}); shape-margin: 1rem;"
				/>
				<p>
					An interactive story about shortfall of progress towards achieving UN's SDG Goals. This
					piece ended up making it to the shortlist of the World Data Visualisation Prize in 2024.
				</p>

				<p>
					This was project had many firsts for me - it was my first time writing a narrative, I also
					decided to not create charts with code - instead it was a combination of RawGraphs and
					Milton(think ai2html but for Figma) and my first attempt at SEO(it has none - I couldn't
					figure it out and gave up).
				</p>

				<p>
					Done at a time when I'd never implemented a scrollytelling piece before, this project used
					Russel Goldenberg's utility component to create a couple basic scroll-based animations for
					the various charts.
				</p>
			</div>
		</div>

		<div
			class="image-content"
			style="--scroll-offset: {$scrollerParams?.index === currentIndex
				? $scrollerParams.offset
				: 0}"
		>
			<div class="track-container">
				<div class="image-track track-left">
					<div class="image-wrapper">
						<img src={Image1} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image2} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image3} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image1} alt="graph showing Schubert's career" />
					</div>
				</div>
			</div>

			<div class="track-container">
				<div class="image-track track-right">
					<div class="image-wrapper">
						<img src={Image4} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image5} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image6} alt="graph showing Schubert's career" />
					</div>
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

		padding: 2rem;
		background-color: var(--palette-green-muted);
	}

	.card {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;

		width: 100%;
		max-width: max(75vw, 1200px);
		height: 100%;
		padding: 2rem;
		background-color: var(--color-background);

		background: #f5f5f5;
		border: 1px solid #929292;
		box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;

		.text-content {
			.title {
				margin-bottom: 1.6rem;

				h2 {
					margin-bottom: 0.5rem;

					line-height: 1;
					font-size: 3rem;
				}

				span {
					font-size: 1.2rem;
					text-transform: uppercase;
					color: #5c5c5c;
				}
			}

			.description {
				// display: flex;
				// flex-direction: column;
				// justify-content: center;
				// align-items: flex-start;
				// gap: 1rem;
				text-align: justify;
			}

			p {
				max-width: 45ch;
				font-size: 20px;
				margin-bottom: 1rem;
			}
		}

		.image-content {
			--grid-gap: 0.55rem;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			gap: var(--grid-gap);

			width: 50%;
			max-width: 700px;
			padding: 0;

			.track-container {
				position: relative;
				width: 50%;
				height: 100%;
				max-height: 70vh;
				overflow: hidden;

				border-top: 1px solid #666;
				border-bottom: 1px solid #666;
				border-radius: 4px;

				&::after {
					position: absolute;
					left: 0;
					top: 0;
					content: '';
					display: block;
					z-index: 1;
					width: 100%;
					height: 20px;
					box-shadow: inset 1px 4px 4px rgba(0, 0, 0, 0.3);
					pointer-events: none;
				}
			}

			.image-track {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: var(--grid-gap);

				width: 100%;
				height: 100%;
				max-height: 100%;

				&.track-left {
					transform: translateY(calc(var(--scroll-offset) * -1 * 40%));
				}

				&.track-right {
					transform: translateY(calc(var(--scroll-offset) * 40% - 20%));
				}

				.image-wrapper {
					display: flex;
					justify-content: center;
					align-items: center;

					position: relative;
					overflow: hidden;

					height: 100%;
					border: 1px solid #666;
					border-radius: 4px;

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
						pointer-events: none;
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
