<script>
  import LargeHeader from '$lib/components/LargeHeader.svelte'
  import {
    Transition,
    TransitionChild,
    Dialog,
    DialogOverlay
  } from "@rgossiaux/svelte-headlessui"
  import {
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

  const isCurrentPage = () => {
    return false
  }
</script>

<!-- <Icon icon="zondicons:show-sidebar" />

<Icon icon="heroicons:pencil-square" class="text-indigo-500 dark:text-sky-400" />
<Icon icon="heroicons:user-circle" class="text-pink-500 dark:text-pink-400" />
<Icon icon="heroicons:rocket-launch" class="text-red-500 dark:text-red-400" />
<Icon icon="heroicons:square-3-stack-3d" class="text-yellow-500 dark:text-yellow-400" />
<Icon icon="heroicons:beaker" class="text-green-500 dark:text-green-400" />

<Icon icon="fa:twitter-square" class="text-sky-400"/>
<Icon icon="fa:linkedin-square" class="text-sky-700"/>
<Icon icon="fa:github-square" class="text-black"/> 
<Icon icon="heroicons-outline:mail" class="text-gray-300"/> 

<Icon icon="ic:round-arrow-outward" class="float-right text-gray-400"/> 

-->

<div class="h-screen sticky top-0">
  <!-- MOBILE SIDEBAR -->
  <!-- <TransitionRoot show="props.sidebarOpened">
    <Dialog as="div" @close="toggleSidebar" class="fixed inset-0 z-40 lg:hidden">
      <TransitionChild 
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
        as="template"
      >
        <div class="flex pb-6 flex-col overflow-y-auto lg:hidden relative z-10 h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-100 dark:border-slate-700">
          <button 
            @click="toggleSidebar"
            class="absolute top-3 left-3 flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-300 rounded-full focus:outline-none"
            type="button"
            value="Close Sidebar"
          >
            <icon-show-sidebar />
          </button>
          <div class="text-2xl font-bold flex items-center px-6 pt-16 pb-2">
            <NuxtLink @click="updateSelectedPageAndToggleSidebar('index')" to="/">
              <LargeHeader class="mb-2" text="Ryan Token" />
            </NuxtLink>
          </div>
          
          <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
            Me
          </div>

          <div class="flex-1">
            <div class="mb-0" v-for="(navItem, index) in mainNavigation" :key="index" :value="navItem">
              <NuxtLink :to="navItem.href" @click="updateSelectedPageAndToggleSidebar(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
                <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
                  <div class="flex">
                    <div class="mr-3 mt-0.5">
                      <div v-if="navItem.label === 'Blog'">
                        <IconBlog class="text-indigo-500 dark:text-sky-400"/>
                      </div>
                      <div v-else-if="navItem.label === 'About'">
                        <IconProfile class="text-pink-500 dark:text-pink-400" />
                      </div>
                      <div v-else-if="navItem.label === 'Projects'">
                        <IconProjects class="text-red-500 dark:text-red-400" />
                      </div>
                      <div v-else-if="navItem.label === 'Meta'">
                        <IconMeta class="text-yellow-500 dark:text-yellow-400"/>
                      </div>
                      <div v-else-if="navItem.label === 'Experimentation'">
                        <IconExperimentation class="text-green-500 dark:text-green-400" />
                      </div>
                    </div>  
                  
                    <div>
                      {{navItem.label}}
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
            
            <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
              My Stuff
            </div>
            
            <div class="mb-0" v-for="(navItem, index) in myProjects" :key="index" :value="navItem">
              <NuxtLink :to="navItem.href" target="_blank" @click="updateSelectedPageAndToggleSidebar(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
                <div class="flex hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
                  <div class="mr-3 mt-0.5">
                    <div v-if="navItem.label === 'Outrank'">
                      <img src="/site-images/outrank/outrank-64.png" alt="Outrank app icon" class="rounded w-11" />
                    </div>
                    <div v-else-if="navItem.label === 'CatchUp'">
                      <img src="/site-images/catchup/catchup-64.png" alt="CatchUp app icon" class="rounded w-11" />
                    </div>
                    <div v-else-if="navItem.label === 'Hurricast'">
                      <img src="/site-images/hurricast/hurricast-icon.jpg" alt="The Golden Hurricast icon" class="rounded w-11" />
                    </div>
                  </div>  
                  
                  <div>
                    {{navItem.label}}
                  </div>
                  
                  <div class="w-full">
                    <IconArrowOutward class="float-right text-gray-400"/>
                  </div>              
                </div>
              </NuxtLink>
            </div>
            
            <div class="text-sm text-gray-400 mx-6 mt-6 mb-2">
              Online
            </div>
            
            <div class="mb-0" v-for="(navItem, index) in externalNavigationLinks" :key="index" :value="navItem">
              <NuxtLink :to="navItem.href" target="_blank" @click="updateSelectedPageAndToggleSidebar(navItem.label)" class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
                <div class="hover:bg-slate-300 hover:dark:bg-slate-600 hover:dark:text-gray-300" :class="isCurrentPage(navItem.label) ? selectedBackground : normalBackground">
                  <div class="mr-3 mt-0.5">
                    <div v-if="navItem.label === 'Twitter'">
                      <IconTwitter />
                    </div>
                    <div v-else-if="navItem.label === 'GitHub'">
                      <IconGitHub class="text-black dark:text-white" />
                    </div>
                    <div v-else-if="navItem.label === 'LinkedIn'">
                      <IconLinkedIn class="text-sky-700 dark:text-cyan-500" />
                    </div>
                    <div v-else-if="navItem.label === 'Email'">
                      <IconEmail class="text-gray-500 dark:text-gray-300"/>
                    </div>
                  </div>  
                  
                  <div>
                    {{navItem.label}}
                  </div>
                  
                  <div class="w-full">
                    <IconArrowOutward class="float-right text-gray-400"/>
                  </div>              
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </TransitionChild>

      <TransitionChild
        enter="transition-opacity ease-linear duration-200" 
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-200" 
        leave-from="opacity-100"
        leave-to="opacity-0"
        as="template"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-60 bg-opacity-50" />
      </TransitionChild>
    </Dialog>
  </TransitionRoot> -->

  <!-- DESKTOP SIDEBAR -->
  <div class="hidden transition-all delay-150 lg:block flex flex-col overflow-y-auto h-full w-56 pt-1 bg-slate-100 dark:bg-slate-700 border-r border-slate-200 dark:border-slate-600">
    <div class="text-2xl font-bold flex items-center px-6 py-2.5 pb-2">
      <a href="/" on:click={updateSelectedPage('index')}>
        <LargeHeader class="mb-2 mt-2" text="Ryan Token" />
      </a>
    </div>
    
    <div class="text-sm text-gray-400 mx-6 mt-2 mb-2">
      Me
    </div>

    {#each mainNavigation as navItem, index (index)}
      <div class="mb-0">
        <a href={navItem.href} on:click={updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
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
        <a href={navItem.href} target="_blank" on:click={updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
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
        <a href={navItem.href} target="_blank" on:click={updateSelectedPage(navItem.label)} class="flex items-center px-4 py-1 text-gray-500 dark:text-gray-300">
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
