<script>
	import '../../../prism-dracula.css'
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	export let data
	
	const formattedDate = () => {
		const dateString = new Date(data.date.replace(/-/g, '\/').replace(/T.+/, ''))
		const conciseDate = dateString.toLocaleDateString()
		return conciseDate
	}
</script>

<svelte:head>
	<title>Ryan Token - {data.title}</title>
	<meta property="og:title" content={"Ryan Token – " + data.title} />
	<meta name="description" content={data.description}>
	<meta property="og:description" content={data.description} />
	<meta property="og:image" content={"ryantoken.com" + data.imagePath} />
	<meta property=“og:type” content="blog post"/>
	<meta name="keywords" content="Ryan Token, Serverless, Jamstack, iOS, Web, Javascript">
	<meta name="author" content="Ryan Token">
</svelte:head>

<div>
	<LargeHeader text={ data.title } />
	<h2 class="italic mb-2 text-gray-500 dark:text-gray-400">{ data.description }</h2>
	<Subheader text={ 'Published ' + formattedDate() } />
</div>

<hr class="mb-6" />

<aricle class="prose dark:prose-invert prose-a:text-indigo-500 dark:prose-a:text-slate-200">
	<svelte:component this={data.content} />
</aricle>

<br />
