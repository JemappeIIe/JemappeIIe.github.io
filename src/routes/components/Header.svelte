<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import lightIcon from '$lib/icons/light.svg?raw';
	import darkIcon from '$lib/icons/dark.svg?raw';
	let themeIcon: string = $state('');
	onMount(() => {
		const currentTheme = localStorage.getItem('theme');
		if (currentTheme) {
			setTheme(currentTheme);
		}
	});

	function setTheme(theme: string) {
		if (theme == 'light' || theme == 'dark') {
			document.documentElement.dataset.theme = theme;
			localStorage.setItem('theme', theme);
			themeIcon = theme == 'light' ? darkIcon : lightIcon;
		}
	}

	function toggleTheme() {
		const theme = localStorage.getItem('theme') == 'light' ? 'dark' : 'light';
		setTheme(theme);
	}
</script>

<header class="flex w-full justify-between bg-stone-100 p-10 dark:bg-stone-900">
	<nav class="flex h-fit items-baseline gap-10">
		<a
			href="{base}/"
			class="font-bald font-inria-serif text-2xl text-stone-800 duration-200 ease-in hover:cursor-pointer dark:text-stone-100"
			>Home</a
		>
		<ul
			class="flex gap-10 [&>*+*]:border-l [&>*+*]:border-l-stone-300 [&>*+*]:pl-10 [&>*+*]:dark:border-l-stone-600"
		>
			<li>
				<a
					href="{base}/"
					class="font-inria-serif text-stone-800 duration-200 ease-in hover:cursor-pointer hover:text-indigo-600 dark:text-stone-100 dark:hover:text-amber-300"
					>About</a
				>
			</li>
			<li>
				<a
					href="{base}/"
					class="font-inria-serif text-stone-800 duration-200 ease-in hover:cursor-pointer hover:text-indigo-600 dark:text-stone-100 dark:hover:text-amber-300"
					>Projects</a
				>
			</li>
			<li>
				<a
					href="{base}/"
					class="font-inria-serif text-stone-800 duration-200 ease-in hover:cursor-pointer hover:text-indigo-600 dark:text-stone-100 dark:hover:text-amber-300"
					>Contact</a
				>
			</li>
		</ul>
	</nav>
	<button onclick={toggleTheme}>{@html themeIcon}</button>
</header>
