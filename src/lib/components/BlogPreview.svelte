<script>
	import { goto } from '$app/navigation'
	export let slug, title, description, date, image, imageAlt, tags

	const formattedDate = () => {
		const isoDate = date
		const dateString = new Date(isoDate.replace(/-/g, '\/').replace(/T.+/, ''))
		const conciseDate = dateString.toLocaleDateString()
		return conciseDate
	}
</script>

<div class="mx-auto max-w-xs sm:max-w-xs md:max-w-full lg:max-w-full xl:max-w-full rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl bg-slate-50 dark:bg-slate-700 overflow-hidden mb-6">
	<div class="cursor-pointer" on:click={() => goto(slug)}>
		<div class="md:flex">
			<div class="md:shrink-0 max-w-xs max-h-xs">
				<img class="w-full md:h-full md:w-48" src={image} alt={imageAlt} loading="lazy" decoding="async" />
			</div>

			<div class="px-8 pt-4 relative">
				<p class="block text-xl leading-tight font-medium text-black dark:text-slate-50">{ title }</p>
				<p class="mt-2 text-slate-500 dark:text-slate-300">{ description }</p>
				<p class="mt-2 text-slate-500 dark:text-slate-300 pb-12">{ formattedDate() }</p>
				<div class="absolute bottom-1">
					{#each tags as tag (tag)}
						<div class="inline-block mr-4 uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">
							<a href="/blog/tags/{tag}">
								{ tag }
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>