<script>
	import LargeHeader from "$lib/components/LargeHeader.svelte"
	import Subheader from "$lib/components/Subheader.svelte"
</script>

<svelte:head>
	<title>Ryan Token - Meta</title>
</svelte:head>

<template>
	<div>
		<LargeHeader text="Meta"/>

		<Subheader text="How this site was built."/>

		<hr class="mb-6" />

		<p class="mb-4">This is a <a href="https://jamstack.org" target="_blank">Jamstack</a> website created with <a href="https://svelte.dev/" target="_blank">Svelte</a>, <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, and <a href="https://tailwindcss.com" target="_blank">Tailwind</a>. It's all hosted on <a href="https://netlify.com" target="_blank">Netlify</a>.</p>

		<p class="mb-4">The blog is generated with <a href="https://mdsvex.com/" target="_blank">mdsvex</a> and <a href="https://daringfireball.net/projects/markdown/syntax#overview" target="_blank">Markdown</a>.</p>
		
		<p class="mb-4">The serverless functions are built with either the <a href="https://www.serverless.com/framework" target="_blank">Serverless Framework</a> or <a href="https://www.netlify.com/products/functions/" target="_blank">Netlify Functions</a>.</p>

		<p class="mb-4">The source code and README for this site are on <a href="https://github.com/r-token/ryantoken.com-v3-svelte" target="_blank">GitHub</a>.</p>
	</div>
</template>