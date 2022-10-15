<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	
	export let data
</script>

<svelte:head>
	<title>Ryan Token - Blog Posts</title>
</svelte:head>

<div>
	<LargeHeader text="Blog"/>

	<Subheader text="All blog posts."/>

	<ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
		{#each data.posts as post}
			<li>
				<BlogPreview slug={post.path} title={post.meta.title} description={post.meta.description} date={post.meta.date} image={post.meta.imagePath} imageAlt={post.meta.imageAlt} tags={post.meta.tags} />
			</li>
		{/each}
	</ul>
</div>