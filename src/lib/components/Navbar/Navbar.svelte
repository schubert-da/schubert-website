<script>
	import NavbarDropdown from './NavbarDropdown.svelte';
	import { navbarHeight } from '$lib/utils/stores';
	import { navSectionsConfig } from '$lib/utils/stores';

	let { showNav } = $props();
	let screenWidth = $state(0);

	let navSections = $derived.by(() => {
		let currentNavSections = $navSectionsConfig.slice();
		const sections = currentNavSections.map((section) => section.name);

		sections.forEach((section) => {
			let currentSection = currentNavSections.find((s) => s.name === section);
			let sectionHeight = currentSection.sections.reduce((acc, s) => acc + s.width, 0);
			currentSection.width = sectionHeight;
		});

		return currentNavSections;
	});

	let totalWidth = $derived.by(() => {
		return navSections?.reduce((acc, section) => acc + section.width, 0);
	});
</script>

<svelte:window bind:innerWidth={screenWidth} />

<nav>
	{#if navSections}
		<div class="section-list" bind:clientHeight={$navbarHeight} class:show-nav={showNav}>
			{#each navSections as category, index}
				{#if category?.width > 0}
					{@const categoryWidth = (category.width * 100) / totalWidth}
					<div
						class="section-wells"
						class:light-bg={category.color === 'var(--color-background)'}
						style="--category-width: {categoryWidth}%;"
					>
						<div class="section-mobile-title">
							<h3>
								{category.name}
							</h3>
							<!-- <span>
								{Math.round(categoryWidth)}% {index === 0 ? 'page content' : ''}
							</span> -->
						</div>
						<ul
							style="--after-content: '{Math.round(categoryWidth)}% {index === 0
								? 'page content'
								: ''}';"
						>
							{#each category.sections as section, index}
								<li>
									<a
										href={section.href}
										aria-label={section.name}
										style="--category-color: {category.color}"
									>
										{#if index == 0}
											<h3 class="section-title">
												{screenWidth > 1000 ? category.name : Math.round(categoryWidth) + '%'}
											</h3>
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
			<div class="section-wells" style="height: unset;">
				<NavbarDropdown {navSections} {totalWidth}></NavbarDropdown>
			</div>
		</div>
	{/if}
</nav>

<div class="navbar-spacer" style="--navbar-height: {$navbarHeight}px"></div>

<style lang="scss">
	nav {
		position: fixed;
		top: 0.5rem;
		z-index: 1000;

		width: 100%;
		padding: 0 var(--page-padding);
		border-radius: 8px;

		.section-list {
			display: flex;
			flex-direction: row;
			align-items: stretch;

			width: 100%;
			max-width: max(75vw, 1200px);
			height: 100%;
			margin: 0 auto;
			background-color: var(--color-background);
			box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
			border: 2px solid #929292;
			border-radius: 8px;

			transform: translateY(-110%);
			transition: all 0.3s ease-in-out;

			&.show-nav {
				transform: translateY(0);
			}
		}

		.section-wells {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			gap: 0.2rem;

			padding: 0.375rem;
			width: var(--category-width);

			transition: all 0.4s ease-in;

			&:not(:last-child) {
				border-right: 2px solid #929292;
			}

			&.light-bg {
				ul a {
					border: 1px solid #929292;
				}

				ul a h3 {
					color: #222;
				}
			}

			.section-mobile-title {
				display: none;
				flex-direction: row;
				align-items: flex-start;
				justify-content: space-between;
				gap: 1rem;

				width: 100%;

				h3 {
					font-family: var(--font-body);
					text-transform: uppercase;
					color: var(--color-text);
					font-weight: 500;
					font-size: 1.125rem;

					max-width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				span {
					font-size: 1rem;
					text-align: right;
				}
			}

			ul {
				position: relative;
				list-style-type: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				gap: 0.1rem;

				padding: 0;
				margin: 0;
				width: 100%;

				&::after {
					position: absolute;
					top: 0;
					right: 0;
					content: var(--after-content);

					padding-left: 0.75rem;
					padding-right: 0.125rem;
					padding-bottom: 0.25rem;
					border-bottom-left-radius: 10px;

					color: #333;
					font-weight: 600;
					white-space: nowrap;
					text-wrap: none;
					background-color: var(--color-background);
					box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
				}
			}

			li {
				width: 100%;
			}

			a {
				display: block;
				text-decoration: none;

				height: 5rem;
				padding: 10px 8px;
				background-color: var(--category-color);
				box-shadow: inset -3px 4px 4px rgba(0, 0, 0, 0.25);
				transition: opacity 0.2s ease-in-out;

				h3 {
					font-family: var(--font-body);
					text-transform: uppercase;
					color: white;
					font-weight: 500;
					font-size: 1.25rem;
				}

				&:hover {
					opacity: 70%;
				}
			}
		}

		@media (max-width: 1000px) {
			.section-wells {
				.section-mobile-title {
					display: flex;
				}

				ul {
					gap: 1px;

					a {
						padding: 6px 4px;
						box-shadow: none;

						h3 {
							font-size: 1rem;
						}
					}

					&::after {
						display: none;
					}
				}
			}

			.section-wells ul a h3,
			.section-wells.light-bg ul a h3 {
				// display: none;
			}
		}
	}

	.navbar-spacer {
		height: calc(var(--navbar-height) + 0.5rem);
		background-color: var(--palette-yellow-muted);
	}
</style>
