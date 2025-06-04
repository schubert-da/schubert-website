<script>
	import TileBlank from '$lib/assets/images/wave-playground/tile-blank.jpg';
	import TileDeadend from '$lib/assets/images/wave-playground/tile-deadend.jpg';
	import TileTJunction from '$lib/assets/images/wave-playground/tile-tjunction.jpg';
	import TileCurve from '$lib/assets/images/wave-playground/tile-curve.jpg';

	import { TILE_SET } from './tileSet';
	import { collapseTiles, initTiles } from './WaveFunction';
	import { onMount } from 'svelte';

	const NUM_ROWS = 3;
	const NUM_COLS = 5;
	const DELAY = 0.5;

	let gridWidth = $state(500);
	let tileWidth = $derived(gridWidth ? Math.floor(gridWidth / NUM_COLS) : 100);

	let tiles = $state([]);
	let currentRow = 0;

	onMount(() => {
		tiles = initTiles(tiles, NUM_ROWS, NUM_COLS, 3);
		tiles = collapseTiles(tiles, currentRow, NUM_ROWS, NUM_COLS);

		currentRow = 2;

		const interval = setInterval(
			() => {
				tiles = initTiles(tiles, NUM_ROWS, NUM_COLS, 2);
				tiles = collapseTiles(tiles, currentRow, NUM_ROWS, NUM_COLS);
				currentRow += 2;
				console.log('tiles', tiles);
			},
			currentRow === 2 ? DELAY * NUM_COLS * 3 * 1000 : DELAY * NUM_COLS * 2 * 1000
		);

		return () => clearInterval(interval);
	});

	function computeDelay(tileOrder) {
		if (tileOrder < NUM_COLS * 3) {
			return DELAY * tileOrder + DELAY;
		} else {
			return DELAY * (tileOrder % (NUM_COLS * 2)) + DELAY;
		}
	}
</script>

<div class="game-grid" bind:clientWidth={gridWidth}>
	{#each Array(Math.floor(tiles.length / NUM_COLS)) as _, rowIndex}
		<div class="row">
			{#each Array(NUM_COLS) as _, colIndex}
				{@const tile = tiles[rowIndex * NUM_COLS + colIndex]}
				<div
					class="tile"
					style:--tile-width="{tileWidth}px"
					style="transition-delay: {0}s;"
					class:collapsed={tile?.collapsed}
					class:left={tile?.connections?.left}
					class:right={tile?.connections?.right}
					class:top={tile?.connections?.top}
					class:bottom={tile?.connections?.bottom}
				>
					{#if tile.image}
						<img
							style:--transition-delay="{computeDelay(tile.order)}s"
							style:--tile-rotation="{tile.image.rotation}deg"
							class="tile-image"
							src="/tiles/{tile.image.paths}"
							alt="tile"
						/>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.game-grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		max-width: 1100px;
		margin: 4rem auto 0 auto;
		border: 4px solid #666;
		border-radius: 6px;

		.row {
			display: flex;
			flex-direction: row;
		}

		.tile {
			width: var(--tile-width);
			height: var(--tile-width);
			border: 1px solid #666;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;

				transform: rotate(var(--tile-rotation));
				opacity: 0;
				animation: fadeIn 0.5s forwards var(--transition-delay);
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
