<script>
	import { navbarHeight } from '$lib/utils/stores';
	import { navSectionsConfig } from '$lib/utils/stores';

	let { showNav } = $props();

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

	$inspect('navSections', navSections);
	$inspect('totalWidth', totalWidth);
</script>

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
											<h3 class="section-title">{category.name}</h3>
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
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
			align-items: center;
			overflow: hidden;

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
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;

			padding: 0.375rem;
			width: var(--category-width);
			height: 100%;

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
	}

	.navbar-spacer {
		height: calc(var(--navbar-height) + 0.5rem);
		background-color: var(--palette-yellow-muted);
	}
</style>
