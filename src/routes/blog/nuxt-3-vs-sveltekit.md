---
title: Nuxt 3 vs SvelteKit
description: Choosing between Nuxt 3 and SvelteKit for ryantoken.com v3
date: 2022-10-21
imagePath: /blog-images/nuxt-3-vs-sveltekit/cover.png
imageAlt: Nuxt 3 logo vs the SvelteKit logo
tags:
- web
- jamstack
- rewrite
---

<script>
	import ResizableImage from '$lib/components/ResizableImage.svelte'
	import bmcLogo from '$lib/assets/site-images/bmc-button.png'
</script>

## Rebuilding ryantoken.com

I've been thinking for several months about rebuilding my website (<a href="/blog/rebuilding-my-website">again</a>). There were several reasons. First, to dig into some modern front-end work to re-familiarize myself with that world. Second, to get up to speed with what the latest and greatest JavaScript framework options were and how they worked. And finally, my previous website was no longer cutting it for me in several different ways.

For reference, here's what my website looked like before:

<ResizableImage src="/blog-images/nuxt-3-vs-sveltekit/publish-website.png" altText="v2 of ryantoken.com - built with Swift and Publish" />

I actually built that version of the site with <a href="https://www.apple.com/swift/" target="_blank">Swift</a> and <a href="https://github.com/johnsundell/publish" target="_blank">Publish</a> - a static site generator for Swift. While a great tool, I needed something more flexible that aligned with how I feel about web development today. Thus, the rewrite project began.

## The Debate

The <a href="https://twitter.com/_ryantoken/status/1514393045319536650?s=20&t=2XnKuxMtMirv-q0s8RJXbw" target="_blank">primary debate</a> was between which framework I was going to use. After some thought, I came down to two options. Option one was <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</a>: a Vue framework we use at <a href="https://trystoryboard.com" target="_blank">Storyboard</a>. Option two was <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>: a new framework I originally heard about due to <a href="https://scotttolinski.com/" target="_blank">Scott Tolinski</a> often singing its praises on the <a href="https://syntax.fm/" target="_blank">Syntax</a> podcast. I come from a <a href="https://reactjs.org/" target="_blank">React</a> background, so regardless of my choice it was going to be quite new conceptually and syntactically.

Additionally, Nuxt 3 and SvelteKit are both <a href="https://prismic.io/blog/javascript-meta-frameworks-ecosystem#meta-framework" target="_blank">meta-frameworks</a>. Nuxt is a meta-framework for Vue, and SvelteKit is a meta-framework for Svelte. This means that they're frameworks that provide abstractions on top of other frameworks - primarily to handle the boring/routine stuff for you. Think wiring up page routes, sharing common layouts between pages, and handling smooth page transitions. They also generally come with best practices built in like build optimizations, link prefetching, and more. I did have *some* experience with meta-frameworks like <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a>, but not much. And while most of this post will compare the meta-frameworks of Nuxt 3 and SvelteKit, we'll also get into some of the differences between the core Vue and Svelte frameworks.

Let me preface the rest of this post by emphasizing that I am not a front-end expert. My full-time job is primarily in serverless back-end development. On top of that, most of the relatively little front-end framework experience I do have is in React. I had played around with Vue before, but was completely new to Nuxt, Svelte, and SvelteKit. I'm certain I will get some front-end terminology or facts wrong. Please <a href="mailto:ryantoken13@gmail.com" target="_blank">email me</a> with corrections or clarifications if you have them.

Ok, on to some comparisons.

Both Nuxt 3 and SvelteKit offer some similar features out of the box, including:
* Filesystem-based routing
* Route prerendering
* Link prefetching
* Fully static rendering options
* Single-file components
* Easy integration with <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>, which I knew I wanted to try for this rewrite

At first, I <a href="https://twitter.com/_ryantoken/status/1517504062563835904?s=20&t=yyC5y-1gbqkHw8equ9g3Sw" target="_blank">decided</a> to do the rewrite with Nuxt 3. At time of publish, Nuxt 3 is still in Release Candidate mode, but, as mentioned, we use Vue and Nuxt at my place of work and I wanted to get a better understanding of how it actually works - as, again, I currently spend most of my time doing back-end work.

