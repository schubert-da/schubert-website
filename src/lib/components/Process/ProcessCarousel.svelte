<script>
	import { navbarHeight } from '$lib/utils/stores';
	import { onMount } from 'svelte';
	import exampleImage from '$lib/assets/images/works/wdvp-2.png';
	import { gsap } from 'gsap';

	let currentPage = $state(0);
	let { pages } = $props();

	function handlePageChange(direction) {
		if (direction === 'next') {
			currentPage = currentPage + 1 >= pages.length ? pages.length - 1 : currentPage + 1;
		} else if (direction === 'prev') {
			currentPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
		}
	}

	let screenWidth = $state(1000);
	let numPages = $derived(screenWidth > 1000 ? 2 : 1);

	let cardContentWidth = $state(300);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section style="--navbar-height: {$navbarHeight}px">
	<div class="card">
		<div class="card-header">
			<h1>Dairy Cold Chain Transition</h1>
		</div>

		<div class="card-content" bind:clientWidth={cardContentWidth}>
			<div
				class="pages-track"
				style="--x-translate: {-(currentPage * cardContentWidth) / numPages}px"
			>
				{#each pages.slice() as page}
					{@const pageWidth = cardContentWidth / numPages}
					<div class="page" class:two-pages={numPages === 2} style="--page-width: {pageWidth}px">
						{#each page.content as content}
							{#if content.type === 'title'}
								<div class="text-content">
									<h2 class="title">{content.text}</h2>
								</div>
							{:else if content.type === 'text'}
								<div class="text-content">
									{#if content.title}
										<h2 class="title">{content.title}</h2>
									{/if}

									<div class="description">
										{#each content.text as text, index}
											<p>{text}</p>
										{/each}
									</div>
								</div>
							{:else if content.type === 'image'}
								<div class="image-content">
									<img src={content.src} alt={content.alt} />
								</div>
							{/if}
						{/each}
					</div>
				{/each}

				{#if pages.slice(currentPage, currentPage + numPages).length === 1 && numPages === 2}
					<div
						class="page"
						class:two-pages={numPages === 2}
						style="--page-width: {cardContentWidth / numPages}px"
					></div>
				{/if}
			</div>
		</div>

		<div class="card-footer">
			<span>Tap on either side of the screen to scroll</span>
		</div>
	</div>

	<div class="carousel-controls">
		<button
			class="carousel-button"
			aria-label="previous page"
			onclick={() => handlePageChange('prev')}
			disabled={currentPage === 0}
		>
			<div class="icon-container icon-container-left">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#666"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-left-icon lucide-chevron-left"
					><path d="m15 18-6-6 6-6" /></svg
				>
			</div>
		</button>

		<button
			class="carousel-button"
			aria-label="next page"
			onclick={() => handlePageChange('next')}
			disabled={currentPage === pages.length - 1}
		>
			<div class="icon-container icon-container-right">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#666"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-right-icon lucide-chevron-right"
					><path d="m9 18 6-6-6-6" /></svg
				>
			</div>
		</button>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: var(--palette-yellow-muted);
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		// gap: 1rem;

		width: 100%;
		max-width: max(75vw, 1200px);
		height: 100%;
		background-color: var(--color-background);
		padding: 0;

		border: 1px solid #929292;
		box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;

		.card-header {
			padding: 1rem 0;
			border-bottom: 1px solid #929292;
			width: 100%;
			box-shadow:
				rgba(0, 0, 0, 0.16) 0px 2px 4px,
				rgba(0, 0, 0, 0.23) 0px 2px 4px;
			z-index: 1;

			h1 {
				padding: 0 var(--card-padding);
				font-size: var(--font-size-3);
				text-align: center;
			}
		}

		.card-content {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: flex-start;
			gap: 0;
			overflow: hidden;

			width: 100%;
			height: 100%;
			max-height: 75vh;
			padding: 0;

			.pages-track {
				display: flex;
				flex-direction: row;
				align-items: stretch;
				justify-content: flex-start;
				gap: 0;

				width: 100%;
				height: 100%;
				padding: 0;
				transform: translateX(var(--x-translate));
				transition: transform 0.5s ease-in-out;
			}

			.page {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				gap: 1.5rem;

				width: var(--page-width);
				min-width: var(--page-width);
				padding: calc(4 * var(--card-padding)) calc(2 * var(--card-padding));
				padding-bottom: 0;
				margin: 0;

				&.two-pages {
					background-image: linear-gradient(
						-90deg,
						rgba(230, 230, 230, 1) 0%,
						rgba(247, 247, 247, 0) 18%,
						rgba(247, 247, 247, 0) 82%,
						rgba(230, 230, 230, 1) 100%
					);
				}

				&.two-pages:not(:first-of-type)::before {
					position: absolute;
					left: 0rem;
					top: 0;

					content: '';
					width: 1px;
					height: 100%;
					background: repeating-linear-gradient(
						to bottom,
						#666 0px,
						#666 4px,
						transparent 4px,
						transparent 10px
					);
				}

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
					width: 80%;
					height: 50%;
					margin: 0 auto;
					overflow: hidden;

					img {
						width: 100%;
						height: auto;
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
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 2rem;

			padding: 0.75rem 1rem;
			border-top: 1px solid #929292;
			width: 100%;
			box-shadow:
				rgba(0, 0, 0, 0.16) 0px -1px 4px,
				rgba(0, 0, 0, 0.23) 0px -1px 4px;
			z-index: 1;

			span {
				display: block;
				padding: 0 var(--card-padding);

				color: #666;
				font-size: var(--font-size--1);
				text-align: center;
			}
		}
	}

	.carousel-controls {
		position: absolute;
		top: 50%;
		left: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		transform: translateY(-50%);

		width: 100%;
		height: 100%;
		pointer-events: none;

		button {
			width: 30vw;
			height: 100%;
			padding: 0 2rem;
			pointer-events: all;
			background-color: transparent;
			border: none;
			cursor: pointer;

			&:disabled {
				opacity: 0.5;
				cursor: default;

				&:hover,
				&:last-of-type:hover {
					background: none;
					.icon-container {
						transform: scale(1);
					}
				}
			}

			&:hover {
				background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%);

				.icon-container {
					transform: scale(1.1);
				}
			}

			&:last-of-type:hover {
				background: linear-gradient(
					-90deg,
					rgba(255, 255, 255, 0.3) 0%,
					rgba(255, 255, 255, 0) 80%
				);
			}
		}

		.icon-container {
			display: flex;
			justify-content: center;
			align-items: center;

			width: clamp(2rem, 5vw, 2.5rem);
			height: clamp(2rem, 5vw, 2.5rem);
			padding: 0.25rem;
			background-color: var(--color-background);
			border-radius: 100rem;
			border: 1px solid #929292;
			box-shadow: --2px 3px 4px rgba(0, 0, 0, 0.25);
			transition: transform 0.5s ease-in;

			&.icon-container-left {
				margin-right: auto;
			}

			&.icon-container-right {
				margin-left: auto;
			}
		}
	}

	@media (max-width: 1000px) {
		.carousel-controls {
			button {
				opacity: 0 !important;
			}
		}
	}

	@media (max-width: 500px) {
		section {
			height: calc(100vh - var(--navbar-height));

			.card .card-content {
				min-height: unset;
			}

			.card .card-header {
				h1 {
					font-size: var(--font-size-2);
				}
			}
		}
	}
</style>
