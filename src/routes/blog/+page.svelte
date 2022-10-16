<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	
	export let data
</script>

<svelte:head>
	<title>Ryan Token - Blog Posts</title>
	<meta name="description" content="Ryan Token's Blog Posts">
	<meta property="og:description" content="Ryan Token's Blog Posts">
	<meta name="keywords" content="Ryan Token, Blog, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud">
	<meta name="author" content="Ryan Token">
</svelte:head>

<LargeHeader text="Blog"/>
	
<h2 class="italic mb-6 text-gray-500 dark:text-gray-400">
	All blog posts. Check out the <a href="/feed.rss">RSS feed</a>.
</h2>

<ul class="grid gap-6 grid-cols-1 xl:grid-cols-2">
	{#each data.posts as post}
		<li>
			<BlogPreview slug={post.path} title={post.meta.title} description={post.meta.description} date={post.meta.date} image={post.meta.imagePath} imageAlt={post.meta.imageAlt} tags={post.meta.tags} />
		</li>
	{/each}
</ul>