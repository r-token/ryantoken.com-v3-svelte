<script>
	import { onMount } from 'svelte'
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	import Header from '$lib/components/Header.svelte'
	
	let sentence = ''
	
	const refreshSentence = async () => {
		const response = await fetch(`${import.meta.env.VITE_PUBLIC_CUSTOM_BASE_PATH}/sentence-generator`)
		const newSentence = await response.json()
		sentence = newSentence.message
	}
	
	onMount(async () => {
		await refreshSentence()
	})
</script>

<svelte:head>
	<title>Ryan Token - Experimentation</title>
	
	<meta name="description" content="Ryan's experimentation page" />
	<meta name="keywords" content="Ryan Token, Experimentation, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token - Experimentation" />
	<meta property="og:description" content="Ryan's experimentation page" />
	<meta property="og:url" content="https://ryantoken.com/experimentation" />
	<meta property="og:image" content="https://ryantoken.com/android-chrome-512x512.png" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token - Experimentation" />
	<meta name="twitter:description" content="Ryan's experimentation page" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://ryantoken.com/android-chrome-512x512.png" />
</svelte:head>

<LargeHeader text="Experimentation"/>

<Subheader text="A place for me to experiment with random web things that catch my interest."/>

<hr class="mb-6" />

<div class="cursor-help h-screen">
	<p class="mb-14 font-extrabold break-words text-transparent text-2xl animate-pulse bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 dark:from-sky-500 dark:to-green-500">
		A Work in Progress...
	</p>
	
	<Header text="Serverless Function:"/>
		
	<button class="mb-6 rounded-full p-3 bg-indigo-500 dark:bg-sky-500 dark:from-fuchsia-500 dark:to-red-500 text-white" on:click={refreshSentence}>Generate a new random sentence</button>
	
	<p class="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 dark:from-sky-500 dark:to-green-500">
		{ sentence }
	</p>
</div>