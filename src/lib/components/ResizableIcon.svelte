<script>
	export let src, altText, url
</script>

<a href={url} target="_blank" rel="noreferrer">
	<p>
		<img src={src} alt={altText} loading="lazy" decoding="async" class="p-2 rounded-3xl w-72" >
	</p>
</a>