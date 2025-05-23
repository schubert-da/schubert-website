<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import ProcessSection from '$lib/components/Process/ProcessSection.svelte';
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

<Scroller
	top={0.1}
	threshold={0.35}
	query="div.foreground-section"
	bind:index
	bind:offset
	bind:progress
>
	<div slot="background"></div>

	<div slot="foreground">
		<div
			class="foreground-section intro-section-container"
			bind:clientHeight={$sectionHeights.home}
		>
			<HeroSection></HeroSection>
		</div>

		<div class="foreground-section process-section-container">
			<ProcessSection></ProcessSection>
		</div>

		<div
			class="foreground-section works-section-container"
			bind:clientHeight={$sectionHeights.works}
		>
			<WorkSection></WorkSection>
		</div>
	</div>
</Scroller>

<Footer></Footer>