However, Nuxt 3 has now been in Release Candidate mode since April of 2022 (about 6 months at time of writing), and is still missing some key features for me to be fully satisfied with the end result. After waiting long enough for Nuxt 3 to be fully released, I decided I would *also* rewrite my website with <a href="https://svelte.dev/" target="_blank">Svelte</a> and SvelteKit.

Both of these rewrites have been completed and live at different URLs.

Before spoiling which one I chose, let's get into my experience with each:

## Nuxt 3

Nuxt 3 is a brand new framework. It doesn't have a 1.0 release yet and I'm still waiting on several key features (in my opinion) to be released. Primarily <a href="https://github.com/nuxt/image/discussions/548" target="_blank">Nuxt Image support for static sites or sites hosted on Netlify or Vercel</a> and <a href="https://github.com/nuxt/content/issues/1154" target="_blank">Nuxt Content support for static sites</a>.

Neither of those issues are complete dealbreakers though. I can 1) not use Nuxt Image, and 2) go with server-side rendering instead of a fully static site. That would work around both of those issues for the time being.

### Developer Experience

Despite those hurdles, I sincerely enjoyed the developer experience of building with Nuxt 3 and Vue 3.

Things like this:

```html
<script>
export default {
	data() {
		return {
			count: 0
		}
	},
	methods: {
		increment(){
			this.count++
		}
	}
}
</script>
```

Turn into this:

```html
<script setup>
	const count = ref(0)
	const increment = () => count.value++
</script>
```

So much nicer. Additionally, one of the primary reasons I wanted to use Nuxt 3 was to take advantage of the complete rewrite of <a href="https://content.nuxtjs.org/" target="_blank">Nuxt Content</a> - their content engine.

My website is not a complicated one. It's primarily just a bunch of static pages. The only relatively complex parts are the responsive sidebar and the blog. The sidebar could be solved once and considered "done" - it's not something I should need to revisit often.

The blog, though, needs to be as simple as possible to maintain and update over time. If blog posts are hard to write, or, once written, are hard to connect to the rest of the site, that puts up a large mental roadblock for me to want to continue writing.

### The Blog - Nuxt and Nuxt Content

Nuxt 3 and Nuxt Content solves the blog problem. All you need to do is create a `/content` directory at the root of the project, a `/blog` directory within that, and a new folder for each blog post. You can then write blog posts in standard markdown, and you can include Vue components within them via <a href="https://content.nuxtjs.org/guide/writing/mdc" target="_blank">MDC</a> syntax. Nuxt will then automatically configure the routing for you. For example, an `index.md` markdown file within `/content/blog/fancy-blog-post` will be accessible at https://your-website.com/blog/fancy-blog-post. Pretty sweet!

### MDC Syntax

I did find the MDC syntax a bit annoying, though. For example, I have a custom Vue component for showing a responsive/resizable image. To include that in a blog post with Nuxt Content and MDC, it looks like this:

```js
::ResizableBlogImage{src="/path/to-image.png" altText="Some alt text"}
::
```

The double-colon syntax felt weird to me. Maybe that's common in parts of Vue that I'm not familiar with, but it's much different from how you use components in normal Vue files.

The previous example was for a "block" component, something that isn't inlined with the rest of the markdown. You can also use Vue components inline via MDC, but I ran into another oddity there. If I wanted punctuation immediately after the inline component, it broke!

The only way I found to get around this was to include the punctuation within the component's props, like so:

```js
:ExternalBlogLink{url="https://url-to-go-to.com" text="The text to style with a period at the end."}
```

This component in particular styled the URL a certain way though, so it would also style the ending period that way - which I did not want. That's still how I have it in the Nuxt version of the site today. If this has since been fixed, please let me know!

### Other - Nuxt

That covers the key components of what differentiated Nuxt for me. The developer experience was largely wonderful, and Nuxt Content gave me an easy way to hook up blog posts to the rest of the site.

There were several other benefits of Nuxt, though, that I found useful while doing the rewrite:

1. Vue 3 and the <a href="https://vuejs.org/guide/extras/composition-api-faq.html#why-composition-api" target="_blank">Composition API</a> were fantastic to work with. Composition utilities like <a href="https://vueuse.org/core/useFetch/" target="_blank">useFetch</a> saved me considerable time and bailed me out of having to write a bunch of unnecessary boilerplate.

2. The extremely fast development feedback loop powered by <a href="https://vitejs.dev/" target="_blank">Vite</a> and <a href="https://nitro.unjs.io/" target="_blank">Nitro</a>.

