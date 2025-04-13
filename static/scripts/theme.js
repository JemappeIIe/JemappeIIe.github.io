const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
	document.documentElement.dataset.theme = savedTheme;
} else {
	const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	document.documentElement.dataset.theme = preferedTheme;
	localStorage.setItem('theme', preferedTheme);
}
