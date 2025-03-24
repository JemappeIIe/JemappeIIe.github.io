<script lang="ts">
    import {base} from "$app/paths";
    import {onMount} from "svelte";   
    let colorSchemeDisplayRepresentation: string = $state("");
    onMount(() => {
        if (!localStorage.getItem("color-scheme")) {
            const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setColorScheme(userPrefersDarkMode ? "dark" : "light");
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
            colorSchemeDisplayRepresentation = colorScheme === "light" ? "🌄": "🌅";
        }
    }

    function toggleColorScheme() {
        const colorScheme = localStorage.getItem("color-scheme") === "light" ? "dark" : "light";
        setColorScheme(colorScheme);
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
            <button class="colorSchemeToggleButton" onclick={toggleColorScheme}>{colorSchemeDisplayRepresentation}</button>
        </ul>
    </nav>
</header>

<style>
    header {
        text-align: center;
        justify-content: center;
        background-color: var(--nav-color);
        padding: 20px 0px;
        box-shadow: 0px 10px 25px 0px #00000080;
    }
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 20px;
    }
    h1 {
        margin: 0;
        a {
            text-decoration: underline;
        }
    }
    a {
        text-decoration: none;
    }
</style>