3. Just using Vue in general compared to my previous experiences with React. Vue felt easier to pick up and lighter weight than React, while giving me more than enough functionality for my simple website.

## Svelte and SvelteKit

While Vue is pretty similar to React conceptually in many ways, Svelte is largely not. Svelte does still have the concept of components, reactivity, lifecycle hooks, etc... like React & Vue do, but it is very different in *how* it accomplishes some of those things.

For example, React and Vue both use what's called the "<a href="https://reactjs.org/docs/faq-internals.html" target=")blank">virtual DOM</a>" for updating the actual DOM whenever the application's state changes. This is a bit of <a href="https://svelte.dev/blog/virtual-dom-is-pure-overhead" target="_blank">overhead</a> in order to try and simplify the development experience for the user.

Svelte gets rid of the entire idea of the virtual DOM and state management libraries.

> Unlike traditional UI frameworks, Svelte is a compiler that knows at build time how things could change in your app, rather than waiting to do the work at run time.

In the end, this means that Svelte can achieve a similar declarative, state-driven UI development style without the overhead of the virtual DOM. That is the primary benefit here, and it results in some very fast (and concise) code.

Svelte itself is the compiler that handles the reactivity components at build time. You can learn the basics of Svelte through their <a href="https://svelte.dev/tutorial/basics" target="_blank">code-along tutorial</a>.

SvelteKit is to Svelte as NuxtJS is to Vue, or as Next.js is to React. A "meta-framework" as I mentioned earlier. It gives us filesystem-based routing, link prefetching, and plenty more.

Let's look at some of the items we mentioned in the Nuxt 3 section and how they're implemented in SvelteKit.

### The Blog - SvelteKit and mdsvex

We can get automatic blog post routing with SvelteKit by just using their standard filesystem-based routing and a dynamic route. We can simply create a directory structure at `/src/routes/blog` and drop all of our markdown files inside the `/blog` folder.

This won't load right away, though, because every route on a SvelteKit site needs a `+page.svelte` file. We want our markdown files to serve as this `+page.svelte` file though, and that's where dynamic routes come in. We create a `[slug]` folder (brackets included) within the `/blog` folder and we put our `+page.svelte` file in there. This allows us to use Svelte's `load` function to dynamically load the data that a given route will need and display it accordingly.

I know that's a lot of Svelte-specific info. If you want to get really deep into the weeds on how this stuff works and how to set it up yourself, check out <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog" target="_blank">Josh Collinsworth's SvelteKit tutorial</a>. And <a href="https://ko-fi.com/collinsworth" target="_blank">tip him a few bucks</a> while you're at it for the fantastic content. I sure did.

Regardless, that gives us a dead-simple way to add posts to our blog. All I have to do going forward is create a new `post-title.md` markdown file within the `/blog` folder, and I have a new blog post on the site.

### mdsvex

Svelte's counterpart to Nuxt's MDC syntax is called <a href="https://mdsvex.com/" target="_blank">mdsvex</a>. An odd name for sure, but it's supposed to be the svelte-y naming equivalent of the popular <a href="https://mdxjs.com/" target="_blank">MDX</a> for React. MD and X for dynamic markdown, plus SVE in the middle for Svelte, equals mdsvex 🤷‍♂️

Additionally, mdsvex is **not** an officially sanctioned "components-in-markdown" markdown preprocessor like MDC is for Nuxt. It's a <a href="https://github.com/pngwn/mdsvex" target="_blank">third-party library</a>. Even with it not being a first-party piece of technology, I found it simpler and easier to use than MDC in Nuxt. You can see some side-by-side comparisons in the <a href="#comparing-nuxt-3-and-sveltekit">Comparing Nuxt 3 and SvelteKit</a> section.

Here's how you use components in markdown with mdsvex:

```js
<ResizableImage src="/path/to-image.png" altText="Some alt text" />
```

Look at that! So straightforward. You use it just like every other Svelte component in any other Svelte file.

And it's the exact same for inline components. No weird asterisks around how to handle punctuation or special symbols immediately after you use the component. It just works as you'd expect it to.

### Other - SvelteKit

I've already discussed most of the primary benefits of using Svelte and SvelteKit, as well as discussed how I implemented the blog in this version of the site. But there are several other niceties that deserve a callout before moving on:

