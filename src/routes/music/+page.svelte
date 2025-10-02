<script lang="ts">
	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<title>Music - Matthew Ye</title>
	<meta name="description" content="Matthew Ye's music" />
</svelte:head>

<div class="bg-slate-50 min-h-screen">
	<main class="mx-auto max-w-screen-lg px-3 py-6">
		<Header currentPage="music" />
		<div class="px-2 sm:px-4 py-2.5">
			<div class="text-xl font-bold">music I like</div>
			<div class="px-2 sm:px-4 py-2.5">
				<p class="text-sm mb-2">
					I spend too much time discovering music on <a
						target="_blank"
						class="text-sky-400 hover:underline"
						href="https://rateyourmusic.com/~blimeo">RYM</a
					> and love good harmonies and interesting rhythms and guitars.
					Some particularly formative works include:
				</p>
				<ul class="list-disc list-inside text-sm">
					<li>Cecil Taylor - Conquistador!</li>
					<li>Candy Claws - Ceres & Calypso in the Deep Time</li>
					<li>Novos Baianos - Acabou chorare</li>
					<li>Lamp - 恋人へ</li>
					<li><a href="https://soundcloud.com/coolgirl9/coolgirl-winter-solstice" target="_blank" class="text-sky-400 hover:underline">DJ CoolGirl9 - Winter Solstice 12/21/21 mix</a></li>
					<li><a href="https://soundcloud.com/cluli/sets/cluecore-2" target="_blank" class="text-sky-400 hover:underline">cluli - CLUECORE 2!</a></li>
				</ul>
			</div>
			<div class="text-xl font-bold">music I made</div>
			<div class="px-2 sm:px-4 py-2.5">
				<p class="text-sm leading-8">
					coming soon...
				</p>
			</div>
		</div>
	</main>
</div>
