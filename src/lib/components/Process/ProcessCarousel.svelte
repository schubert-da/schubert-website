<script>
	import { navbarHeight } from '$lib/utils/stores';
	import { onMount } from 'svelte';
	import exampleImage from '$lib/assets/images/works/wdvp-2.png';
	import { gsap } from 'gsap';

	let currentPage = 0;

	const pages = [
		{
			content: [
				{
					type: 'text',
					title: 'Some Content with a Title',
					text: [
						'I build charts and weird interactives on the web while I struggle to fill out a sketchbook on the side.',
						'One more line here to make it look better.'
					]
				}
			]
		},
		{
			content: [
				{
					type: 'text',
					title: 'Some Content with a Title',
					text: [
						'I build charts and weird interactives on the web while I struggle to fill out a sketchbook on the side.'
					]
				},
				{ type: 'image', src: exampleImage, alt: 'example graphic content' }
			]
		},
		{
			content: [
				{
					type: 'text',
					title: 'Some Content with a Title',
					text: [
						'I build charts and weird interactives on the web while I struggle to fill out a sketchbook on the side.',
						'One more line here to make it look better.'
					]
				}
			]
		}
	];

	function handlePageChange(direction) {
		if (direction === 'next') {
			currentPage = currentPage + 1 >= pages.length ? pages.length - 1 : currentPage + 1;
		} else if (direction === 'prev') {
			currentPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
		}
	}
</script>

<section style="--navbar-height: {$navbarHeight}px">
	<div class="card" bind:this={cardElement}>
		<div class="card-header">
			<h1>Dairy Cold Chain Transition</h1>
		</div>

		<div class="card-content">
			{#each pages.slice(currentPage, currentPage + 2) as page}
				<div class="page">
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
		</div>

		<div class="card-footer">
			<div class="icon-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-left-icon lucide-chevron-left"
					><path d="m15 18-6-6 6-6" /></svg
				>
			</div>
			<span>Tap on either side of the screen to scroll</span>
			<div class="icon-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-right-icon lucide-chevron-right"
					><path d="m9 18 6-6-6-6" /></svg
				>
			</div>
		</div>
	</div>

	<div class="carousel-controls">
		<button class="carousel-button" on:click={() => handlePageChange('prev')}>
			<span>Previous</span>
		</button>

		<button class="carousel-button" on:click={() => handlePageChange('next')}>
			<span>Next</span>
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
			justify-content: center;
			gap: 2rem;

			width: 100%;
			height: 100%;
			min-height: 80vh;
			padding: 2.5rem var(--card-padding) 2.5rem var(--card-padding);

			.page {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 1.5rem;

				padding: 0 var(--card-padding);
				max-width: 500px;

				&:last-of-type::before {
					position: absolute;
					left: -1rem;
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
			justify-content: space-between;
			align-items: center;
			gap: 2rem;

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

			.icon-container {
				display: flex;
				justify-content: center;
				align-items: center;

				width: 1.5rem;
				height: 1.5rem;
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
			opacity: 50%;
			pointer-events: all;
		}
	}
</style>
