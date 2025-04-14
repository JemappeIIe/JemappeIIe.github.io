<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import lightIcon from '$lib/icons/light_mode.svg?raw';
	import darkIcon from '$lib/icons/dark_mode.svg?raw';
	import menuIcon from '$lib/icons/menu.svg?raw';
	import homeIcon from '$lib/icons/home.svg?raw';
	import closeIcon from '$lib/icons/close.svg?raw';
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
		setTheme(localStorage.getItem('theme') == 'light' ? 'dark' : 'light');
	}

	function openMenu() {
		document.querySelector('#navbar-menu')?.classList.remove('hidden');
	}

	function closeMenu() {
		document.querySelector('#navbar-menu')?.classList.add('hidden');
	}
</script>

<!-- Navbar -->
<nav class="relative flex items-center justify-between bg-neutral-100 p-4 dark:bg-neutral-900">
	<a aria-label="Home" href="{base}/" class="icon-box">
		{@html homeIcon}
	</a>
	<div class="lg:hidden">
		<button onclick={openMenu} aria-label="Open menu" class="icon-box">
			{@html menuIcon}
		</button>
	</div>
	<ul class="hidden lg:flex lg:w-auto lg:items-center lg:gap-8">
		<li>
			<a class="nav-item" href="{base}/">Home</a>
		</li>
		<li>
			<a class="nav-item" href="{base}/">About</a>
		</li>
		<li>
			<a class="nav-item" href="{base}/">Projects</a>
		</li>
		<li>
			<a class="nav-item" href="{base}/">Contact</a>
		</li>
	</ul>
	<button onclick={toggleTheme} aria-label="Toggle theme" class="icon-box">{@html themeIcon}</button
	>
</nav>
<!-- Dropdown menu -->
<div id="navbar-menu" class="hidden">
	<nav
		class="fixed top-0 bottom-0 left-0 flex w-full flex-col bg-neutral-100 p-4 dark:bg-neutral-900"
	>
		<div class="mb-5 flex items-center justify-between">
			<a aria-label="Home" href="{base}/" class="icon-box">
				{@html homeIcon}
			</a>
			<button onclick={closeMenu} aria-label="Close menu" class="icon-box">
				{@html closeIcon}
			</button>
		</div>
		<div>
			<ul class="flex flex-col gap-y-5">
				<li>
					<a class="nav-item" href="{base}/">Home</a>
				</li>
				<li>
					<a class="nav-item" href="{base}/">About</a>
				</li>
				<li>
					<a class="nav-item" href="{base}/">Projects</a>
				</li>
				<li>
					<a class="nav-item" href="{base}/">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
