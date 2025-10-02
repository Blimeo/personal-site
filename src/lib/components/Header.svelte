<script lang="ts">
	interface Props {
		currentPage: 'about' | 'projects' | 'music' | 'blog';
	}

	let { currentPage }: Props = $props();
</script>

<div class="flex flex-col px-4 gap-y-2 pb-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 ">
	<a href="/">
		<div class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			♪ Matthew Ye
		</div>
	</a>
	<nav>
		<ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
			<li class="hover:text-black">
				<a href="/" class={currentPage === 'about' ? 'underline' : ''}>About</a>
			</li>
			<li class="hover:text-black">
				<a href="/projects" class={currentPage === 'projects' ? 'underline' : ''}>Projects</a>
			</li>
			<li class="hover:text-black">
				<a href="/music" class={currentPage === 'music' ? 'underline' : ''}>Music</a>
			</li>
			<li class="hover:text-black">
				<a href="/blog" class={currentPage === 'blog' ? 'underline' : ''}>Blog</a>
			</li>
		</ul>
	</nav>
</div>

