<script>
	import '../app.css'
	import { page } from '$app/stores'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import { fade } from 'svelte/transition'
	
	inject({ mode: dev ? 'development' : 'production' });
	let { data, children } = $props();

	let sidebarOpened = $state(false)
	let currentPage = $state($page.url.pathname)
</script>

<div class="flex min-h-screen dark:bg-slate-800">
	<Sidebar bind:open={sidebarOpened} bind:currentPage={currentPage}/>
	<div class="flex-1 min-w-0">
		<Topbar bind:open={sidebarOpened} bind:currentPage={currentPage}/>
		{#key data.currentRoute}
			<main in:fade|global={{ duration: 200, delay: 150 }} out:fade|global={{ duration: 150 }} class="p-6 dark:text-gray-300">
				{@render children()}
			</main>
		{/key}
	</div>
</div>