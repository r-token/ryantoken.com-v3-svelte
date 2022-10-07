<script>
	export let data
</script>

<h1>All Tags</h1>

<ul>
	{#each data.allTags as tag}
	<li>
		<a href="/blog/tag/{tag}">
			{tag}
		</a>
	</li>
	{/each}
</ul>