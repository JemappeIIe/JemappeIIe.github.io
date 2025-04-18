<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	let { children } = $props();
	import '../app.css';
</script>

<Header />

<div class="m-auto mb-8 flex max-w-9/10 justify-center">
	{@render children()}
</div>

<Footer />
