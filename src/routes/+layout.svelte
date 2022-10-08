<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import { fade } from 'svelte/transition'
	
	export let data
</script>

<Header />

<Sidebar />

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}