<script>
	import HamburgerIcon from '$lib/assets/images/icons/icon-hamburger.svg?raw';
	import { slideInDrawer, clickOutside } from '$lib/utils/actions';

	let { navSections, totalWidth } = $props();
	let expanded = $state(false);

	let sectionChartWidth = $state(null);

	function handleClickOutside(event) {
		expanded = false;
	}

	function handleNavigation() {
		setTimeout(() => {
			expanded = false;
		}, 300);
	}
</script>

<button
	class="trigger h-full w-full cursor-pointer"
	class:expanded
	onclick={() => (expanded = !expanded)}
	aria-label="Toggle navigation"
>
	{@html HamburgerIcon}
</button>

{#if expanded}
	<div class="drawer" use:slideInDrawer use:clickOutside onoutsideclick={handleClickOutside}>
		<div class="legend-text">
			<h3>what's on here?</h3>
			<p>
				This dropdown contains all of the sections present as a percentage of the total length of
				the site
			</p>
		</div>

		{#each navSections as section}
			{@const widthPercentage = (section.width * 100) / totalWidth}
			<a href={section?.sections[0]?.href} aria-label={section.name} onclick={handleNavigation}>
				<div class="section-content">
					<div
						class="section-chart"
						bind:clientWidth={sectionChartWidth}
						style:--chart-width={sectionChartWidth + 'px'}
					>
						<div
							class="section-area"
							style:--area-color={section.color}
							style:--side-length={Math.sqrt(
								(widthPercentage * sectionChartWidth * sectionChartWidth) / 100
							) + 'px'}
							class:light-bg={section.color === 'var(--color-background)'}
						>
							<span>{Math.floor(widthPercentage)}%</span>
						</div>
					</div>

					<div class="text-content">
						<h3>{section.name}</h3>
						<p>{@html section.description}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
{/if}

<style lang="scss">
	button.trigger {
		--button-size: 60px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		// height: 100%;
		width: var(--button-size);
		height: 100%;
		padding: 0.75rem;
		background-color: var(--palette-yellow-muted);
		border: 2px solid #756f63;
		border-radius: 8px;

		cursor: pointer;

		&:hover:not(.expanded) {
			opacity: 0.8;
		}

		&.expanded {
			background-color: #bd9c54;
		}

		@media (max-width: 600px) {
			max-width: 50px;
			padding: 0.5rem;
		}
	}

	.drawer {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: calc(100% + 10px);
		right: -4px;
		transform: translateY(-2%);
		opacity: 0;
		transition:
			transform 0.2s ease-in-out,
			opacity 0.1s ease-in-out;

		width: 100%;
		min-width: 320px;
		max-height: 90dvh;
		border: 1px solid #929292;
		background-color: var(--color-background);
		border-radius: 8px;

		box-shadow: -1px 4px 6px rgba(0, 0, 0, 0.45);
		overflow: auto;

		@media (min-width: 600px) {
			right: 6px;
			min-width: 500px;
		}

		.legend-text {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: flex-start;
			gap: 0.375rem;

			padding: 1.25rem 1.25rem 1rem 1.25rem;
			border-bottom: 1px solid #929292;

			color: #444;

			h3 {
				font-family: var(--font-body);
				font-size: clamp(1.5rem, 1rem + 1.6vw, 2rem);
				font-weight: 600;
				line-height: 1.1;
				text-transform: uppercase;
			}

			p {
				font-size: clamp(0.8rem, 0.7rem + 0.8vw, 1.2rem);
				color: #4f4f4f;
			}

			@media (max-width: 600px) {
				align-items: flex-start;

				h3 {
					font-weight: 600;
				}
			}
		}

		a {
			display: block;
			text-decoration: none;
			color: inherit;
			cursor: pointer;

			&:not(:last-of-type) {
				border-bottom: 1px dashed #4f4f4f;
			}

			&:hover {
				background-color: #d0d7d4;
			}
		}

		.section-content {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			gap: 1rem;

			padding: 1.25rem 1.25rem 1rem 1.25rem;

			.section-chart {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				justify-content: flex-start;

				min-width: 125px;
				height: var(--chart-width);
				background-color: #e9e9e9;
				border: 1px solid #aaaaaa;

				.section-area {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					justify-content: flex-start;

					padding: 0.375rem;
					background-color: var(--area-color);
					color: white;
					width: var(--side-length);
					height: var(--side-length);

					span {
						font-size: 1.25rem;
					}

					&.light-bg {
						color: #444;
						font-weight: 500;

						border-bottom: 1px solid #aaaaaa;
						border-left: 1px solid #aaaaaa;
					}
				}
			}

			.text-content {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: start;
				gap: 0.25rem;

				color: #444;

				h3 {
					font-family: var(--font-body);
					font-size: 1.5rem;
					font-weight: 600;
					line-height: 1.1;
					text-transform: uppercase;
					text-align: left;
					text-decoration: underline;
				}

				p {
					font-size: clamp(0.8rem, 0.7rem + 0.8vw, 1rem);
					text-align: left;
					color: #4f4f4f;
				}
			}
		}

		@media (max-width: 600px) {
			.section-content {
				padding: 1.25rem var(--page-padding) 1rem var(--page-padding);

				.section-chart {
					min-width: 110px;

					.section-area {
						padding: 0.45rem 0.3rem;
						span {
							font-size: 1rem;
						}
					}
				}

				.text-content {
					h3 {
						font-weight: 500;
					}
				}
			}
		}
	}

	:global(.drawer.animate-in) {
		transform: translateY(0);
		opacity: 1;
	}
</style>
