<script>
	import ParallaxScene from '$lib/components/ParallaxScene/ParallaxScene.svelte';
	import { navbarHeight } from '$lib/utils/stores';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let captionHeight = 0;
	let cardElement = 0;
	let hoverTimeline = gsap.timeline({ paused: true });

	function animateHighlightText(element) {
		gsap.from(element, {
			opacity: 0,
			y: 20,
			duration: 0.5,
			delay: 0.5,
			ease: 'spring.in'
		});
	}

	onMount(() => {
		const imageContentElement = cardElement.querySelector('.image-content');
		const sceneContainer = cardElement.querySelector('.image-container .scene-container');
		const textContentElement = cardElement.querySelector('.text-content');

		hoverTimeline.clear();
		hoverTimeline.fromTo(
			imageContentElement,
			{
				width: '50%',
				scale: 1
			},
			{
				width: '100%',
				duration: 0.5,
				delay: 0,
				ease: 'power2.out'
			}
		);

		hoverTimeline.fromTo(
			sceneContainer,
			{
				scale: 1
			},
			{
				scale: 1.05,
				duration: 0.5,
				ease: 'power2.out'
			},
			'<'
		);
	});

	function handleImageHover() {
		hoverTimeline.restart();
	}
</script>

<section style="--navbar-height: {$navbarHeight}px">
	<div class="card" bind:this={cardElement}>
		<div class="text-content">
			<h2 class="title">
				Hi there, I&#x2019m <div class="highlight">
					<span use:animateHighlightText>Schubert!</span>
				</div>
			</h2>

			<div class="description">
				<p>
					I build charts and weird interactives on the web while I struggle to fill out a sketchbook
					on the side.
				</p>
				<p>
					If it's creative and I've worked on it, you will likely find it in the realms of this site
				</p>
			</div>
		</div>

		<div class="image-content">
			<div class="image-container">
				<div
					class="image-wrapper"
					style="--caption-height: {captionHeight}px"
					on:mouseenter={handleImageHover}
					on:mouseleave={() => {
						console.log('leave');
						hoverTimeline.reverse();
					}}
					role="img"
				>
					<ParallaxScene></ParallaxScene>
				</div>

				<div class="caption-row" bind:clientHeight={captionHeight}>
					<input type="checkbox" name="chart type" id="chart-type" />
					<label for="chart-type">
						<span class="label-text art">ART</span>
						<span class="label-text viz">VIZ</span>
					</label>
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
		gap: 1rem;

		width: 100%;
		max-width: max(75vw, 1200px);
		height: 100%;
		padding: 0 2rem 0 3rem;
		background-color: var(--color-background);

		background: #f5f5f5;
		border: 1px solid #929292;
		box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;

		.text-content {
			width: 45%;
			transition: width 1s ease-in;

			.title {
				font-size: var(--font-size-3);
				margin-bottom: 2rem;

				div.highlight {
					display: inline-block;
					padding: 0rem 0.65rem;
					color: white;
					background-color: var(--palette-yellow-muted);
					font-size: calc(var(--font-size-3) - 2px);
					border-radius: 7px;

					span {
						display: block;
					}
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
				font-size: var(--font-size-0);
			}
		}

		.image-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			overflow: hidden;

			width: 50%;
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
					height: 100%;
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
						pointer-events: none;
					}
				}

				img {
					width: 100%;
					height: auto;
					overflow: hidden;

					background-color: #aaa;
				}

				.caption-row {
					display: flex;
					flex-direction: row;
					align-items: baseline;
					justify-content: flex-end;
					gap: 0.25rem;

					label {
						--toggle-button-size: 24px;
						--toggle-padding: 3px;

						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;

						width: 80px;
						height: calc(var(--toggle-button-size) + var(--toggle-padding) * 2 + 2px);
						padding: var(--toggle-padding);
						border: 2px solid #666;
						border-radius: 30px;
						background: #abb3af;
						cursor: pointer;

						&::after {
							content: '';
							position: absolute;
							top: 50%;
							left: var(--toggle-padding);
							transform: translateY(-50%);

							width: var(--toggle-button-size);
							height: var(--toggle-button-size);
							background-color: var(--color-background);
							border: 2px solid #666;
							border-radius: 100rem;

							transition: left 0.25s ease-in 0.1s;
						}

						.label-text {
							--text-padding: 0.6rem;
							position: absolute;

							font-weight: 600;
							font-size: var(--font-size--1);
							transition: opacity 0.1s ease-in-out 0.2s;

							&.art {
								opacity: 0;
								left: var(--text-padding);
								color: #5d4617;
							}
							&.viz {
								opacity: 1;
								right: var(--text-padding);
								color: #59635f;
							}
						}
					}

					input {
						opacity: 0;
						width: 0;
						height: 0;
						position: absolute;

						&:checked + label {
							background: var(--palette-yellow-muted);

							.label-text.viz {
								opacity: 0;
							}

							.label-text.art {
								opacity: 1;
							}

							&:after {
								left: calc(100% - var(--toggle-button-size) - var(--toggle-padding));
							}
						}
					}
				}
			}
		}
	}
</style>
