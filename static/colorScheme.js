const savedColorScheme = localStorage.getItem("color-scheme");
if (savedColorScheme) {
    document.documentElement.dataset.colorScheme = savedColorScheme;
} else {
	const userPrefersDarkColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const colorScheme = userPrefersDarkColorScheme ? "dark" : "light";
    document.documentElement.dataset.colorScheme = colorScheme;
	localStorage.setItem("color-scheme", colorScheme);
}	