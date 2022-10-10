<script>
	import { onMount } from 'svelte'
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	import Header from '$lib/components/Header.svelte'
	
	let sentence
	
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
</svelte:head>

<LargeHeader text="Experimentation"/>

<Subheader text="A place for me to experiment with random web things that catch my interest."/>

<hr class="mb-6" />

<div class="cursor-help h-screen">
	<p class="mb-14 font-extrabold break-words text-transparent text-2xl animate-pulse bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500 dark:from-sky-500 dark:to-green-500">
		A Work in Progress...
	</p>
	
	<Header text="Netlify Function:"/>
		
	<button class="mb-6 rounded-full p-3 bg-indigo-500 dark:bg-sky-500 dark:from-fuchsia-500 dark:to-red-500 text-white" on:click={refreshSentence}>Generate a new random sentence</button>
	
	<p class="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 dark:from-sky-500 dark:to-green-500">
		{ sentence }
	</p>
</div>