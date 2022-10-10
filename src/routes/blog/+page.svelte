<script>
	export let data
</script>

<svelte:head>
	<title>Ryan Token - Blog Posts</title>
</svelte:head>

<h1>Blog</h1>
	
<a href="/blog/1">hi</a>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>