1. Like Nuxt 3, the developer experience was great and the development feedback loop was extremely fast. SvelteKit also uses Vite, but comes bundled with a <a href="https://github.com/sveltejs/vite-plugin-svelte" target="_blank">Svelte plugin</a> and <a href="https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#hot" target="_blank">Hot Module Replacement (HMR)</a> to reflect changes to your code in the browser immediately.

2. Svelte itself was surprisingly easy to learn. I mentioned the <a href="https://svelte.dev/tutorial/basics" target="_blank">tutorial</a> already, but it really is very simple to get a hang of while you work through that. It's a clean and simple framework.

3. Due to its smaller size, no virtual DOM, optimizing at build-time rather than run-time, and no need for extra state management work, Svelte is arguably <a href="https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/" target="_blank">the fastest</a> JavaScript framework on the market today

## Comparing Nuxt 3 and SvelteKit

Ok, enough on my experience with each. Let's get into some hands-on comparisons between how each performed when actually building this website. I'll start with a couple component comparisons before comparing page sizes, load speeds, and syntax differences.

### Component Comparisons
A good first component to look at for comparison's sake is the Topbar component. This only appears on small screens/mobile phones, and interacts with the sidebar.

This is how it looks in Nuxt 3:

*Topbar.vue*
```html
<script setup>
	import IconShowSidebar from '~icons/zondicons/show-sidebar'
	
	const emit = defineEmits(["toggleSidebar", "updateSelectedPageFromTopbar"])
	const toggleSidebar = () => emit("toggleSidebar", true)
	const updateSelectedPage = () => emit("updateSelectedPageFromTopbar", "index")
</script>

<template>
	<div class="lg:hidden z-50 v-screen sticky top-0 flex justify-between py-3 px-3 lg:px-6 bg-slate-100 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-700 space-x-3 lg:space-x-6">
		<div class="flex items-center flex-1">
			<button 
				@click='toggleSidebar'
				class="mr-3 lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600 dark:text-gray-300"
				type="button" 
				value="Open sidebar"
			>
				<icon-show-sidebar />
			</button>

			<NuxtLink to="/" @click="updateSelectedPage" class="lg:hidden text-indigo-500 dark:text-slate-200 font-bold">Ryan Token</NuxtLink>
		</div>
	</div>
</template>
```

And this is how the Topbar components looks in SvelteKit:

*Topbar.svelte*
```html
<script>
	import { SidebarIcon } from 'svelte-feather-icons'
	export let open
	export let currentPage
	
	const toggleSidebar = () => open = true
	const updateSelectedPage = () => currentPage = 'index'
</script>

<div class="lg:hidden z-40 v-screen sticky top-0 flex justify-between py-3 px-3 lg:px-6 bg-slate-100 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-700 space-x-3 lg:space-x-6">
	<div class="flex items-center flex-1">
		<button 
			on:click={toggleSidebar}
			class="mr-3 lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600 dark:text-gray-300"
			type="button"
			value="Open sidebar"
		>
			<SidebarIcon />
		</button>

		<a href="/" on:click={updateSelectedPage} class="lg:hidden text-indigo-500 dark:text-slate-200 font-bold">Ryan Token</a>
	</div>
</div>
```

The Topbar component and the Sidebar component are at the same level in the component hierarchy. Both are used by a common `layout` file that Nuxt 3 and SvelteKit use. The Sidebar has to react to changes in the Topbar's state, though, like when a user taps the sidebar icon in the Topbar to open/close the sidebar. Lots of "bar"s here, I know.

Regardless, a change in the Topbar's state needs to be bubbled up to its parent, then relayed to the Sidebar component so the Sidebar knows whether it should be opened or closed.

Vue uses the concept of <a href="https://vuejs.org/guide/components/events.html#emitting-and-listening-to-events" target="_blank">emits</a> to send messages from a component to its parent.

Svelte uses <a href="https://svelte.dev/repl/e6f91174592d45c78f4701b2d311b62e?version=3.29.4" target="_blank">two-way data bindings</a>. In the parent `layout` component, I can pass the value of the Topbar's `open` prop to the Sidebar like so: `<Sidebar bind:open={sidebarOpened} />`

Personally, I found Svelte's approach to be more straightforward than needing to `emit` an event and then set up an event listener that reacts to that. Neither approach was overly complex, but Svelte's felt more natural to me.

