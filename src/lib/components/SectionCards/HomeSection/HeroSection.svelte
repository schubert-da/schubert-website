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

		hoverTimeline.fromTo(
			imageContentElement,
			{
				width: '50%',
				scale: 1
			},
			{
				width: '100%',
				duration: 0.25,
				ease: 'power3.in'
			}
		);

		hoverTimeline.fromTo(
			sceneContainer,
			{
				scale: 1
			},
			{
				scale: 1.05,
				duration: 0.25,
				ease: 'power2.in'
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

		<div
			class="image-content"
			role="img"
			on:mouseenter={handleImageHover}
			on:mouseleave={() => {
				console.log('leave');
				hoverTimeline.reverse();
			}}
		>
			<div class="image-container">
				<div class="image-wrapper" style="--caption-height: {captionHeight}px">
					<ParallaxScene></ParallaxScene>
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
				font-size: 3rem;
				margin-bottom: 2rem;

				div.highlight {
					display: inline-block;
					padding: 0rem 0.65rem;
					color: white;
					background-color: var(--palette-yellow-muted);
					font-size: 2.75rem;
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
				font-size: 1.5rem;
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

			transition: width 1s ease-in;

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
