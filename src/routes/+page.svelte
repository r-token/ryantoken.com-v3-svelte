<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	export let data
</script>

<svelte:head>
	<title>Ryan Token</title>
	
	<meta name="description" content="Ryan's personal website and blog" />
	<meta name="keywords" content="Ryan Token, Serverless, Jamstack, iOS, Web, Javascript" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token" />
	<meta property="og:description" content="Ryan's personal website and blog" />
	<meta property="og:url" content="https://www.ryantoken.com" />
	<meta property="og:image" content="https://www.ryantoken.com/_app/immutable/assets/profile-668eaa31.jpg" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token" />
	<meta name="twitter:description" content="Ryan's personal website and blog" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://www.ryantoken.com/_app/immutable/assets/profile-668eaa31.jpg" />
	
	<link rel="canonical" href="https://www.ryantoken.com/">
</svelte:head>

<LargeHeader text="Hi, I'm Ryan" />
	
<p class="text-gray-600 dark:text-gray-400 mb-4">
	I'm a <a href="https://github.com/r-token" target="_blank" rel="noreferrer">software engineer</a>, <a href="https://thegoldenhurricast.com/podcast">podcaster</a>, <a href="/blog">writer</a>, <a href="https://thegoldenhurricast.com" target="_blank" rel="noreferrer">college sports fan</a>, and general techie.
</p>

<p class="text-gray-600 dark:text-gray-400 mb-4">
	I'm <a href="https://ryan-token-cv-prod.s3.us-east-2.amazonaws.com/Ryan+Token+CV.pdf" target="_blank" rel="noreferrer">currently</a> the lead full-stack software engineer at <a href="https://new.trystoryboard.com" target="_blank" rel="noreferrer">Storyboard</a>. My primary focus there is on <a href="https://aws.amazon.com/serverless/" target="_blank" rel="noreferrer">serverless cloud development</a>, but I build software that touches every part of the company.
</p>

<p class="text-gray-600 dark:text-gray-400 mb-6">
	In my free time, I build native iOS apps (<a href="https://apps.apple.com/us/app/hot-local-food/id1621818779" target="_blank" rel="noreferrer">Hot Local Food</a>, <a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" rel="noreferrer">Outrank</a>, and <a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" target="_blank" rel="noreferrer">CatchUp</a>) and co-host <a href="https://thegoldenhurricast.com" target="_blank" rel="noreferrer">The Golden Hurricast</a>, a weekly podcast covering athletics at The University of Tulsa.
</p>

<h1 class="text-xl font-bold mb-6">Latest blog posts</h1>

<ul class="grid gap-6 grid-cols-1 xl:grid-cols-2 mb-2">
	{#each data.recentPosts as post}
		<li>
			<BlogPreview slug={post.path} title={post.meta.title} description={post.meta.description} date={post.meta.date} image={post.meta.imagePath} imageAlt={post.meta.imageAlt} tags={post.meta.tags} />
		</li>
	{/each}
</ul>

<a href="/blog" class="uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">All Blog Posts</a>

<h1 class="text-xl font-bold mb-6 mt-8">Latest podcast episodes</h1>

<iframe title="Apple Podcasts web player for The Golden Hurricast" src="https://embed.podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; overflow: hidden; border-radius: 10px; background: transparent;" />

<a rel="me" href="https://indieweb.social/@ryantoken"></a>