### MDC vs mdsvex

I mentioned my preference for Svelte's mdsvex to Nuxt's MDC syntax earlier, but I wanted to give a side-by-side comparison here so it was easier to understand why. Again, these are the libraries that allow you to use Svelte or Vue components within Markdown.

Here's how you use a block component, like a resizable image, with Vue and MDC:

```js
::ResizableBlogImage{src="/path/to-image.png" altText="Some alt text"}
::
```

And here's how you do the same thing with Svelte and mdsvex:

```js
<ResizableImage src="/path/to-image.png" altText="Some alt text" />
```

Again, neither are *bad*, but one of them makes more sense and is more concise. And that, to me, is the Svelte solution.

### Page Size Comparisons

So we've talked now for a while about conceptual differences, syntactic differences, and developer experience differences between the frameworks, but what about real-world speed and size comparisons?

Let's start with size.

To gauge a page's size, I'm using Chrome's standard Developer Tools and the Network tab. Doing a hard refresh of the home page of my site, I see the following:

**Nuxt 3 site**:
* 45 requests
* 942 kB transferred
* 2.0 MB resources

**SvelteKit site**:
* 37 requests
* 627 kB transferred
* 1.6 MB resources

The SvelteKit site is smaller in every way despite being outwardly the exact same.

Also, I at first didn't know what the difference between "transferred" and "resources" was. <a href="https://stackoverflow.com/a/56043891" target="_blank">Stack Overflow</a> tells me that "'Transferred' is the compressed size of all resources. You can think of it as the amount of upload and download data that a mobile user will use in order to load this page. 'Resources' is the uncompressed size of all resources."

Additionally, Svelte, as its name implies, is a small framework. This is because there's no virtual DOM or extra state management libraries that Svelte needs to deal with. This results in smaller overall size of the framework and less <a href="https://builtin.com/software-engineering-perspectives/fix-javascript-bloat" target="_blank">JavaScript bloat</a>.

The size difference between the two pages also lends itself to our next point of comparison: speed.

### Page Load Speed Comparisons

Speed is harder to measure reliably. While using the dev tools Network tab I was using for page size calculations was consistent and reliable, the time it took to load the page changed significantly on every refresh for both the Nuxt 3 site and the SvelteKit site.

To try to put some more concrete numbers around this, we'll defer to Google's <a href="https://pagespeed.web.dev/" target="_blank">PageSpeed Insights</a>.

Note: these are first-run numbers. I have not yet put serious time into optimizing either site for increased performance metrics aside from compressing images.

**Nuxt 3 site - mobile**
* Performance score: 88
* First Contentful Paint: 2.0 s
* Speed Index: 2.0 s
* Largest Contentful Paint: 2.4 s
* Time to Interactive: 4.7 s
* Total Blocking Time: 310 ms
* Cumulative Layout Shift: 0.023

<ResizableImage src="/blog-images/nuxt-3-vs-sveltekit/nuxt-pagespeed-mobile.png" altText="PageSpeed Insights scores for the Nuxt 3 site on mobile" />

**Nuxt 3 site - desktop**
* Performance score: 100
* First Contentful Paint: 0.5 s
* Speed Index: 0.7 s
* Largest Contentful Paint: 0.7 s
* Time to Interactive: 0.5 s
* Total Blocking Time: 0 ms
* Cumulatie Layout Shift: 0.002

<ResizableImage src="/blog-images/nuxt-3-vs-sveltekit/nuxt-pagespeed-desktop.png" altText="PageSpeed Insights scores for the Nuxt 3 site on desktop" />

**SvelteKit site - mobile**
* Performance score: 93
* First Contentful Paint: 1.7 s
* Speed Index: 2.2 s
* Largest Contentful Paint: 2.3 s
* Time to Interactive: 4.0 s
* Total Blocking Time: 190 ms
* Cumulative Layout Shift: 0.023

<ResizableImage src="/blog-images/nuxt-3-vs-sveltekit/svelte-pagespeed-mobile.png" altText="PageSpeed Insights scores for the SvelteKit site on mobile" />

**SvelteKit site - desktop**
* Performance score: 100
* First Contentful Paint: 0.5 s
* Speed Index: 0.8 s
* Largest Contentful Paint: 0.6 s
* Time to Interactive: 0.7 s
* Total Blocking Time: 10 ms
* Cumulatie Layout Shift: 0.002

