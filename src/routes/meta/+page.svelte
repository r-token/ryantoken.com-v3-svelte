<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	
	const currentYear = new Date().getFullYear()
</script>

<svelte:head>
	<title>Ryan Token - Meta</title>
</svelte:head>

<LargeHeader text="Meta"/>

<Subheader text="How this site was built."/>

<hr class="mb-6" />

<p class="mb-4">
	This is a <a href="https://jamstack.org" target="_blank">Jamstack</a> website created with <a href="https://svelte.dev/" target="_blank">Svelte</a>, <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, and <a href="https://tailwindcss.com" target="_blank">Tailwind</a>. It's all hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>.
</p>

<p class="mb-4">
	The blog is generated with <a href="https://mdsvex.com/" target="_blank">mdsvex</a> and <a href="https://daringfireball.net/projects/markdown/syntax#overview" target="_blank">Markdown</a>.
</p>

<p class="mb-4">
	The serverless functions and API endpoints are configured with the <a href="https://www.serverless.com/framework" target="_blank">Serverless Framework</a>.
</p>

<p class="mb-4">
	My code editor of choice is <a href="https://nova.app" target="_blank">Nova</a>.
</p>

<p class="mb-4">
	The source code and README for this site are on <a href="https://github.com/r-token/ryantoken.com-v3-svelte" target="_blank">GitHub</a>.
</p>

<p class="mb-8">
	Previous versions of the site were built with <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://github.com/johnsundell/publish" target="_blank">Swift</a>, <a href="https://www.netlify.com/" target="_blank">Netlify</a>, and others.
</p>

<p class="italic text-gray-500 dark:text-gray-400">
	Check out the <a href="/rss">RSS feed</a>
</p>

<p class="mb-4 italic text-gray-500 dark:text-gray-400">
	Ryan Token {currentYear}
</p>