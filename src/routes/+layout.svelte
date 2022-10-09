<script>
	import '../app.css'
	import { page } from '$app/stores'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import { fade } from 'svelte/transition'
	
	export let data

	let sidebarOpened = false
	let currentPage = $page.url.pathname
</script>

<div class="flex min-h-screen dark:bg-slate-800">
	<Sidebar bind:open={sidebarOpened} bind:currentPage={currentPage}/>
	<div class="flex-1 min-w-0">
		<Topbar bind:open={sidebarOpened} bind:currentPage={currentPage}/>
		{#key data.currentRoute}
			<main in:fade={{ duration: 150, delay: 50 }} out:fade={{ duration: 50 }} class="p-6 dark:text-gray-300">
				<slot />
			</main>
		{/key}
	</div>
</div>