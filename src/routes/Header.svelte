<script>
    import {base} from "$app/paths";
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