<script>
  export let src
  export let altText
  export let url
</script>

<a href={url} class="w-1/3 max-w-xs" target="_blank">
  <img src={src} alt={altText} loading="lazy" decoding="async" class="p-2 rounded-3xl" />
</a>