<script>
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	export let data
	
	const getFormattedTag = () => {
		switch ((data.tag).toLowerCase()) {
			case 'swiftui':
				return 'SwiftUI'
			case 'ios':
				return 'iOS'
			case 'webrtc':
				return 'WebRTC'
			case 'aws':
				return 'AWS'
			default:
				return (data.tag).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
		}	
	}
</script>

<svelte:head>
	<title>{'Ryan Token - ' + getFormattedTag() + ' Tag'}</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-0 text-indigo-500 dark:text-slate-200">Blog posts tagged with:</h1>
<h1 class="text-2xl font-bold mb-6 text-fuchsia-500 dark:text-sky-300">{getFormattedTag()}</h1>

{#if data.posts.length}
<ul class="mb-10">
	{#each data.posts as post}
		<li>
			<BlogPreview slug={post.slug} title={post.meta.title} description={post.meta.description} date={post.meta.date} image={post.meta.imagePath} imageAlt={post.meta.imageAlt} tags={post.meta.tags} />
		</li>
	{/each}
</ul>
{:else}
	<p>No posts tagged with {getFormattedTag()}</p>
{/if}

<a href="/blog/tags" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">See All Tags</a>
