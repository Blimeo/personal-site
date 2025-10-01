<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projects = [
		{
			title: 'fitme',
			url: 'https://github.com/Blimeo/fitme',
			description: "A social network allowing users to share and discover fashion inspiration, built using React/Redux, Flask, MongoDB, and S3. Uses Facebook's Detectron2 object segmentation model to identify clothing items in users' uploaded images."
		},
		{
			title: 'Sketch Completion',
			url: 'https://blimeo.github.io/sketch-completion-web/',
			description: 'Webapp that converts user-drawn sketches into realistic (ish) images using a generative adversarial network (GAN) model trained on the CIFAR-10 dataset. Live demo uses React.js canvas and Flask backend.'
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
		<div class="grid grid-cols-1 gap-4 px-2 sm:px-4 py-2.5">
			{#each projects as project}
				<ProjectCard 
					title={project.title}
					url={project.url}
					description={project.description}
				/>
			{/each}
		</div>
	</main>
</div>


