<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projects = [
		{
			title: 'LLMs.txt generator',
			url: 'https://github.com/Blimeo/llms-txt-generator',
			description: 'A tool to generate and maintain llms.txt files for static sites with automatic change detection and webhook support.',
			built_with: 'Next, Python, Supabase OAuth+Postgres+object storage, Google Cloud Tasks + Cloud Run'
		},
		{
			title: 'fitme',
			url: 'https://github.com/Blimeo/fitme',
			description: "A social network allowing users to share and discover fashion inspiration.",
			built_with: "React, Redux, Flask, MongoDB, S3, Detectron2 for object segmentation"
		},
		{
			title: 'Sketch Completion',
			url: 'https://github.com/sketch-completion-web/',
			description: 'Webapp that converts user-drawn sketches into realistic (ish) images using a GAN.',
			built_with: 'React.js canvas, Flask, PyTorch (for GAN)'
		}
	];
</script>

<svelte:head>
	<title>Projects - Matthew Ye</title>
	<meta name="description" content="Matthew Ye's projects" />
</svelte:head>

<div class="bg-slate-50 min-h-screen">
	<main class="mx-auto max-w-screen-lg px-3 py-6">
		<Header currentPage="projects" />
		<div class="grid grid-cols-1 gap-2 px-2 sm:px-4 py-2.5">
			{#each projects as project}
				<ProjectCard 
					title={project.title}
					url={project.url}
					description={project.description}
					built_with={project.built_with}
				/>
			{/each}
		</div>
	</main>
</div>


