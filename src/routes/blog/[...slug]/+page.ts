import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const modules = import.meta.glob('/src/posts/**/*.md')
    
    // The key needs to be the full path: /src/posts/usa/american-road-trip-1.md
    const path = `/src/posts/${params.slug}.md`

	// Find the module matching the generated path
    if (!modules[path]) {
        error(404, `Could not find post: ${params.slug}`)
    }

	try {
        // Use the dynamic import function returned by glob
		const post = await modules[path]()
        
		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		// Log the actual error for debugging, then throw a user error
        console.error("Error loading post:", e)
		error(500, `Internal error loading post: ${params.slug}`)
	}
}