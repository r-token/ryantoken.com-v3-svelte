<script>
  import { onMount } from 'svelte';
  
  // Props for additional class customization if needed
  let { extraClasses } = $props()
  
  // Default styling for the paragraph
  const paragraphClasses = "mb-4 text-gray-800 dark:text-gray-300";
  
  // Combine default and extra classes
  const combinedClasses = `${paragraphClasses} ${extraClasses}`;
  
  // Reference to the paragraph element
  let paragraphElement;
  
  onMount(() => {
	// Find all links in the paragraph and apply the styles
	if (paragraphElement) {
	  const links = paragraphElement.querySelectorAll('a');
	  links.forEach(link => {
		link.classList.add('text-indigo-500', 'dark:text-sky-300');
	  });
	}
  });
</script>

<p class={combinedClasses} bind:this={paragraphElement}>
  <!-- Use slot to include content from parent -->
  <slot />
</p>