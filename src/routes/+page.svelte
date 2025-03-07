<script>
	import HeroSection from '$lib/components/SectionCards/HomeSection/HeroSection.svelte';
	import IntroSection from '$lib/components/SectionCards/HomeSection/IntroSection.svelte';
	import { scrollerParams } from '$lib/utils/stores';
	import Scroller from '@sveltejs/svelte-scroller';

	let index, offset, progress;
	$: if (index || offset || progress) {
		scrollerParams.set({ index, offset, progress });
	}

	$: console.log('$scrollerParams', $scrollerParams);
</script>

<Scroller top={0.1} threshold={0.35} bind:index bind:offset bind:progress>
	<div slot="background"></div>

	<div slot="foreground">
		<HeroSection></HeroSection>
		<IntroSection></IntroSection>
	</div>
</Scroller>

<main></main>

<style>
</style>
