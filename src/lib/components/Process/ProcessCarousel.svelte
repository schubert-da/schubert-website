<script>
	import { navbarHeight } from '$lib/utils/stores';
	import { onMount } from 'svelte';
	import exampleImage from '$lib/assets/images/works/wdvp-2.png';
	import { gsap } from 'gsap';
</script>

<section style="--navbar-height: {$navbarHeight}px">
	<div class="card" bind:this={cardElement}>
		<div class="card-header">
			<h1>Dairy Cold Chain Transition</h1>
		</div>

		<div class="card-content">
			<div class="page">
				<div class="text-content">
					<h2 class="title">Some Content with a Title</h2>

					<div class="description">
						<p>
							I build charts and weird interactives on the web while I struggle to fill out a
							sketchbook on the side.
						</p>
					</div>
				</div>
			</div>

			<div class="divider"></div>

			<div class="page">
				<div class="text-content">
					<h2 class="title">Some Content with a Title</h2>

					<div class="description">
						<p>
							I build charts and weird interactives on the web while I struggle to fill out a
							sketchbook on the side.
						</p>
					</div>
				</div>

				<div class="image-content">
					<img src={exampleImage} alt="example graphic content" />
				</div>
			</div>
		</div>

		<div class="card-footer">
			<span>Tap on either side of the screen to scroll</span>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;

		height: calc(100vh - 0.5rem);
		background-color: var(--palette-yellow-muted);
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		// gap: 1rem;

		width: 100%;
		max-width: max(75vw, 1200px);
		height: 100%;
		max-height: 100%;
		background-color: var(--color-background);
		padding: 0;

		border: 1px solid #929292;
		box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;

		.card-header {
			padding: 1rem 0;
			border-bottom: 1px solid #929292;
			width: 100%;

			h1 {
				padding: 0 var(--card-padding);
				font-size: var(--font-size-3);
				text-align: center;
			}
		}

		.card-content {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 2rem;

			width: 100%;
			height: 100%; // Ensure the parent has a defined height
			height: 100%;
			padding: 1rem var(--card-padding) 2rem var(--card-padding);

			.page {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				padding: 0 var(--card-padding);
				margin: 0 auto;
				max-width: 500px;

				.text-content {
					.title {
						margin-bottom: 0.75rem;
						font-size: var(--font-size-2);
						line-height: 1.1;
						text-wrap: balance;
					}

					.description {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						gap: 1rem;
					}

					p {
						max-width: 55ch;
						font-size: var(--font-size-0);
					}
				}

				.image-content {
					display: flex;
					align-items: center;
					justify-content: center;

					border: 1px solid #666;
					border-radius: 4px;
					width: 100%;

					img {
						width: 100%;
					}
				}
			}

			.divider {
				width: 1px;
				min-width: 1px;
				height: 100%;
				background: repeating-linear-gradient(
					to bottom,
					#666 0px,
					#666 4px,
					transparent 4px,
					transparent 10px
				);
			}
		}

		.card-footer {
			padding: 0.75rem 1rem;
			border-top: 1px solid #929292;
			width: 100%;

			span {
				display: block;
				padding: 0 var(--card-padding);

				color: #666;
				font-size: var(--font-size--1);
				text-align: center;
			}
		}
	}
</style>
