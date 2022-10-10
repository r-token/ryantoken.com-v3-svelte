<script>
  import LargeHeader from '$lib/components/LargeHeader.svelte'
  import Drawer from '$lib/components/Drawer.svelte'
  import {
    SidebarIcon,
    EditIcon,
    UserIcon,
    CoffeeIcon,
    LayersIcon,
    AlertTriangleIcon,
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    ArrowUpRightIcon
  } from 'svelte-feather-icons'

  export let open, currentPage

  const mainNavigation = [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/meta', label: 'Meta' },
    { href: '/experimentation', label: 'Experimentation' },
  ]
  
  const myProjects = [
    { href: 'https://apps.apple.com/us/app/outrank/id1588983785', label: 'Outrank' },
    { href: 'https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550', label: 'CatchUp' },
    { href: 'https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2', label: 'Hurricast' },
  ]
  
  const externalNavigationLinks = [
    { href: 'https://twitter.com/_ryantoken', label: 'Twitter' },
    { href: 'https://github.com/r-token', label: 'GitHub' },
    { href: 'https://linkedin.com/in/ryantoken', label: 'LinkedIn' },
    { href: 'mailto:ryantoken13@gmail.com', label: 'Email' },
  ]

  const normalBackground = "flex w-full py-1 px-2 rounded-md"
  const selectedBackground = "bg-slate-300 dark:bg-slate-600 text-gray-600 dark:text-gray-300 flex w-full py-1 px-2 rounded-md"

  const toggleSidebar = () => {
    console.log('toggling sidebar to: ', !open)
    open = !open
  }

  $: isCurrentPage = (page) => {
    const slashPage = '/' + page
    const pageLowercased = slashPage.toLowerCase()

    if (pageLowercased === currentPage) {
      return true
    } else {
      return false
    }
  }

  const updateSelectedPage = (page) => {
    if (page === '/') {
      currentPage = page
    } else {
      const pageLowercased = page.toLowerCase()
      const slashPage = '/' + pageLowercased
      currentPage = slashPage
    }
  }
  
  const updateSelectedPageAndToggleSidebar = (page) => {
    updateSelectedPage(page)
    toggleSidebar()
  }
</script>

