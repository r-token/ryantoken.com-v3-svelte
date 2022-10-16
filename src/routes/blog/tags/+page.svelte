<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	export let data
</script>

<svelte:head>
	<title>Ryan Token - Tags</title>
	<meta name="description" content="All tags on Ryan's blog posts">
	<meta property="og:description" content="All tags on Ryan's blog posts">
	<meta name="keywords" content="Ryan Token, Blog, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud">
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
