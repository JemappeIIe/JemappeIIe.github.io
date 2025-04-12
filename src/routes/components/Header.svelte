<script lang="ts">
    import {base} from '$app/paths';
</script>

<header class="w-full h-fit p-8">
    <nav class="flex justify-between">
        <a href="{base}/" class="nav-element">Home</a>
        <ul class="flex gap-8 m-auto">
            <li><a href="{base}/" class="nav-element">About</a></li>
            <div class="nav-break"></div>
            <li><a href="{base}/" class="nav-element">Projects</a></li>
            <div class="nav-break"></div>
            <li><a href="{base}/" class="nav-element">Contact</a></li>
        </ul>
        <button class="nav-element">Mode</button>
    </nav>
</header>
