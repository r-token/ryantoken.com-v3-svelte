<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	export let data
</script>

<svelte:head>
	<title>Ryan Token - Tags</title>
	
	<meta name="description" content="All tags on Ryan's blog posts" />
	<meta name="keywords" content="Ryan Token, Blog, Tags, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token - Tags" />
	<meta property="og:description" content="All tags on Ryan's blog posts" />
	<meta property="og:url" content="https://www.ryantoken.com/blog/tags" />
	<meta property="og:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token - Tags" />
	<meta name="twitter:description" content="All tags on Ryan's blog posts" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
</svelte:head>

<LargeHeader text="All Tags"/>
	
<ul>
	{#each data.allTags as tag}
	<li>
		<a href="/blog/tags/{tag}" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">
			{ tag }
		</a>
	</li>
	{/each}
</ul>
