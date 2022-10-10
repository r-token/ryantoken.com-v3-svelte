<script>
	import '../../../prism-dracula.css'
	import LargeHeader from "$lib/components/LargeHeader.svelte"
	import Subheader from "$lib/components/Subheader.svelte"
	export let data
	
	const formattedDate = () => {
		const dateString = new Date(data.date.replace(/-/g, '\/').replace(/T.+/, ''))
		const conciseDate = dateString.toLocaleDateString()
		return conciseDate
	}
</script>

<svelte:head>
	<title>Ryan Token - {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<div>
	<LargeHeader text={ data.title } />
	<Subheader text={ data.description } />
	<Subheader text={ 'Published ' + formattedDate() } />
</div>

<hr class="mb-6" />

<aricle class="prose dark:prose-invert prose-a:text-indigo-500 dark:prose-a:text-slate-200">
	<svelte:component this={data.content} />
</aricle>
