<script>
	import CareerLayer1 from '$lib/assets/images/career-layer-1.png';
	import CareerLayer2 from '$lib/assets/images/career-layer-2.png';
	import CareerLayer3 from '$lib/assets/images/career-layer-3.png';
	import CareerBackground from '$lib/assets/images/career-layer-bg.png';

	import { scrollerParams } from '$lib/utils/stores';

	export let layerConfig = [
		{ src: CareerLayer1, order: 1, speed: 0.4 },
		{ src: CareerLayer2, order: 2, speed: 0.3 },
		{ src: CareerLayer3, order: 3, speed: 0.25 }
	];
	export const cardIndex = 0;

	function calculateYTranslate(scrollerParams, speed) {
		let OFFSET = 0.4;

		if (scrollerParams.index !== cardIndex) {
			return (OFFSET - 1) * speed * -100;
		}

		return (OFFSET - scrollerParams.offset) * speed * -100;
	}
</script>

<div class="scene-container">
	<img class="placeholder-image" src={CareerBackground} alt="Layer" />
	{#each layerConfig as { src, order, speed }, i}
		<div
			class="layer"
			style="--order: {order}; --yTranslate: {calculateYTranslate($scrollerParams, speed)}%;"
		>
			<img {src} alt="Layer {i + 1}" />
		</div>
	{/each}
</div>

<style lang="scss">
	.scene-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
		background-color: var(--palette-yellow-muted);
		overflow: hidden;

		.placeholder-image {
			width: 100%;
			height: auto;
		}

		.layer {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: var(--order);

			width: 100%;
			height: 100%;
			transform: translate(-50%, calc(-50% + var(--yTranslate)));

			img {
				width: 100%;
				height: auto;
			}
		}
	}
</style>
