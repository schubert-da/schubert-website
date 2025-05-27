<script>
	import TileBlank from '$lib/assets/images/wave-playground/tile-blank.jpg';
	import TileDeadend from '$lib/assets/images/wave-playground/tile-deadend.jpg';
	import TileTJunction from '$lib/assets/images/wave-playground/tile-tjunction.jpg';
	import TileCurve from '$lib/assets/images/wave-playground/tile-curve.jpg';

	let gridWidth = $state(500);
	let tileWidth = $derived(gridWidth / 5 - 0.01);

	const tiles = [TileBlank, TileDeadend, TileTJunction, TileCurve];
	$inspect(gridWidth, tileWidth);
</script>

<div class="game-grid" bind:clientWidth={gridWidth}>
	{#each Array(15).fill() as _, i}
		{@const tile = tiles[Math.floor(Math.random() * tiles.length)]}
		{@const tileRotation = Math.floor(Math.random() * 4) * 90}
		<div class="tile" style:--tile-width="{tileWidth}px">
			<img
				src={tile}
				alt="tile"
				style:width="{tileWidth}px"
				style="transform: rotate({tileRotation}deg);"
			/>
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

		.tile {
			width: var(--tile-width);
			height: var(--tile-width);
			border: 1px solid #666;
		}
	}
</style>
