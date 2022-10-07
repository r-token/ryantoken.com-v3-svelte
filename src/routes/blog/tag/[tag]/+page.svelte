<script>
	export let data
</script>

<h1>Posts tagged with {data.tag}</h1>

{#if data.posts.length}
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
{:else}
	<p>No posts tagged with {data.tag}</p>
{/if}