<script>
  let { src, altText, url } = $props();
</script>

<a href={url} class="w-1/3 max-w-xs" target="_blank" rel="noreferrer">
  <img src={src} alt={altText} loading="lazy" decoding="async" class="p-2 rounded-3xl" />
</a>