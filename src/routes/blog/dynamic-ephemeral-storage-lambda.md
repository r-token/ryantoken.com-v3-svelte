---
title: Dynamic Ephemeral Storage
description: A repost to an article I published on the Storyboard Dev Blog.
date: 2022-06-10
imagePath: /blog-images/dynamic-ephemeral-storage/cover.png
imageAlt: A custom diagram showcasing dynamic ephemeral storage with lambda
tags:
- web
- cloud
- serverless
---

<script>
	import ResizableImage from '$lib/components/ResizableImage.svelte'
</script>

<ResizableImage src="/blog-images/dynamic-ephemeral-storage/dynamic-ephemeral-storage.png" altText="Dynamic Ephemeral Storage with AWS Lambda" url="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d" />

I published an article on <a href="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d" target="_blank">Storyboard's Dev Blog</a> about how to configure dynamic amounts of ephemeral storage for a Lambda function on a *per-invocation* basis.

AWS does not let you do this natively. You manually set the amount of storage on the function itself, and then you’re done. You *can* edit it after the fact, but you can’t change the amount of storage allocated with each invocation.

In the post, I detail (what I think is) a clever solution to this limitation which can save you a significant amount of money in the long run. Hint: it's built with the <a href="https://www.serverless.com/framework" target="_blank">Serverless Framework</a>.

Check out the full post in the link below, and let me know what you think!

Link to the post: <a href="https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d" target="_blank">https://medium.com/storyboard-podcasts/storyboard-dev-blog-serverless-compute-with-dynamic-ephemeral-storage-8fd38c0df93d</a>