import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/**/*.md', { eager: true })
    for (const path in paths) {
        const file = paths[path]
        // Remove root folder and extension to keep the structure
        const slug = path.replace('/src/posts/', '').replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as any // Cast to any temporarily to safely check fields

            // FIX: Explicitly parse coordinates. 
            // This handles "42.5" (string) vs 42.5 (number) AND "latitude" vs "lat"
            const lat = parseFloat(metadata.lat || metadata.latitude);
            const long = parseFloat(metadata.long || metadata.longitude);

            const post: Post = {
                title: metadata.title,
                slug: slug,
                description: metadata.description,
                date: metadata.date,
                categories: metadata.categories || [],
                published: metadata.published,
                // Only add lat/long if they are valid numbers
                ...(!isNaN(lat) && !isNaN(long) && { lat, long })
            }

            if (post.published) {
                posts.push(post)
            }
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}