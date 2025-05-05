<script>
	import { base } from '$app/paths';
	import gitHubIcon from '$lib/icons/github.svg?raw';
	import mailIcon from '$lib/icons/mail.svg?raw';
</script>

<div class="flex flex-col gap-10 lg:w-1/2">
	<div id="about" class="content-box border-1 border-black dark:border-white">
		<img
			alt="Me"
			src="{base}/images/about/upper.png"
			class="w-50 max-w-1/3 border-r-1 border-black object-cover dark:border-white"
		/>
		<div class="flex flex-col gap-5 py-5 pr-5">
			<h1 class="font-bold text-black dark:text-white">About me</h1>
			<p class="text-black dark:text-white">
				I write code that works and sometimes looks nice. Most of my projects revolve around the
				web, but I've dabbled in other areas too.
			</p>
		</div>
	</div>
	<div id="projects" class="content-box flex-col border-1 border-black p-5 dark:border-white">
		<h1 class="font-bold text-black dark:text-white">Projects</h1>
		<div id="project-1" class="border-1 border-black p-5 dark:border-white">
			<h2 class="mb-5 font-bold text-black dark:text-white">This portfolio 🍀</h2>
			<p class="text-black dark:text-white">
				Built with SvelteKit and Tailwind; hosted on GitHub Pages.
			</p>
		</div>
	</div>
	<div id="contact" class="content-box flex-col border-1 border-black p-5 dark:border-white">
		<h1 class="font-bold text-black dark:text-white">Contact</h1>
		<div
			class="flex items-center gap-5 border-1 border-black p-5 text-neutral-800 underline dark:border-white dark:text-white [&>svg]:size-15"
		>
			{@html gitHubIcon}
			https://github.com/JemappeIIe
		</div>
		<div
			class="flex items-center gap-5 border-1 border-black p-5 text-neutral-800 underline dark:border-white dark:text-white [&>svg]:size-15"
		>
			{@html mailIcon}
			jemappeiie.contact@gmail.com
		</div>
	</div>
</div>