<ResizableImage src="/blog-images/nuxt-3-vs-sveltekit/svelte-pagespeed-desktop.png" altText="PageSpeed Insights scores for the SvelteKit site on desktop" />

Some interesting takeaways there. First, they both scored perfect 100s on desktop. Again, I have put almost 0 time into deeper page optimizations. All I've really actively done is compressed the image files throughout the site so they're smaller. To get perfect 100s on desktop effectively out of the box with both of these frameworks is impressive.

There's a bigger difference in how they scored for mobile, though. The Nuxt site performed moderately worse in every metric on mobile than the SvelteKit site. The primary performance drag for both sites was the Apple Podcasts embedded player I include on the home screen. PageSpeed Insights complained about that player being slow to load every time. Since it's lazily loaded though, and it's at the bottom of the page and you typically need to scroll to get there, I'm not too worried about it.

Like the Network tab, there were differences every time I ran the PageSpeed Insights process on each site. They were relatively close each time though, so I think it's a fair comparison.

### Other Noteworthy Differences

Before we wrap up, a couple other notes to share.

Total lines of code (counted with <a href="https://github.com/AlDanial/cloc" target="_blank">cloc</a>):
* Nuxt 3 site: 27,939 total lines of code	

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                             8              0              0          26092
Vuejs Component                 26            222             59            842
Markdown                        11            500              0            767
JavaScript                       3             17              0             75
YAML                             1              9              0             69
TypeScript                       3              9              3             61
CSS                              1              3              0             21
TOML                             1              2              0             10
Text                             1              0              0              2
-------------------------------------------------------------------------------
SUM:                            55            762             62          27939
-------------------------------------------------------------------------------
```

* SvelteKit site: 8,439 total lines of code

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                             4              0              0           6463
Svelte                          21            265              3           1001
Markdown                        10            452              0            656
JavaScript                      14             29              3            188
CSS                              2             21              8            119
HTML                             1              0              0             12
-------------------------------------------------------------------------------
SUM:                            52            767             14           8439
-------------------------------------------------------------------------------
```

Honestly, I have no idea why the amount of JSON is so much higher in the Nuxt 3 site than it is in the SvelteKit site. I certainly am not writing 26,092 lines of JSON. I assume that's something Nuxt is doing in the background. Or the `cloc` tool I'm using to count the lines of code in a git repo is a bit flawed.

## The Winner

By now, you probably already guessed which framework I ended up choosing for the production version of the site. I chose SvelteKit, and these were the primary reasons:

1. It's no-nonsense. The syntax is clean, concise, and consistent while using traditional HTML, CSS, and JavaScript. There is some "magic" with SvelteKit, like the filesystem-based routing, but Svelte itself is very self-explanatory
2. No virtual DOM diffing or complex state management code
3. It's extremely fast and performs better on mobile out of the box
4. I prefer Svelte's `mdsvex` to Nuxt's `MDC` for components in Markdown
5. I prefer Svelte's two-way binding feature to Vue's `emit` feature for bubbling props from child components up to their parents

Don't misunderstand, though. Nuxt 3 is amazing. It's performant, provides a wonderful developer experience, and has a great team behind it and a bright future ahead of it.

I loved building the website with Nuxt. I was consistently impressed with how intuitive its features were to implement and how quickly I was able to get off the ground. I began this project with Nuxt for a reason.

I plan to maintain both the Nuxt 3 site and the SvelteKit site over time. I may even switch which one the ryantoken.com domain points to at various times. Doing this will keep me up-to-date with how each framework is progressing and keep my skillset up on both simultaneously.

This was a wonderful exercise to go through, and I've never been happier with my personal website. Thanks for reading if you made it all the way here, and feel free to <a href="mailto:ryantoken13@gmail.com" target="_blank">get in touch</a> if you have feedback on the site or this blog post.

And if you particularly enjoyed this post, feel free to <a href="https://www.buymeacoffee.com/ryantoken" target="_blank">buy me a coffee</a>!

<div class="flex items-stretch mb-8">
	<a href="https://www.buymeacoffee.com/ryantoken" class="w-2/3 xl:w-1/3 lg:w-1/3 max-w-xs" target="_blank">
		<img src={bmcLogo} alt="Buy Me a Coffee button" loading="lazy" decoding="async" class="rounded-3xl" />
	</a>
</div>

