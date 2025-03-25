<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	let { data } = $props();
</script>

<svelte:head>
	<title>Ryan Token - Blog</title>
	
	<meta name="description" content="Ryan's blog posts" />
	<meta name="keywords" content="Ryan Token, Blog, Serverless, Jamstack, iOS, Web, Javascript, AWS, Clou" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token - Blog" />
	<meta property="og:description" content="Ryan's blog posts" />
	<meta property="og:url" content="https://www.ryantoken.com/blog" />
	<meta property="og:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token - Blog" />
	<meta name="twitter:description" content="Ryan's blog posts" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<link rel="canonical" href="https://www.ryantoken.com/blog">
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