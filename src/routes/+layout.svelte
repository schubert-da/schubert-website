<script>
	import '../styles/styles.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar></Navbar>

{@render children()}
