<script>
    import { Image as UnpicImage } from "@unpic/svelte";

    export let src;
    export let caption = "";
    export let width = 1200;
    export let height = 800;
</script>

<figure class="flex h-screen flex-col items-center">
    <UnpicImage
        src={src}
        layout="constrained"
        width={width}
        fallback="wsrv"
        class="max-h-[90vh] !w-auto mx-auto"
        alt={caption || "Image"}
    />

    {#if caption}
        <figcaption class="mt-2 text-center text-gray-500 text-sm">
            {caption}
        </figcaption>
    {/if}
</figure>