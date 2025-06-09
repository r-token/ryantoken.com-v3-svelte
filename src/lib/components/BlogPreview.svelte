<script>
	import { goto } from '$app/navigation'
	let {
		slug,
		title,
		description,
		date,
		image,
		imageAlt,
		tags
	} = $props();

	const formattedDate = () => {
		const isoDate = date
		const dateString = new Date(isoDate.replace(/-/g, '\/').replace(/T.+/, ''))
		const conciseDate = dateString.toLocaleDateString()
		return conciseDate
	}
</script>

<div class="mx-auto max-w-xs sm:max-w-xs md:max-w-full lg:max-w-full xl:max-w-full rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl bg-slate-50 dark:bg-slate-700 overflow-hidden mb-6">
	<div 
		class="cursor-pointer" 
		role="button"
		tabindex="0"
		onclick={() => goto(slug)}
		onkeydown={() => {}}
	>
		<div class="md:flex">
			<div class="md:shrink-0 max-w-xs max-h-xs">
				<img class="w-full md:h-full md:w-48" src={image} alt={imageAlt} loading="lazy" decoding="async" />
			</div>

			<div class="px-6 pt-4 relative">
				<p class="block text-xl leading-tight font-medium text-black dark:text-slate-50">{ title }</p>
				<p class="mt-2 text-base text-slate-500 dark:text-slate-300">{ description }</p>
				<p class="mt-2 text-base text-slate-500 dark:text-slate-300 pb-12">{ formattedDate() }</p>
				<div class="absolute bottom-1">
					{#each tags as tag (tag)}
						<div class="inline-block mr-4 uppercase tracking-wide text-sm text-indigo-500 dark:text-sky-300 font-semibold">
							<span 
								class="cursor-pointer"
								role="link"
								tabindex="0"
								onclick={(e) => {
									e.stopPropagation()
									goto(`/blog/tags/${tag}`)}
								}
								onkeydown={(e) => {
								  if (e.key === 'Enter' || e.key === ' ') {
									e.stopPropagation()
									goto(`/blog/tags/${tag}`);
								  }
								}}
							>
								{tag}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>