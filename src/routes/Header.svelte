<script lang="ts">
    import {base} from "$app/paths";
    import {onMount} from "svelte";
    
    onMount(() => {
        if (!localStorage.getItem("color-scheme")) {
            const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            localStorage.setItem("color-scheme", userPrefersDarkMode ? "dark" : "light");
        } else {
            const currentColorScheme = localStorage.getItem("color-scheme");
            if (currentColorScheme) {
                setColorScheme(currentColorScheme);
            }
        }
    });

    function setColorScheme(colorScheme : string) {
        if (colorScheme == "light" || colorScheme == "dark") {
            document.documentElement.dataset.colorScheme = colorScheme;
            localStorage.setItem("color-scheme", colorScheme);
        }
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
    <button onclick={() => setColorScheme("dark")}>Dark</button>
    <button onclick={() => setColorScheme("light")}>Light</button>
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