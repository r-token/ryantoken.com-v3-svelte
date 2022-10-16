---
title: Nuxt 3 vs SvelteKit
description: Choosing between Nuxt 3 and SvelteKit for ryantoken.com v3
date: 2022-10-16
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

I've been thinking for several months about rebuilding my website (<a href="/blog/rebuilding-my-website">again</a>). There were several reasons. First, I wanted to dig into some modern front-end work to re-familiarize myself with that world. Second, to get up to speed with what the latest and greatest JavaScript framework options were and how they worked. And finally, my preview website was no longer cutting it for me in many different ways.

The <a href="https://twitter.com/_ryantoken/status/1517504062563835904?s=20&t=yyC5y-1gbqkHw8equ9g3Sw" target="_blank">primary debate</a> was between which framework I was going to use. Option one was <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</a>: a Vue framework we use at <a href="https://trystoryboard.com" target="_blank">Storyboard</a>. Option two was <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>: a new framework <a href="https://scotttolinski.com/" target="_blank">Scott Tolinski</a> constantly sings the praises of on the <a href="https://syntax.fm/" target="_blank">Syntax</a> podcast.

Both frameworks offer some similar features out of the box, including:
* Filesystem-based routing
* Route prerendering
* Link prefetching
* Fully static rendering options
* Single-file components
* Easy integration with <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>, which I knew I wanted to try for this rewrite

At first, I decided to do the rewrite with Nuxt 3. Nuxt 3 is still in Release Candidate mode, but, as mentioned, we use Nuxt at my place of work and I wanted to get a better understanding of how it actually works - as I currently spend most of my time doing back-end work.

However, Nuxt 3 has now been in Release Candidate mode since April of 2022 (about 6 months at time of writing), and is still missing some key features for me to be fully satisfied with the end result. After waiting long enough for Nuxt 3 to be fully released, I decided I would *also* rewrite my website with <a href="https://svelte.dev/" target="_blank">Svelte</a> and SvelteKit.

Both of these rewrites have been completed and live at different URLs.

Before spoiling which one I chose, let's get into my experience with each:

## Nuxt 3

Nuxt 3


## SvelteKit

SvelteKit

And now a quick comparison on some of the noteworthy differences:
* Diff one
* Diff two
* Diff three