import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
	const { category } = params

	const response = await fetch('/api/posts')
	const allPosts: Post[] = await response.json()

	const posts = allPosts.filter((post) => post.categories.includes(category))

	return { posts }
}