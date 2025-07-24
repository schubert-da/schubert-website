<script>
	import { TILE_SET } from './tileSet';
	import { collapseTiles, initTiles } from './WaveFunction';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let { numTilesPlaced = $bindable(), DELAY = 0 } = $props();
	const NUM_ROWS = 3;
	const NUM_COLS = 5;

	let gridWidth = $state(500);
	let tileWidth = $derived(gridWidth ? gridWidth / NUM_COLS : 100);

	let tiles = $state([]);
	let currentRow = 0;

	let tilesList = $state({});

	onMount(async () => {
		tiles = await initTiles(tiles, NUM_ROWS, NUM_COLS, 1);
		tiles = await collapseTiles(tiles, currentRow, NUM_ROWS, NUM_COLS);

		tiles.forEach((tile, index) => {
			const tileElement = tilesList[`${currentRow * NUM_COLS + index}`];
			gsap.to(tileElement, {
				opacity: 1,
				duration: 0.5,
				ease: 'power1.inOut',
				delay: DELAY * tile.order,
				onComplete: () => {
					numTilesPlaced += 1;
				}
			});
		});

		currentRow = 0;
		await animateNextTiles(currentRow);

		const interval = setInterval(
			async () => {
				currentRow += 2;

				animateNextTiles(currentRow);
			},
			DELAY * (NUM_COLS * 2) * 1000
		);

		return () => clearInterval(interval);
	});

	async function animateNextTiles(currentRow) {
		const timeline = gsap.timeline({
			paused: true,
			onComplete: () => {
				timeline.kill();
			}
		});

		tiles = await initTiles(tiles, NUM_ROWS, NUM_COLS, 2);
		tiles = await collapseTiles(tiles, currentRow, NUM_ROWS, NUM_COLS);
		let currentTiles = await tiles.slice((currentRow + 1) * NUM_COLS, (currentRow + 3) * NUM_COLS);

		currentTiles.slice().forEach((tile, index) => {
			const tileElement = tilesList[`${(currentRow + 1) * NUM_COLS + index}`];
			let effectiveDelay = (tile.order % (2 * NUM_COLS)) * DELAY;

			timeline.to(
				tileElement,
				{
					opacity: 1,
					duration: 0.5,
					ease: 'power1.inOut',
					onComplete: () => {
						numTilesPlaced += 1;
					}
				},
				currentRow === 0 ? DELAY * NUM_COLS + effectiveDelay + 1 : effectiveDelay + 1
			);
		});

		timeline.to(
			'.game-grid',
			{
				y: `-=${tileWidth * 2}px`,
				duration: 0.5,
				ease: 'power1.inOut'
			},
			'+=0.1'
		);

		timeline.play();
	}
</script>

<!-- <div class="grid-window"> -->
<div class="grid-window" style:height="{tileWidth * 3}px">
	<div class="game-grid" bind:clientWidth={gridWidth}>
		{#each Array(Math.floor(tiles.length / NUM_COLS)) as _, rowIndex}
			<div class="row">
				{#each Array(NUM_COLS) as _, colIndex}
					{@const tile = tiles[rowIndex * NUM_COLS + colIndex]}
					<div
						class="tile"
						style:--tile-width="{tileWidth}px"
						class:collapsed={tile?.collapsed}
						class:left={tile?.connections?.left}
						class:right={tile?.connections?.right}
						class:top={tile?.connections?.top}
						class:bottom={tile?.connections?.bottom}
					>
						<img
							bind:this={tilesList[rowIndex * NUM_COLS + colIndex]}
							style:--tile-rotation="{tile?.image?.rotation}deg"
							class="tile-image"
							src="/tiles/{tile?.image?.paths}"
							alt="tile"
						/>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.grid-window {
		position: relative;
		max-width: 1200px;
		margin: 4rem auto 0 auto;
		border: 4px solid #666;
		border-radius: 6px;
		overflow: hidden;
	}

	.game-grid {
		// position: absolute;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		max-width: 1200px;

		.row {
			display: flex;
			flex-direction: row;
		}

		.tile {
			width: var(--tile-width);
			height: var(--tile-width);
			border: 1px solid #aaa;
			opacity: 1;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;

				transform: rotate(var(--tile-rotation));
				opacity: 0;
			}
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
