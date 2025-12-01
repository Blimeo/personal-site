export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	published: boolean
}

export type MapMarker = {
    lat: number
    long: number
    name: string
    url: string
}