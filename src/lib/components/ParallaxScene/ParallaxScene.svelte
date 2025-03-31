<script>
	import StudyWorkImage from '$lib/assets/images/life-viz/study-work.png';
	import ArtLearningImage from '$lib/assets/images/life-viz/art-learning.png';
	import DatavizLearningImage from '$lib/assets/images/life-viz/dataviz.png';
	import DatavizDevelopmentImage from '$lib/assets/images/life-viz/dataviz-development.png';

	import StudyWorkImageViz from '$lib/assets/images/life-viz/study-work-viz.png';
	import ArtLearningImageViz from '$lib/assets/images/life-viz/art-learning-viz.png';
	import DatavizLearningImageViz from '$lib/assets/images/life-viz/dataviz-viz.png';
	import DatavizDevelopmentImageViz from '$lib/assets/images/life-viz/dataviz-development-viz.png';
	import CareerBackground from '$lib/assets/images/life-viz/career-layer-bg.png';

	import { scrollerParams } from '$lib/utils/stores';

	export let layerConfig = [
		{ src: StudyWorkImage, chartSrc: StudyWorkImageViz, order: 1, speed: 0.25 },
		{ src: ArtLearningImage, chartSrc: ArtLearningImageViz, order: 2, speed: 0.3 },
		{ src: DatavizLearningImage, chartSrc: DatavizLearningImageViz, order: 3, speed: 0.35 },
		{ src: DatavizDevelopmentImage, chartSrc: DatavizDevelopmentImageViz, order: 4, speed: 0.3 }
	];
	export const cardIndex = 0;

	function calculateYTranslate(scrollerParams, speed) {
		let OFFSET = 0.3;

		if (scrollerParams.index !== cardIndex) {
			return (OFFSET - 1) * speed * -100;
		}

		return (OFFSET - scrollerParams.offset) * speed * -100;
	}
</script>

<div class="scene-container">
	<img class="placeholder-image" src={CareerBackground} alt="Layer" />
	{#each layerConfig as { src, chartSrc, order, speed }, i}
		<div
			class="layer"
			style="--order: {order}; --yTranslate: {calculateYTranslate($scrollerParams, speed)}%;"
		>
			<img class="art-image" {src} alt="Layer {i + 1}" />
			<img class="chart-image" src={chartSrc} alt="Layer {i + 1}" />
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
			opacity: 0;
		}

		.layer {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: var(--order);
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			height: 100%;
			transform: translate(-50%, calc(-50% + var(--yTranslate)));

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;

				opacity: 1;
			}

			img.chart-image {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				z-index: 1;
				opacity: 0;
			}
		}
	}
</style>
