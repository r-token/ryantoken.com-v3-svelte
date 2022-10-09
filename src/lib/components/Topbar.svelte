<script>
  import { SidebarIcon } from 'svelte-feather-icons'

  export let open
  export let currentPage
  
  const toggleSidebar = () => open = true
  const updateSelectedPage = () => currentPage = 'index'
</script>

<div class="lg:hidden v-screen sticky top-0 flex justify-between py-3 px-3 lg:px-6 bg-slate-100 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-700 space-x-3 lg:space-x-6">
 <div class="flex items-center flex-1">
    <button 
      on:click={toggleSidebar}
      class="mr-3 lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600 dark:text-gray-300"
      type="button" 
      value="Open sidebar"
    >
      <SidebarIcon />
    </button>

    <a href="/" on:click={updateSelectedPage} class="lg:hidden text-indigo-500 dark:text-slate-200 font-bold">Ryan Token</a>
  </div>
</div>