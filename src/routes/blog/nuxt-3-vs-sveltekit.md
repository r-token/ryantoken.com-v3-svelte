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
</script>

## Beginning the Rebuild

I've been thinking for several months about rebuilding my website (<a href="/blog/rebuilding-my-website">again</a>). There were several reasons. First, to dig into some modern front-end work to re-familiarize myself with that world. Second, to get up to speed with what the latest and greatest JavaScript framework options were and how they worked. And finally, my previous website was no longer cutting it for me in several different ways.

The <a href="https://twitter.com/_ryantoken/status/1517504062563835904?s=20&t=yyC5y-1gbqkHw8equ9g3Sw" target="_blank">primary debate</a> was between which framework I was going to use. After some thought, I came down to two options. Option one was <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</a>: a Vue framework we use at <a href="https://trystoryboard.com" target="_blank">Storyboard</a>. Option two was <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>: a new framework <a href="https://scotttolinski.com/" target="_blank">Scott Tolinski</a> constantly sings the praises of on the <a href="https://syntax.fm/" target="_blank">Syntax</a> podcast. I come from a <a href="https://reactjs.org/" target="_blank">React</a> background, so regardless of my choice it was going to be quite new syntactically. Additionally, I did have *some* experience with <a href="https://prismic.io/blog/javascript-meta-frameworks-ecosystem#meta-framework" target="_blank">meta-frameworks</a> like <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a>, but not much.

Let me preface the rest of this post by emphasizing that I am not a front-end expert. My full-time job is primarily in serverless back-end development. On top of that, the relatively little front-end framework experience I do have is in React. I had played around with Vue before, but was completely new to Nuxt, Svelte, and SvelteKit.

Both Nuxt 3 and SvelteKit offer some similar features out of the box, including:
* Filesystem-based routing
* Route prerendering
* Link prefetching
* Fully static rendering options
* Single-file components
* Easy integration with <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>, which I knew I wanted to try for this rewrite

At first, I decided to do the rewrite with Nuxt 3. At time of publish, Nuxt 3 is still in Release Candidate mode, but, as mentioned, we use Nuxt at my place of work and I wanted to get a better understanding of how it actually works - as, again, I currently spend most of my time doing back-end work.

However, Nuxt 3 has now been in Release Candidate mode since April of 2022 (about 6 months at time of writing), and is still missing some key features for me to be fully satisfied with the end result. After waiting long enough for Nuxt 3 to be fully released, I decided I would *also* rewrite my website with <a href="https://svelte.dev/" target="_blank">Svelte</a> and SvelteKit.

Both of these rewrites have been completed and live at different URLs.

Before spoiling which one I chose, let's get into my experience with each:

## Nuxt 3

Nuxt 3 is a brand new framework. It doesn't have a 1.0 release yet and I'm still waiting on several key features (in my opinion) to be released. Primarily <a href="https://github.com/nuxt/image/discussions/548" target="_blank">Nuxt Image support for static sites or sites hosted on Netlify or Vercel</a> and <a href="https://github.com/nuxt/content/issues/1154" target="_blank">Nuxt Content support for static sites</a>.

Neither of those issues are complete dealbreakers though. I can 1) not use Nuxt Image, and 2) go with server-side rendering instead of a fully static site. That would work around both of those issues for the time being.

### Developer Experience

Despite those hurdles, I sincerely enjoyed the developer experience of building with Nuxt 3 and Vue 3. Things like this:

```js
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

```js
<script setup>
	const count = ref(0)
	const increment = () => count.value++
</script>
```

So much nicer. Additionally, one of the primary reasons I wanted to use Nuxt 3 was to take advantage of the complete rewrite of <a href="https://content.nuxtjs.org/" target="_blank">Nuxt Content</a>.

My website is not a complicated one. It's primarily just a bunch of static pages. The only relatively complex parts are the responsive sidebar and the blog. The sidebar could be solved once and considered "done" - it's not something I should need to revisit often.

The blog, though, needs to be as simple as possible to maintain and update over time. If blog posts are hard to write, or, once written, are hard to connect to the rest of the site, that puts up a large mental roadblock for me to want to continue writing.

### The Blog - Nuxt and Nuxt content

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

Svelte's counterpart to Nuxt's MDC syntax is called <a href="https://mdsvex.com/" target="_blank">mdsvex</a>. An odd name for sure, but it's supposed to be the svelte-y naming equivalent of the popular <a href="https://mdxjs.com/" target="_blank">MDX</a> for React. MD and X for dynamic markdown, plus SVE in the middle for Svelte, equals MDsveX 🤷‍♂️

Additionally, mdsvex is **not** an officially sanctioned "components-in-markdown" markdown preprocessor like MDC is for Nuxt. It's a <a href="https://github.com/pngwn/MDsveX" target="_blank">third-party library</a>. Even with it not being a first-party piece of technology, I found it simpler and easier to use than MDC in Nuxt. You can see some side-by-side comparisons in the <a href="#comparing-nuxt-3-and-sveltekit">Comparing Nuxt 3 and SvelteKit</a> section.

Here's how you use components in markdown with mdsvex:

```js
<ResizableImage src="/path/to-image.png" altText="Some alt text" />
```

Look at that! So straightforward. You use it just like every other Svelte component in any other Svelte file.

And it's the exact same for inline components. No weird asterisks around how to handle punctuation or special symbols immediately after you use the component. It just works as you'd expect it to.

### Other - SvelteKit

I've already discussed most of the primary benefits of using Svelte and SvelteKit, as well as discussed how I implemented the blog in this version of the site. But there are several other niceties that deserve a callout before moving on:

1. Like Nuxt 3, the developer experience was great and the development feedback loop was extremely fast. SvelteKit also uses Vite, but comes bundled with a <a href="https://github.com/sveltejs/vite-plugin-svelte" target="_blank">Svelte plugin</a> and <a href="https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#hot" target="_blank">Hot Module Replacement (HMR)</a> to reflect changes to your code in the browser immediately.

2. Svelte itself is not hard to learn. I mentioned the <a href="https://svelte.dev/tutorial/basics" target="_blank">tutorial</a> already, but it really is very simple to get a hang of while you work through that. It's a clean and simple framework.

3. Due to its smaller size, no virtual DOM, optimizing at build-time rather than run-time, and no need for extra state management work, Svelte is arguably <a href="https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/" target="_blank">the fastest</a> JavaScript framework on the market today

## Comparing Nuxt 3 and SvelteKit

Ok, enough on my experience with each. Let's get into some hands-on comparisons between how each performed when actually building this website. I'll start with a couple component comparisons before comparing page sizes, load speeds, and syntax differences.

### Component Comparisons
* Topbar component example with emits in Nuxt vs standard stuff in Svelte
* MDC vs mdsvex


### Page Size Comparisons


### Page Load Speed Comparisons
* No virtual DOM


### Syntax Differences
* No extra work for state management



And now a quick comparison on some of the other noteworthy differences:
* Diff one
* Diff two
* Diff three
* Total lines of code

## The Winner

I chose SvelteKit and this is why

1. It's no-nonsense. The syntax is clean and concise while using traditional HTML, CSS, and JavaScript. There is some "magic" with SvelteKit, like the filesystem-based routing, but Svelte itself is very self-explanatory
2. 
