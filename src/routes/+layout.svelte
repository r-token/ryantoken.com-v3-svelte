<script>
	import '../app.css'
	import { page } from '$app/stores'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import { fade } from 'svelte/transition'
	
	export let data

	let sidebarOpened = false
	let currentPage = $page.url.pathname

	console.log('current page:', currentPage)
</script>

<div class="flex min-h-screen dark:bg-slate-800">
	<Sidebar bind:opened={sidebarOpened} currentPage={currentPage}/>
	<div class="flex-1 min-w-0">
		<Topbar bind:opened={sidebarOpened} bind:selectedPage={currentPage}/>
		{#key data.currentRoute}
			<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }} class="p-6 dark:text-gray-300">
				<slot />
			</main>
		{/key}
	</div>
</div>