<script>
	import { worksData } from '$lib/assets/data/worksData';
	import ArrowIcon from '$lib/assets/images/icons/icon-arrow.svg?raw';

	let screenWidth = 1000;

	$: processedWorksData = processWorksData(worksData, screenWidth);

	function processWorksData(data, screenWidth) {
		if (screenWidth > 700) {
			return data;
		} else {
			let newData = [];
			data.forEach((project) => {
				let work = Object.assign({}, project);
				work.blocks = work.blocks.sort((a, b) => a.cols - b.cols);
				newData.push(work);
			});

			return newData;
		}
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="grid">
	{#each processedWorksData as work}
		<div class="grid-row">
			<div class="blocks">
				{#each work.blocks as block}
					<div class="grid-item" style="grid-column: span {block.cols}">
						{#if block.type === 'image'}
							<div class="image-content">
								<img src={block.src} alt={block.alt} />
							</div>
						{:else if block.type === 'text'}
							<div class="grid-text-content">
								<div class="card-text">
									<h3>{block.title}</h3>
									<p>{block.description}</p>
								</div>

								<a href={block.link} target="_blank" rel="noopener noreferrer">
									<span>Project</span>
									<div class="icon-container">
										{@html ArrowIcon}
									</div>
								</a>
							</div>
						{/if}
					</div>
				{/each}
			</div>
			<div class="project-details">
				<div class="detail">
					<p class="detail-label">Client:</p>
					<p class="detail-value">{work.client}</p>
				</div>

				<div class="detail">
					<p class="detail-label">Project:</p>
					<p class="detail-value">{work.projectType}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.grid {
		--row-height: 250px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		border: 4px solid #666666;
		border-radius: 6px;
		overflow: hidden;

		.grid-row {
			display: flex;
			flex-direction: column;
			align-items: center;

			width: 100%;
		}

		.blocks {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: auto;

			width: 100%;
			height: var(--row-height);

			.grid-item {
				width: 100%;
				height: 100%;
				border: 1px solid #666666;
				background-color: var(--color-background);

				img {
					width: 100%;
					height: var(--row-height);
					object-fit: cover;
				}

				.grid-text-content {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;

					width: 100%;
					height: 100%;
					padding: 20px;

					h3 {
						margin-bottom: 10px;

						font-size: var(--font-size-1);
						text-wrap: pretty;
						line-height: 1;
					}

					p {
						font-size: var(--font-size--1);
						text-wrap: pretty;
					}

					a {
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 0.5rem;

						padding: 0.35rem 0.25rem 0.35rem 0.75rem;
						border: 1px solid #565656;
						border-radius: 100rem;
						text-decoration: none;

						span {
							font-size: var(--font-size--1);
							color: var(--text-grey);
							text-transform: uppercase;
						}

						.icon-container {
							width: 1.5rem;
						}
					}
				}
			}
		}

		.project-details {
			display: flex;
			align-items: center;
			justify-content: space-between;

			width: 100%;
			height: fit-content;
			padding: 0.75rem 0.5rem;
			border-top: 2px solid #666666;
			background-color: var(--color-background);

			.detail {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.25rem;

				.detail-label {
					font-size: var(--font-size--1);
					line-height: 1;
					font-weight: 600;
					text-transform: uppercase;
				}

				.detail-value {
					font-size: var(--font-size--1);
					line-height: 1;
					text-transform: uppercase;
				}
			}
		}

		.grid-row:not(:last-of-type) .project-details {
			border-bottom: 6px solid #333;
		}

		@media (max-width: 1000px) {
			.blocks {
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: auto;
				height: calc(2 * var(--row-height));
			}
		}

		@media (max-width: 700px) {
			--row-height: 180px;

			.blocks {
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: auto;
				height: calc(3 * var(--row-height));
			}

			.project-details {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 0.375rem;

				padding: 0.5rem 0.5rem;
			}
		}
	}
</style>
