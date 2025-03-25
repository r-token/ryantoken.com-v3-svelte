<!-- from https://github.com/martykuentzel/svelte-tailwind-drawer -->

<script>
  import { run } from 'svelte/legacy';

  import { createEventDispatcher } from 'svelte'
  import { onMount } from 'svelte'

  const dispatch = createEventDispatcher()
  
  
  /**
   * @typedef {Object} Props
   * @property {boolean} [isOpen]
   * @property {string} [placement] - by default Drawer opens from left
   * @property {string} [maxScreenSize] - max size of content section
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    isOpen = $bindable(false),
    placement = "left-0",
    maxScreenSize = "max-w-[224px]",
    children
  } = $props();

  const handleClickAway = () => {
    dispatch("clickAway")
    isOpen = !isOpen
  }

  let mounted = false
  // scrollLock for content underneath
  function scrollLock(isOpen) {
    if (mounted) {
      const body = document.querySelector("body")
      body.style.overflow = isOpen ? "hidden" : "auto"
    }
  }
  run(() => {
    scrollLock(isOpen)
  });

  onMount(() => {
    mounted = true
    scrollLock(isOpen)
  })
</script>

<aside>
  <div
    class="fixed inset-0 w-full h-full z-50 overflow-hidden {isOpen
      ? 'visible'
      : 'invisible'}"
  >
    <div
      class="w-screen h-full bg-gray-500 cursor-pointer duration-500 transition-opacity overflow-hidden {isOpen
        ? 'opacity-50'
        : 'opacity-0'}"
      role="button"
      tabindex="0"
      aria-label="Close drawer"
      onclick={handleClickAway}
      onkeyup={handleClickAway}
    ></div>
    <div
      class="absolute {placement} top-0 shadow-xl overflow-y-auto bg-white transition-all duration-300 h-full {maxScreenSize} {isOpen
        ? 'w-screen'
        : 'w-0'}"
    >
      {@render children()}
    </div>
  </div>
</aside>