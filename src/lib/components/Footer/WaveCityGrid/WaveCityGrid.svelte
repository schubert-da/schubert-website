<script>
	import TileBlank from '$lib/assets/images/wave-playground/tile-blank.jpg';
	import TileDeadend from '$lib/assets/images/wave-playground/tile-deadend.jpg';
	import TileTJunction from '$lib/assets/images/wave-playground/tile-tjunction.jpg';
	import TileCurve from '$lib/assets/images/wave-playground/tile-curve.jpg';

	import { TILE_SET } from './tileSet';
	import { collapseTiles, initTiles } from './WaveFunction';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const NUM_ROWS = 3;
	const NUM_COLS = 5;
	const DELAY = 0.5;

	let gridWidth = $state(500);
	let tileWidth = $derived(gridWidth ? Math.floor(gridWidth / NUM_COLS) : 100);

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
				delay: DELAY * tile.order
			});
		});

		currentRow = 0;
		await animateNextTiles(currentRow);

		const interval = setInterval(
			async () => {
				currentRow += 2;
				animateNextTiles(currentRow);
			},
			DELAY * (NUM_COLS * 2) * 1000 + DELAY * 1000
		);

		return () => clearInterval(interval);
	});

	async function animateNextTiles(currentRow) {
		const addedDelay = currentRow === 0 ? DELAY * 5 : 0;

		console.log('Animating next tiles for row:', currentRow);
		const timeline = gsap.timeline({ paused: true });

		tiles = await initTiles(tiles, NUM_ROWS, NUM_COLS, 2);
		tiles = await collapseTiles(tiles, currentRow, NUM_ROWS, NUM_COLS);
		console.log('Tiles after collapse:', tiles);
		let currentTiles = await tiles.slice((currentRow + 1) * NUM_COLS, (currentRow + 3) * NUM_COLS);
		console.log('currentTiles:', currentTiles);

		currentTiles
			.slice()
			.sort((a, b) => a.order - b.order)
			.forEach((tile, index) => {
				const tileElement = tilesList[`${(currentRow + 1) * NUM_COLS + index}`];
				timeline.to(
					tileElement,
					{
						opacity: 1,
						duration: 0.5,
						ease: 'power1.inOut',
						delay: DELAY
					},
					computeDelay(currentRow, tile.order, addedDelay)
				);
			});

		timeline.to(
			'.game-grid',
			{
				y: `-=${tileWidth * 2}px`,
				duration: 0.5,
				ease: 'power1.inOut',
				delay: DELAY
			},
			'+=0.1'
		);

		timeline.play();
	}

	function computeDelay(currentRow, order, addedDelay = 0) {
		if (currentRow === 0 && order === 0) {
			return `+=${DELAY * 5}`;
		} else if (order === 0) {
			return `+=${DELAY}`;
		} else {
			return '<';
		}
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
						bind:this={tilesList[rowIndex * NUM_COLS + colIndex]}
					>
						{#if tile?.image}
							<img
								style:--tile-rotation="{tile?.image?.rotation}deg"
								class="tile-image"
								src="/tiles/{tile?.image?.paths}"
								alt="tile"
							/>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.grid-window {
		position: relative;
		max-width: 1100px;
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

		max-width: 1100px;

		.row {
			display: flex;
			flex-direction: row;
		}

		.tile {
			width: var(--tile-width);
			height: var(--tile-width);
			border: 1px solid #666;
			opacity: 0;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;

				transform: rotate(var(--tile-rotation));
				opacity: 1;
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
