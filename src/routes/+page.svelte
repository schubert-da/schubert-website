<script>
	import ProcessCarousel from '$lib/components/Process/ProcessCarousel.svelte';
	import HeroSection from '$lib/components/SectionCards/HomeSection/HeroSection.svelte';
	import IntroSection from '$lib/components/SectionCards/HomeSection/IntroSection.svelte';
	import WorkSection from '$lib/components/SectionCards/WorkSection/WorkSection.svelte';
	import FeaturedWork from '$lib/components/Works/FeaturedWork.svelte';
	import { scrollerParams, sectionHeights } from '$lib/utils/stores';
	import Scroller from '@sveltejs/svelte-scroller';
	let index, offset, progress;
	$: if (index || offset || progress) {
		scrollerParams.set({ index, offset, progress });
	}
</script>

<Scroller top={0.1} threshold={0.35} bind:index bind:offset bind:progress>
	<div slot="background"></div>

	<div slot="foreground">
		<div class="intro-section-container" bind:clientHeight={$sectionHeights.home}>
			<HeroSection></HeroSection>
			<ProcessCarousel></ProcessCarousel>
			<!-- <FeaturedWork></FeaturedWork> -->
		</div>

		<div class="works-section-container" bind:clientHeight={$sectionHeights.works}>
			<WorkSection></WorkSection>
		</div>
	</div>
</Scroller>
