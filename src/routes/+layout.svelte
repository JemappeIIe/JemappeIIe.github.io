<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	let { children } = $props();
	import '../app.css';
</script>

<Header />

{@render children()}

<Footer />
