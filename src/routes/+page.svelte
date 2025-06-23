<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import ProcessSection from '$lib/components/Process/ProcessSection.svelte';
	import HeroSection from '$lib/components/SectionCards/HomeSection/HeroSection.svelte';
	import IntroSection from '$lib/components/SectionCards/HomeSection/IntroSection.svelte';
	import WorkSection from '$lib/components/SectionCards/WorkSection/WorkSection.svelte';
	import { scrollerParams, navSectionsConfig } from '$lib/utils/stores';
	import Scroller from '@sveltejs/svelte-scroller';
	import { onMount } from 'svelte';

	let index = $state(null);
	let offset = $state(null);
	let progress = $state(null);

	$effect(() => {
		scrollerParams.set({ index, offset, progress });
	});

	let heroSectionHeight = $state(0);
	let processSectionHeight = $state(0);
	let worksSectionHeight = $state(0);

	onMount(() => {
		let currentNavSections = $navSectionsConfig.slice();

		let homeSection = currentNavSections.find((section) => section.name === 'Home');
		homeSection.sections = [
			{
				name: 'intro',
				href: '#intro',
				width: heroSectionHeight,
				color: 'var(--color-background)'
			},
			{
				name: 'process',
				href: '#process',
				width: processSectionHeight,
				color: 'var(--color-background)'
			}
		];

		let worksSection = currentNavSections.find((section) => section.name === 'Works');
		worksSection.sections = [
			{
				name: 'featured',
				href: '#works',
				width: worksSectionHeight,
				color: 'var(--color-background)'
			}
		];

		navSectionsConfig.set(currentNavSections);
	});
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
			id="intro"
			class="foreground-section intro-section-container"
			bind:clientHeight={heroSectionHeight}
		>
			<HeroSection></HeroSection>
		</div>

		<div
			id="process"
			class="foreground-section process-section-container"
			bind:clientHeight={processSectionHeight}
		>
			<ProcessSection></ProcessSection>
		</div>

		<div
			id="works"
			class="foreground-section works-section-container"
			bind:clientHeight={worksSectionHeight}
		>
			<WorkSection></WorkSection>
		</div>
	</div>
</Scroller>

<Footer></Footer>
