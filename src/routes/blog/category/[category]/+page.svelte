<script lang="ts">
	import Header from "$lib/components/Header.svelte";
    import { page } from '$app/state'

	import { formatDate } from "$lib/utils";
	import * as config from "$lib/config";
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Matthew Ye</title>
	<meta name="description" content="Matthew Ye's blog" />
</svelte:head>

<div class="min-h-screen">
	<main class="mx-auto max-w-screen-lg px-3 py-6">
		<Header currentPage="blog" />
		<div class="px-2 sm:px-4 py-2.5">
            <h1 class="text-2xl font-bold mb-2">posts tagged: #{page.params.category}</h1>
            <div class="mb-2"><a href="/blog" class="text-sky-400 text-xs hover:underline">(remove tag filter)</a></div>
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
