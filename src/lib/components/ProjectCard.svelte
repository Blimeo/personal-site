<script lang="ts">
	export let title: string;
	export let url: string;
	export let description: string;
	export let built_with: string;
</script>

<div class="bg-white dark:bg-gray-800 py-2 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col p-2 sm:p-5">
	<p>
		<a
			class="text-sky-400 hover:underline"
			target="_blank"
			href={url}
		>{title}</a>: {description}
	</p>
	<p class="text-xs mt-2">
		Built with: {built_with}
	</p>
</div>

