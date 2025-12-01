<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import SocialIcons from "@rodneylab/svelte-social-icons";
</script>

<svelte:head>
	<title>Matthew Ye</title>
	<meta name="description" content="Developer, producer, writer." />
	<meta property="og:title" content="Matthew Ye" />
	<meta property="og:type" content="profile" />
	<meta property="og:image" content="/capybara.webp" />
</svelte:head>

<div class="min-h-screen">
	<main class="mx-auto max-w-screen-lg px-3 py-6">
		<Header currentPage="about" />
		<div
			class="flex flex-col px-2 sm:px-4 py-2.5 items-center md:flex-row md:justify-between md:gap-x-16"
		>
			<div>
				<p class="mt-6 mb-6 text-l md:leading-8 sm:leading-6">
					Hi, I'm Matthew. I like programming, languages, music,
					travel, and literature. 
					

					But here's what you probably want to know about me:
					</p>
					<ul class="list-disc list-inside space-y-1">
						<li>I graduated from UC Berkeley in 2022</li>
						<li>I worked at YouTube in the Bay Area from 2023 to 2025</li>
						<li>I've been working on authorization infrastructure at Google in NYC since 2025.</li>
					</ul>

					<br>
					You can find my resume
					<a
						class="text-cyan-400 hover:underline"
						target="_blank"
						href="https://drive.google.com/file/d/1txXqH0SRE6Xnr1kEOC1TpZPLZs1jmJgR/view?usp=sharing"
						>here</a
					>.
				<div class="mt-3 flex gap-1">
					<a target="_blank" href="mailto:matthew.ye4@gmail.com">
						<SocialIcons
							network="email"
							alt=""
							width="36"
							height="36"
						/>
					</a>
					<a target="_blank" href="https://github.com/blimeo">
						<SocialIcons
							network="github"
							alt=""
							width="36"
							height="36"
						/>
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/matthewye2001/"
					>
						<SocialIcons
							network="linkedin"
							alt=""
							width="36"
							height="36"
						/>
					</a>
					<a target="_blank" href="https://soundcloud.com/blimeo">
						<SocialIcons
							network="soundcloud"
							alt=""
							width="36"
							height="36"
						/>
					</a>
					<a
						target="_blank"
						href="https://open.spotify.com/user/blimeo?si=c350ffb745164b48"
					>
						<SocialIcons
							network="spotify"
							alt=""
							width="36"
							height="36"
						/>
					</a>
				</div>
			</div>
			<div class="shrink-0">
				<img
					class="w-72 h-48"
					src="/capybara.webp"
					alt="Capybara avatar"
					loading="lazy"
				/>
			</div>
		</div>
	</main>
</div>
