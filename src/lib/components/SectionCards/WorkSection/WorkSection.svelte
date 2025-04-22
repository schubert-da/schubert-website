<script>
	import WorksGrid from './WorksGrid.svelte';
</script>

<div class="work-section">
	<div class="card">
		<div class="title-content">
			<h2 class="title">My Work</h2>
			<p class="subtitle">
				A collection of the things I worked on over the past few years in no particular order.
			</p>
		</div>

		<div class="works-grid">
			<WorksGrid></WorksGrid>
		</div>
	</div>
</div>

<style lang="scss">
	.work-section {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
		padding: var(--section-padding);
		background-color: var(--palette-yellow-muted);
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 2.5rem;

		width: 100%;
		max-width: max(75vw, 1200px);
		height: 100%;
		padding: 2rem var(--card-padding);
		background-color: var(--color-background);
		background: #f5f5f5;
		border: 1px solid #929292;
		box-shadow: -4px 5px 4px rgba(0, 0, 0, 0.25);
		border-radius: 20px;

		.title-content {
			.title {
				margin-bottom: 0.5rem;
				font-size: var(--font-size-3);
			}

			p {
				max-width: 40ch;
				font-size: var(--font-size-0);
			}
		}

		.works-grid {
			width: 100%;
		}

		@media (max-width: 700px) {
			.card {
				gap: 1.5rem;
			}
		}
	}
</style>
