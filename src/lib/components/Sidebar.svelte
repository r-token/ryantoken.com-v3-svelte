<script>
  import LargeHeader from '$lib/components/LargeHeader.svelte'
  import Drawer from '$lib/components/Drawer.svelte'
  import {
    SidebarIcon,
    EditIcon,
    UserIcon,
    CoffeeIcon,
    LayersIcon,
    MailIcon,
    ArrowUpRightIcon
  } from 'svelte-feather-icons'
  
  import hlfIcon from '$lib/assets/site-images/hot-local-food/hlf-64.png'
  import outrankIcon from '$lib/assets/site-images/outrank/outrank-64.png'
  import catchupIcon from '$lib/assets/site-images/catchup/catchup-64.png'
  import hurricastIcon from '$lib/assets/site-images/hurricast/hurricast-icon.jpg'
  
  import Fa from 'svelte-fa'
  import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
  import { faBluesky } from '@fortawesome/free-brands-svg-icons';
  import { faMastodon } from '@fortawesome/free-brands-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
  

  export let open, currentPage

  const mainNavigation = [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/meta', label: 'Meta' }
  ]
  
  const myProjects = [
    { href: 'https://apps.apple.com/us/app/hot-local-food/id1621818779', label: 'HLF' },
    { href: 'https://apps.apple.com/us/app/outrank/id1588983785', label: 'Outrank' },
    { href: 'https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550', label: 'CatchUp' },
    { href: 'https://podcasts.apple.com/us/podcast/the-golden-hurricast/id1435008302?mt=2', label: 'Hurricast' },
  ]
  
  const externalNavigationLinks = [
    { href: 'https://x.com/_ryantoken', label: 'X' },
    { href: 'https://bsky.app/profile/ryantoken.com', label: 'Bluesky' },
    { href: 'https://indieweb.social/@ryantoken', label: 'Mastodon' },
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
  
  let innerHeight = 0
  $: isSmallPhone = () => {
    if (innerHeight <= 750) {
      return true
    } else {
      return false
    }
  }
</script>

<svelte:window bind:innerHeight />

<div class="h-screen sticky top-0 z-50">
  <!-- MOBILE SIDEBAR -->
  <Drawer isOpen={open} on:clickAway={() => open=false}>
    <div class="flex pb-6 flex-col overflow-y-auto lg:hidden relative h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-100 dark:border-slate-700">
      <button 
        on:click={toggleSidebar}
        class="flex relative top-2 left-3 items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 rounded-full focus:outline-none"
        type="button"
        value="Close Sidebar"
      >
        {#if isSmallPhone()}
          <SidebarIcon class="mt-2" />
        {:else}
          <SidebarIcon />
        {/if}
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
          <a href={navItem.href} target="_blank" rel="noreferrer" on:click={() => updateSelectedPageAndToggleSidebar(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
            <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
              <div class="mr-3 mt-0.5">
                {#if navItem.label === 'HLF'}
                  <img src={hlfIcon} alt="Hot Local Food app icon" loading="lazy" decoding="async" class="rounded w-11 -mr-2.5" />
                {:else if navItem.label === 'Outrank'}
                  <img src={outrankIcon} alt="Outrank app icon" loading="lazy" decoding="async" class="rounded w-11" />
                {:else if navItem.label === 'CatchUp'}
                  <img src={catchupIcon} alt="CatchUp app icon" loading="lazy" decoding="async" class="rounded w-11" />
                {:else if navItem.label === 'Hurricast'}
                  <img src={hurricastIcon} alt="The Golden Hurricast icon" loading="lazy" decoding="async" class="rounded w-11" />
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
          <a href={navItem.href} target="_blank" rel="noreferrer" on:click={() => updateSelectedPageAndToggleSidebar(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
            <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
              <div class="mr-3 mt-0.5">
                {#if navItem.label === 'X'}
                  <div class="text-black w-5">
                    <Fa icon={faXTwitter} size="20" />
                  </div>
                {:else if navItem.label === 'Bluesky'}
                  <div class="text-blue-500 w-5">
                    <Fa icon={faBluesky} size="20" />
                  </div>
                {:else if navItem.label === 'Mastodon'}
                  <div class="text-blue-500 w-5">
                    <Fa icon={faMastodon} size="20" />
                  </div>
                {:else if navItem.label === 'GitHub'}
                  <div class="text-black dark:text-white w-5">
                    <Fa icon={faGithub} size="20" />
                  </div>
                {:else if navItem.label === 'LinkedIn'}
                  <div class="text-sky-700 dark:text-sky-600 w-5">
                    <Fa icon={faLinkedin} size="20" />
                  </div>
                {:else if navItem.label === 'Email'}
                  <MailIcon size="16" class="text-gray-600 dark:text-gray-200"/> 
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
        <a href={navItem.href} target="_blank" rel="noreferrer" on:click={() => updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
            <div class="mr-3 mt-0.5">
              {#if navItem.label === 'HLF'}
                <img src={hlfIcon} alt="Hot Local Food app icon" loading="lazy" decoding="async" class="rounded w-11 -mr-2.5" />
              {:else if navItem.label === 'Outrank'}
                <img src={outrankIcon} alt="Outrank app icon" loading="lazy" decoding="async" class="rounded w-11" />
              {:else if navItem.label === 'CatchUp'}
                <img src={catchupIcon} alt="CatchUp app icon" loading="lazy" decoding="async" class="rounded w-11" />
              {:else if navItem.label === 'Hurricast'}
                <img src={hurricastIcon} alt="The Golden Hurricast icon" class="rounded w-11" />
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
        <a href={navItem.href} target="_blank" rel="noreferrer" on:click={() => updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
          <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300 {isCurrentPage(navItem.label) ? selectedBackground : normalBackground}">
            <div class="mr-3 mt-0.5">
              {#if navItem.label === 'X'}
                <div class="text-black w-5">
                  <Fa icon={faXTwitter} size="20" />
                </div>
              {:else if navItem.label === 'Bluesky'}
                <div class="text-blue-500 w-5">
                  <Fa icon={faBluesky} size="20" />
                </div>
              {:else if navItem.label === 'Mastodon'}
                <div class="text-indigo-500 w-5">
                  <Fa icon={faMastodon} size="20" />
                </div>
              {:else if navItem.label === 'GitHub'}
                <div class="text-black dark:text-white w-5">
                  <Fa icon={faGithub} size="20" />
                </div>
              {:else if navItem.label === 'LinkedIn'}
                <div class="text-sky-700 dark:text-sky-600 w-5">
                  <Fa icon={faLinkedin} size="20" />
                </div>
              {:else if navItem.label === 'Email'}
                <MailIcon size="16" class="text-gray-600 dark:text-gray-200"/> 
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
