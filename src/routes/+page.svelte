<script>
	import { base } from '$app/paths';
	import gitHubIcon from '$lib/icons/github.svg?raw';
	import mailIcon from '$lib/icons/mail.svg?raw';
</script>

<div class="flex max-w-140 flex-col gap-8">
	<div id="about" class="flex h-fit rounded-2xl bg-neutral-200 shadow-lg dark:bg-neutral-800">
		<img
			alt="Me"
			src="{base}/images/about/upper.png"
			class="max-w-1/2 rounded-l-2xl object-cover"
		/>
		<div class="flex flex-col p-4">
			<h1 class="mb-4 font-bold text-red-500 dark:text-indigo-500">About me</h1>
			<p
				class="h-full rounded-2xl bg-neutral-100 p-4 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
			>
				I write code that works and sometimes looks nice. Most of my projects revolve around the
				web, but I've dabbled in other areas too.
			</p>
		</div>
	</div>
	<div
		id="projects"
		class="flex flex-col gap-4 rounded-2xl bg-neutral-200 p-4 shadow-lg dark:bg-neutral-800"
	>
		<h1 class="font-bold text-red-500 dark:text-indigo-500">Projects</h1>
		<div id="project-1" class="rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-900">
			<h2 class="mb-4 font-bold text-red-500 dark:text-indigo-500">This portfolio 🍀</h2>
			<p class="text-neutral-800 dark:text-neutral-100">
				Built with SvelteKit and Tailwind; hosted on GitHub Pages.
			</p>
		</div>
	</div>
	<div
		id="contact"
		class="flex flex-col gap-4 rounded-2xl bg-neutral-200 p-4 shadow-lg dark:bg-neutral-800"
	>
		<h1 class="font-bold text-red-500 dark:text-indigo-500">Contact</h1>
		<div
			class="flex items-center gap-4 rounded-2xl bg-neutral-100 p-4 text-neutral-800 underline dark:bg-neutral-900 dark:text-neutral-100 [&>svg]:size-15"
		>
			{@html gitHubIcon}
			https://github.com/JemappeIIe
		</div>
		<div
			class="flex items-center gap-4 rounded-2xl bg-neutral-100 p-4 text-neutral-800 underline dark:bg-neutral-900 dark:text-neutral-100 [&>svg]:size-15"
		>
			{@html mailIcon}
			jemappeiie.contact@gmail.com
		</div>
	</div>
</div>
