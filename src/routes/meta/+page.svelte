<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	
	const currentYear = new Date().getFullYear()
</script>

<svelte:head>
	<title>Ryan Token - Meta</title>
	
	<meta name="description" content="How ryantoken.com is built" />
	<meta name="keywords" content="Ryan Token, Meta, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token - Meta" />
	<meta property="og:description" content="How ryantoken.com is built" />
	<meta property="og:url" content="https://www.ryantoken.com/meta" />
	<meta property="og:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token - Meta" />
	<meta name="twitter:description" content="How ryantoken.com is built" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<link rel="canonical" href="https://www.ryantoken.com/meta">
</svelte:head>

<LargeHeader text="Meta"/>

<Subheader text="How this site was built."/>

<hr class="mb-6" />

<p class="mb-4">
	This is a <a href="https://jamstack.org" target="_blank" rel="noreferrer">Jamstack</a> website created with <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a> and <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a>. It's all hosted on <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>.
</p>

<p class="mb-4">
	The blog is generated with <a href="https://mdsvex.com/" target="_blank" rel="noreferrer">mdsvex</a> and <a href="https://daringfireball.net/projects/markdown/syntax#overview" target="_blank" rel="noreferrer">Markdown</a>.
</p>

<p class="mb-4">
	The serverless functions and API endpoints are configured with the <a href="https://www.serverless.com/framework" target="_blank" rel="noreferrer">Serverless Framework</a>.
</p>

<p class="mb-4">
	My code editor of choice is <a href="https://nova.app" target="_blank" rel="noreferrer">Nova</a>.
</p>

<p class="mb-4">
	The source code and README for this site are on <a href="https://github.com/r-token/ryantoken.com-v3-svelte" target="_blank" rel="noreferrer">GitHub</a>.
</p>

<p class="mb-8">
	Previous versions of the site were built with <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a>, <a href="https://github.com/johnsundell/publish" target="_blank" rel="noreferrer">Swift</a>, <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>, and others.
</p>

<p class="italic text-gray-500 dark:text-gray-400">
	Check out the <a href="/feed.rss">RSS feed</a>
</p>

<p class="mb-4 italic text-gray-500 dark:text-gray-400">
	Ryan Token {currentYear}
</p>