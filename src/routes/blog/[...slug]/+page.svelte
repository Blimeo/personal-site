<script lang="ts">
	import { formatDate } from '$lib/utils'
    import Header from '$lib/components/Header.svelte';
	let { data } = $props()
</script>

<div class="min-h-screen">
    <main class="mx-auto max-w-screen-lg px-3 py-6">
        <Header currentPage="blog" />
        <div class="px-2 sm:px-4 py-2.5">
            <article>
                <hgroup>
                    <h1 class="text-2xl font-bold">{data.meta.title}</h1>
                    <p class="text-gray-500 text-sm py-1">{formatDate(data.meta.date)}</p>
                </hgroup>
            
                <div class="flex flex-wrap">
                    {#each data.meta.categories as category}
                        <a href={'/blog/category/' + category}>
								<span class="rounded-full bg-gray-200 text-gray-500 text-sm px-2 py-1 mx-1">&num;{category}</span>
							</a>
                    {/each}
                </div>

                <div><a href="/blog" class="text-sky-400 text-xs hover:underline">(back to posts)</a></div>
            
                <div class="prose mt-4 max-w-none">
                    <data.content />
                </div>
            </article>
        </div>
    </main>
</div>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>