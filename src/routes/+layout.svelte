<script>
	import '../app.css'
	import { page } from '$app/stores'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Topbar from '$lib/components/Topbar.svelte'
	import { fade } from 'svelte/transition'
  import { inject } from '@vercel/analytics'
  import { onMount } from 'svelte'
	export let data

	let sidebarOpened = false
	let currentPage = $page.url.pathname
  
  onMount(() => {
    inject()
  })
</script>

<div class="flex min-h-screen dark:bg-slate-800">
	<Sidebar bind:open={sidebarOpened} bind:currentPage={currentPage}/>
	<div class="flex-1 min-w-0">
		<Topbar bind:open={sidebarOpened} bind:currentPage={currentPage}/>
		{#key data.currentRoute}
			<main in:fade={{ duration: 200, delay: 150 }} out:fade={{ duration: 150 }} class="p-6 dark:text-gray-300">
				<slot />
			</main>
		{/key}
	</div>
</div>