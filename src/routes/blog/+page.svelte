<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import { formatDate } from "$lib/utils";
	import * as config from "$lib/config";
	let { data } = $props();
	import TravelMap from "$lib/components/TravelMap.svelte";
	import { slide } from "svelte/transition";

	let showMap = $state(false); 
</script>

<svelte:head>
	<title>Blog - Matthew Ye</title>
	<meta name="description" content="Matthew Ye's blog" />
</svelte:head>

<div class="min-h-screen">
	<main class="mx-auto max-w-screen-lg px-3 py-6">
		<Header currentPage="blog" />
		<div class="px-2 sm:px-4 py-2.5">
			<!-- The Toggle Link -->
			<button
				onclick={() => (showMap = !showMap)}
				class="text-sm text-gray-500 hover:text-gray-800 underline mb-4 cursor-pointer focus:outline-none"
			>
				({showMap ? "close" : "open"} map)
			</button>
			{#if showMap}
				<div
					transition:slide={{ duration: 300 }}
					class="h-56 sm:h-80 w-full mb-6"
				>
					<TravelMap posts={data.posts} />
				</div>
			{/if}
			<ul class="list-disc list-inside space-y-1">
				{#each data.posts as post}
					<li>
						<a
							class="text-sky-400 hover:underline"
							href={"/blog/" + post.slug}>{post.title}</a
						>
					
						-
						<span class="text-gray-500 text-sm"
							>{formatDate(post.date)}</span
						>
						{#each post.categories as category}
							<a href={"/blog/category/" + category}>
								<span
									class="rounded-full bg-gray-200 text-gray-500 text-sm px-2 py-1 mx-1"
									>&num;{category}</span
								>
							</a>
						{/each}
					</li>
				{/each}
			</ul>
		</div>
	</main>
</div>
