<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import homeIcon from '$lib/icons/home.svg?raw';
	import lightIcon from '$lib/icons/light_mode.svg?raw';
	import darkIcon from '$lib/icons/dark_mode.svg?raw';
	let themeIcon: string = '';
	import openMenuIcon from '$lib/icons/menu.svg?raw';
	import closeMenuIcon from '$lib/icons/close.svg?raw';
	let menuIcon: string = openMenuIcon;
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

	function toggleDropdownMenu() {
		const dropdownMenu = document.getElementById('dropdown-menu') as HTMLElement;
		const isOpen = dropdownMenu.classList.contains('flex');
		if (isOpen) {
			// Close
			dropdownMenu.classList.remove('flex');
			dropdownMenu.classList.add('hidden');
			menuIcon = openMenuIcon;
		} else {
			// Open
			dropdownMenu.classList.remove('hidden');
			dropdownMenu.classList.add('flex');
			menuIcon = closeMenuIcon;
		}
	}

	function closeDropdownMenu() {
		const dropdownMenu = document.getElementById('dropdown-menu') as HTMLElement;
		dropdownMenu.classList.remove('flex');
		dropdownMenu.classList.add('hidden');
		menuIcon = openMenuIcon;
	}
</script>

<!-- Header -->
<header class="flex flex-col items-center">
	<!-- Navbar -->
	<nav
		class="relative flex w-full items-center justify-between bg-neutral-100 p-4 dark:bg-neutral-900"
	>
		<a aria-label="Home" href="{base}/" class="icon-box">
			{@html homeIcon}
		</a>
		<button onclick={toggleDropdownMenu} aria-label="Toggle menu" class="icon-box lg:hidden">
			{@html menuIcon}
		</button>
		<ul class="hidden lg:flex lg:w-auto lg:items-center lg:gap-8">
			<li>
				<a
					class="rounded-full px-8 py-4 text-center font-semibold text-neutral-800 hover:bg-neutral-200 hover:text-red-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-indigo-500"
					href="{base}/">Home</a
				>
			</li>
			<li>
				<a
					class="rounded-full px-8 py-4 text-center font-semibold text-neutral-800 hover:bg-neutral-200 hover:text-red-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-indigo-500"
					href="{base}/#about">About</a
				>
			</li>
			<li>
				<a
					class="rounded-full px-8 py-4 text-center font-semibold text-neutral-800 hover:bg-neutral-200 hover:text-red-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-indigo-500"
					href="{base}/#projects">Projects</a
				>
			</li>
			<li>
				<a
					class="rounded-full px-8 py-4 text-center font-semibold text-neutral-800 hover:bg-neutral-200 hover:text-red-500 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-indigo-500"
					href="{base}/#contact">Contact</a
				>
			</li>
		</ul>
		<button onclick={toggleTheme} aria-label="Toggle theme" class="icon-box"
			>{@html themeIcon}</button
		>
	</nav>
	<!-- Dropdown menu -->
	<ul id="dropdown-menu" class="hidden w-full flex-col gap-4 p-4 lg:hidden">
		<li>
			<a class="dropdown-menu-item" href="{base}/" onclick={closeDropdownMenu}>Home</a>
		</li>
		<li>
			<a class="dropdown-menu-item" href="{base}/#about" onclick={closeDropdownMenu}>About</a>
		</li>
		<li>
			<a class="dropdown-menu-item" href="{base}/#projects" onclick={closeDropdownMenu}>Projects</a>
		</li>
		<li>
			<a class="dropdown-menu-item" href="{base}/#contact" onclick={closeDropdownMenu}>Contact</a>
		</li>
	</ul>
</header>
