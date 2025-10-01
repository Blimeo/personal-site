<script lang="ts">
	export let title: string;
	export let url: string;
	export let description: string;
</script>

<div class="bg-white dark:bg-gray-800 py-4 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex flex-col p-4 sm:p-6">
	<p>
		<a
			class="text-sky-400 hover:underline"
			target="_blank"
			href={url}
		>{title}</a>: {description}
	</p>
</div>

