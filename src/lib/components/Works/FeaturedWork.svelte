<script>
	import Image1 from '$lib/assets/images/works/wdvp-1.png';
	import Image2 from '$lib/assets/images/works/wdvp-2.png';
	import Image3 from '$lib/assets/images/works/wdvp-3.png';
	import Image4 from '$lib/assets/images/works/wdvp-4.png';
	import Image5 from '$lib/assets/images/works/wdvp-5.png';
	import Image6 from '$lib/assets/images/works/wdvp-6.png';
</script>

<section>
	<div class="card">
		<div class="text-content">
			<div class="title">
				<h2>Dairy Chain Transition</h2>
				<span class="client">World Wildlife Fund</span>
			</div>

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
			<div class="track-container">
				<div class="image-track">
					<div class="image-wrapper">
						<img src={Image1} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image2} alt="graph showing Schubert's career" />
					</div>
					<div class="image-wrapper">
						<img src={Image3} alt="graph showing Schubert's career" />
					</div>
				</div>
			</div>

			<div class="track-container">
				<div class="image-track">
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

		background-color: var(--palette-yellow-muted);
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
		padding: 3rem 3rem;
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
			--grid-gap: 0.5rem;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			gap: var(--grid-gap);

			width: 50%;
			max-width: 700px;
			padding: 0;

			.track-container {
				width: 50%;
				height: 100%;
				max-height: 60vh;
				overflow: hidden;

				border-top: 1px solid #666;
				border-bottom: 1px solid #666;
				border-radius: 6px;
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
