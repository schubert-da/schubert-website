<script>
	import '../styles/styles.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { navbarHeight } from '$lib/utils/stores';
	import PaperTexture from '$lib/assets/images/paper-texture.jpeg';
	import Seo from '$lib/components/SEO/SEO.svelte';

	let { children } = $props();

	let scrollValue = $state(0);
	let lastScrollValue = $state(0);
	let showNav = $state(true);

	function handleScroll() {
		const threshold = $navbarHeight - 20; // Set this to the desired threshold in pixels

		// Check if the scroll position is near the top of the page
		if (scrollValue <= threshold) {
			showNav = true;
		} else {
			if (scrollValue >= lastScrollValue) {
				// hide on scroll down
				showNav = false;
			} else {
				// when they scroll up show it again
				showNav = true;
			}
		}

		lastScrollValue = scrollValue;
	}
</script>

<Seo></Seo>

<svelte:window on:scroll={handleScroll} bind:scrollY={scrollValue} />

<Navbar {showNav}></Navbar>

<main style="--card-texture: url({PaperTexture})">
	{@render children()}
</main>