<div class="h-screen sticky top-0 {open ? 'z-50' : ''}">
  <!-- MOBILE SIDEBAR -->
  <Drawer isOpen={open} on:clickAway={() => open=false}>
    <div class="flex pb-6 flex-col overflow-y-auto lg:hidden relative h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-100 dark:border-slate-700">
      <button 
        on:click={toggleSidebar}
        class="flex relative top-2 left-3 items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 rounded-full focus:outline-none"
        type="button"
        value="Close Sidebar"
      >
        <SidebarIcon />
      </button>
      <div class="text-2xl font-bold flex items-center px-6 py-5 pb-0.5">
        <a href="/" on:click={() => updateSelectedPageAndToggleSidebar('/')}>
          <LargeHeader text="Ryan Token" />
        </a>
      </div>
      
      <div class="text-sm text-gray-400 mx-6 mb-2">
        Me
      </div>
  
      {#each mainNavigation as navItem, index (index)}
        <div class="mb-0">
          <a href={navItem.href} on:click={() => updateSelectedPageAndToggleSidebar(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
            <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
              <div class="flex">
                <div class="mr-3 mt-0.5">
                  {#if navItem.label === 'Blog'}
                    <EditIcon size="20" class="text-indigo-500 dark:text-sky-400" />
                  {:else if navItem.label === 'About'}
                    <UserIcon size="20" class="text-pink-500 dark:text-pink-400" />
                  {:else if navItem.label === 'Projects'}
                    <CoffeeIcon size="20" class="text-red-500 dark:text-red-400" />
                  {:else if navItem.label === 'Meta'}
                    <LayersIcon size="20" class="text-yellow-500 dark:text-yellow-400" />
                  {:else if navItem.label === 'Experimentation'}
                    <AlertTriangleIcon size="20" class="text-green-500 dark:text-green-400" />
                  {/if}
                </div>
              
                <div>
                  {navItem.label}
                </div>
              </div>
            </div>
          </a>
        </div>
      {/each}
  
      <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
        My Stuff
      </div>
  
      {#each myProjects as navItem (navItem.label)}
        <div class="mb-0">
          <a href={navItem.href} target="_blank" on:click={() => updateSelectedPageAndToggleSidebar(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
            <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
              <div class="mr-3 mt-0.5">
                {#if navItem.label === 'Outrank'}
                  <img src="/site-images/outrank/outrank-64.png" alt="Outrank app icon" class="rounded w-11" />
                {:else if navItem.label === 'CatchUp'}
                  <img src="/site-images/catchup/catchup-64.png" alt="CatchUp app icon" class="rounded w-11" />
                {:else if navItem.label === 'Hurricast'}
                  <img src="/site-images/hurricast/hurricast-icon.jpg" alt="The Golden Hurricast icon" class="rounded w-11" />
                {/if}
              </div>  
              
              <div>
                {navItem.label}
              </div>
              
              <div class="w-full">
                <ArrowUpRightIcon size="20" class="float-right text-gray-400"/> 
              </div>
            </div>
          </a>
        </div>
      {/each}
      
      <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
        Online
      </div>
      
      {#each externalNavigationLinks as navItem (navItem.label)}
        <div class="mb-0">
          <a href={navItem.href} target="_blank" on:click={() => updateSelectedPageAndToggleSidebar(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
            <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
              <div class="mr-3 mt-0.5">
                {#if navItem.label === 'Twitter'}
                  <TwitterIcon size="20" class="text-sky-400"/>
                {:else if navItem.label === 'GitHub'}
                  <GithubIcon size="20" class="text-black"/> 
                {:else if navItem.label === 'LinkedIn'}
                  <LinkedinIcon size="20" class="text-sky-700"/>
                {:else if navItem.label === 'Email'}
                  <MailIcon size="20" class="text-gray-600"/> 
                {/if}
              </div>  
              
              <div>
                {navItem.label}
              </div>
              
              <div class="w-full">
                <ArrowUpRightIcon size="20" class="float-right text-gray-400"/> 
              </div>              
            </div>
          </a>
        </div>
      {/each}
    </div>
  </Drawer>

  <!-- DESKTOP SIDEBAR -->
  <div class="hidden transition-all delay-150 lg:block flex-col overflow-y-auto h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-200 dark:border-slate-600">
    <div class="text-2xl font-bold flex items-center px-6 py-5 pb-0.5">
      <a href="/" on:click={() => updateSelectedPage('/')}>
        <LargeHeader text="Ryan Token" />
      </a>
    </div>
    
    <div class="text-sm text-gray-400 mx-6 mb-2">
      Me
    </div>

    {#each mainNavigation as navItem, index (index)}
      <div class="mb-0">
        <a href={navItem.href} on:click={() => updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
            <div class="flex">
              <div class="mr-3 mt-0.5">
                {#if navItem.label === 'Blog'}
                  <EditIcon size="20" class="text-indigo-500 dark:text-sky-400" />
                {:else if navItem.label === 'About'}
                  <UserIcon size="20" class="text-pink-500 dark:text-pink-400" />
                {:else if navItem.label === 'Projects'}
                  <CoffeeIcon size="20" class="text-red-500 dark:text-red-400" />
                {:else if navItem.label === 'Meta'}
                  <LayersIcon size="20" class="text-yellow-500 dark:text-yellow-400" />
                {:else if navItem.label === 'Experimentation'}
                  <AlertTriangleIcon size="20" class="text-green-500 dark:text-green-400" />
                {/if}
              </div>
            
              <div>
                {navItem.label}
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}

    <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
      My Stuff
    </div>

    {#each myProjects as navItem (navItem.label)}
      <div class="mb-0">
        <a href={navItem.href} target="_blank" on:click={() => updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
            <div class="mr-3 mt-0.5">
              {#if navItem.label === 'Outrank'}
                <img src="/site-images/outrank/outrank-64.png" alt="Outrank app icon" class="rounded w-11" />
              {:else if navItem.label === 'CatchUp'}
                <img src="/site-images/catchup/catchup-64.png" alt="CatchUp app icon" class="rounded w-11" />
              {:else if navItem.label === 'Hurricast'}
                <img src="/site-images/hurricast/hurricast-icon.jpg" alt="The Golden Hurricast icon" class="rounded w-11" />
              {/if}
            </div>  
            
            <div>
              {navItem.label}
            </div>
            
            <div class="w-full">
              <ArrowUpRightIcon size="20" class="float-right text-gray-400"/> 
            </div>
          </div>
        </a>
      </div>
    {/each}
    
    <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
      Online
    </div>
    
    {#each externalNavigationLinks as navItem (navItem.label)}
      <div class="mb-0">
        <a href={navItem.href} target="_blank" on:click={() => updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
            <div class="mr-3 mt-0.5">
              {#if navItem.label === 'Twitter'}
                <TwitterIcon size="20" class="text-sky-400"/>
              {:else if navItem.label === 'GitHub'}
                <GithubIcon size="20" class="text-black"/> 
              {:else if navItem.label === 'LinkedIn'}
                <LinkedinIcon size="20" class="text-sky-700"/>
              {:else if navItem.label === 'Email'}
                <MailIcon size="20" class="text-gray-600"/> 
              {/if}
            </div>  
            
            <div>
              {navItem.label}
            </div>
            
            <div class="w-full">
              <ArrowUpRightIcon size="20" class="float-right text-gray-400"/> 
            </div>              
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
