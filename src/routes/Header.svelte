<script lang="ts">
    import {base} from "$app/paths";
    import {onMount} from "svelte";
    onMount(() => {
        if (localStorage.getItem("theme") === null) {
            const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            localStorage.setItem("theme", userPrefersDarkMode ? "dark" : "light");
        }
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme);
        }
    });

    function setTheme(theme : string) {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }
</script>

<header>
    <h1><a href={base + "/"}>JemappeIIe</a></h1>
    <p>Description...</p>
    <nav>
        <ul>
            <li><a href={base + "/"}>A</a></li>
            <li><a href={base + "/"}>B</a></li>
            <li><a href={base + "/"}>C</a></li>
        </ul>
    </nav>
    <button onclick={() => setTheme("dark")}>Dark</button>
    <button onclick={() => setTheme("light")}>Light</button>
</header>

<style>
    header {
        text-align: center;
        padding: 10px 0px;
        background-color: gray;
    }
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0px;
        gap: 10px;
    }
</style>