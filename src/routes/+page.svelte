<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	import StandardParagraph from '$lib/components/StandardParagraph.svelte'
	
	let { data } = $props();
</script>

<svelte:head>
	<title>Ryan Token</title>
	
	<meta name="description" content="Ryan's personal website and blog" />
	<meta name="keywords" content="Ryan Token, Serverless, Jamstack, iOS, Web, Javascript" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token" />
	<meta property="og:description" content="Ryan's personal website and blog" />
	<meta property="og:url" content="https://www.ryantoken.com" />
	<meta property="og:image" content="https://res.cloudinary.com/dcu4ssa4m/image/upload/v1677081894/profile-square_veahoc.jpg" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token" />
	<meta name="twitter:description" content="Ryan's personal website and blog" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://res.cloudinary.com/dcu4ssa4m/image/upload/v1677081894/profile-square_veahoc.jpg" />
	
	<link rel="canonical" href="https://www.ryantoken.com/">
</svelte:head>

<LargeHeader text="Hi, I'm Ryan" />
	
<StandardParagraph extraClasses="text-lg">
	I'm a <a href="https://github.com/r-token" target="_blank" rel="noreferrer">software engineer</a>, <a href="https://thegoldenhurricast.com/podcast">podcaster</a>, <a href="/blog">writer</a>, <a href="https://thegoldenhurricast.com" target="_blank" rel="noreferrer">college sports fan</a>, and general techie.
</StandardParagraph>

<StandardParagraph extraClasses="text-lg">
	I'm <a href="https://ryan-token-cv-prod.s3.us-east-2.amazonaws.com/Ryan+Token+CV.pdf" target="_blank" rel="noreferrer">currently</a> a senior software engineer at <a href="https://storyboard.com" target="_blank" rel="noreferrer">Storyboard</a>. My primary focus there is building <a href = "https://apps.apple.com/us/app/chat-by-storyboard/id1662743814" target="_blank">Chat by Storyboard</a>, our hands-free, eyes-free voice messaging app for drivers. I also help create highly scalable <a href="https://aws.amazon.com/serverless/" target="_blank" rel="noreferrer">serverless</a> back ends that power every part of the platform.
</StandardParagraph>

<StandardParagraph extraClasses="text-lg mb-6">
	In my free time, I build native iOS apps (<a href="https://apps.apple.com/us/app/hot-local-food/id1621818779" target="_blank" rel="noreferrer">Hot Local Food</a>, <a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" rel="noreferrer">Outrank</a>, and <a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" target="_blank" rel="noreferrer">CatchUp</a>) and co-host <a href="https://thegoldenhurricast.com" target="_blank" rel="noreferrer">The Golden Hurricast</a>, a weekly podcast covering athletics at <a href = "https://utulsa.edu" target = "_blank">The University of Tulsa</a>.
</StandardParagraph>

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

<iframe title="Apple Podcasts web player for The Golden Hurricast" src="https://embed.podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="450px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; overflow: hidden; border-radius: 10px; background: transparent;"></iframe>

<a aria-label="Mastodon URL for verification" rel="me" href="https://indieweb.social/@ryantoken"></a>