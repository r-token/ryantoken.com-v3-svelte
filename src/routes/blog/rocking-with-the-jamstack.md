---
title: Rocking with the Jamstack
description: Diving into the Jamstack, and loving every minute of it.
date: 2021-02-21
imagePath: /blog-images/rocking-with-the-jamstack/cover.png
imageAlt: The Jamstack logo
tags:
- web
- jamstack
- serverless
---

<script>
	import ResizableImage from '$lib/components/ResizableImage.svelte'
</script>

<ResizableImage src="/blog-images/rocking-with-the-jamstack/rwj-jamstack-logo.png" altText="Jamstack logo" />

## What Is the Jamstack?

There comes a time in every young developer's life when they stumble upon a technology, or a philosophy around technologies, that just *works* for them. At least, that's what I envision an older and more experienced developer telling me.

That's been the <a href="https://jamstack.org" target="_blnk">Jamstack</a> for me.

The Jamstack, originally styled as JAMstack, can sound a bit nebulous at first. The J-A-M there stands for **J**avaScript, **A**PIs, and **M**arkup. Those are the only required ingredients for any Jamstack application. There is no specific framework involved, no cloud provider or back end language you *need* to use, no required toolchain or build process. There are very few hard-and-fast requirements at all. It is a vague term intentionally, and that's one of its positives, but there **are** two requirements.

***First***: a static front end

A Jamstack front end is pre-rendered. That is to say, the content that a user sees on the client-side is generated *before* it's required, not *once* it's required. This gives Jamstack applications a massive speed advantage.

This markup generation happens during a build step rather than on-demand on the server-side. Because of this, your app doesn't need to repeatedly make network round-trips to serve up the pages the user requests; they've already been generated and are there instantly for the user to interact with. This takes the load off of the web host and dramatically improves scalability.

***Second***: decoupling

A college professor of mine continually stressed the idea of applications that were "loosely coupled and highly cohesive".

Half of the idea he was pushing here was the concept of decoupling. A decoupled application has clean separation points between its various parts. Decoupling allows each component of the application to be more easily understandable and simpler to swap out or upgrade.

The key takeaway in the context of the Jamstack is to enforce a clean separation between your front end and your back end services.

This means a static site on the front end with serverless functions on the back end. Your front end should not care what you're using on the back end, and vice-versa. Each can be iterated on independently without ever impacting the other.

The loosely coupled glue between the front end and back end in a Jamstack application is the API layer. I use AWS's <a href="https://aws.com/api-gateway" target="_blank">API Gateway</a> to host my APIs, but there are plenty of options.

## Ok, great, but seriously what IS the Jamstack?

All of this is to say that the Jamstack is NOT a specific set of languages or tools you need to learn - it's a mindset of *how* to build applications (with some recommendations 🙂).

<ResizableImage src="/blog-images/rocking-with-the-jamstack/rwj-architecture.png" altText="Jamstack architecture" />

## Why Should You Care?

Modern web development can be exhausting and overwhelming. Jamstack applications aim to simplify your architecture while significantly enhancing the speed, scalability, and overall performance of your application.

* **Speed**: The fact that all of your pages are static and pre-rendered means your page load times will decrease dramatically compared to a standard server-side rendered app.

* **Scalability**: Server-side rendered applications inherently slow down when under heavy load. The web servers get buried under a mountain of requests and suffer when they can't fulfill all the requests for each page in time. This problem simply does not exist for Jamstack applications. The pages are already rendered on the front end – all your app needs to do is show users the page they want. No network round-trip necessary.

* **Future Proofing**: The decoupled nature of Jamstack applications means you can easily swap out your Angular front end with a React front end, or vice-versa. Want to migrate your back end services from Azure to AWS? Or write them all in Python instead of Node.js? Your front end won't care, and it will be a much simpler process.

* **Developer Experience**: Developing with the Jamstack is just fun. There are cutting-edge technologies in use across the board. Having Netlify automatically see a change on my main branch in GitHub and then seamlessly deploy a new build out to production still makes me smile every time. The Jamstack supports all of the latest JavaScript frameworks too. React, Gatsby, Next.js, Hugo, and more are all widely supported.


## How to Get Started

It's easier than you think! Outside of a basic understanding of JavaScript and APIs, there are hardly any *specific* technologies you need to know in order to start building Jamstack applications. There are some concepts you should be familiar with, though:

* **Static Site Generators**: Frameworks that take in one source, like JavaScript or Markdown, and create static HTML files from them. Examples include <a href="https://gatsbyjs.com" target="_blank">Gatsby</a>, <a href="https://gohugo.io" target="_blank">Hugo</a>, <a href="https://nextjs.org" target="_blank">Next.js</a>, and I'd even include the indomitable <a href="https://create-react-app.dev" target="_blank">Create React App</a>.

* **Hosting Sites**: Where you host the static content generated by your static site generator. My go-to has been <a href="https://netlify.com" target="_blank">Netlify</a>, a consistent champion of the Jamstack. Others include <a href="https://vercel.com" target="_blank">Vercel</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" target="_blank">AWS S3 Static Hosting</a>, and <a href="https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website" target="_blank">Azure Storage</a>.

* **Back End Services**: The "A" in Jamstack stands for APIs. Those API calls typically route to some serverless functions that you create but don't maintain physical infrastructure for. These can be AWS <a href="https://aws.amazon.com/lambda" target="_blank">Lambda</a> functions, <a href="https://netlify.com/products/functions" target="_blank">Netlify Functions</a>, <a href="https://azure.microsoft.com/en-us/services/functions" target="_blank">Azure Functions</a>, or a host of others. With Netlify Functions specifically, you can create a file for each function, add a configuration file that tells Netlify where those files are, and Netlify will handle the rest. Netlify automatically hosts them as Lambda functions for you and takes care of everything from there.

* **Data Storage**: Your serverless database. Where your data will persist. The top options among Jamstack developers include <a href="https://aws.amazon.com/dynamodb" target="_blank">DynamoDB</a>, <a href="https://fauna.com" target="_blank">Fauna</a>, <a href="https://mongodb.com" target="_blank">MongoDB</a>, and <a href="https://airtable.com" target="_blank">AirTable</a>.

There are also plenty of learning resources out there. One of the best is <a href="https://jamstackconf.com">Jamstack Conf</a> - a semiannual developer conference solely focused on the Jamstack. The past few events have been free to attend, and I've gotten a lot of value out of them.

## My Experience So Far

I've built several Jamstack applications now and have thoroughly enjoyed every bit of it. Of all its benefits, the one that resonates most with me is just how fun it is to write apps this way. Creating a React front end that calls an array of serverless functions, all while hosted on the powerful Netlify CDN, was incredibly quick to set up and simple to reason about.

Another point that I haven't touched on yet: if you are a hobby developer who doesn't want to spend much (or any) money, this way of building applications can be mind-bogglingly powerful.

**Some quick price points for you:**

* Basic CDN and Hosting with Netlify: *Free*

* Serverless Functions with AWS Lambda: *Free* (up to one million function calls per month)

* API Setup with AWS API Gateway: *Free* (up to one million API calls per month)

* Data Storage with AWS DynamoDB: *Free* (up to 25 GB of data)

Yes, you read that right. You can build and run a fairly sizable project *completely* for free. I've had two Jamstack applications running live in production with hundreds of users for months, and have yet to be charged a dime. It's so good it almost feels like cheating.

## Next Steps

I am all-in on the Jamstack. As always, there are plenty of areas still for me to expand on and improve.

My front ends are all currently either using Gatsby or Create React App. I am _very_ interested in <a href="https://nextjs.org" target="_blank">Next.js</a>, and will be diving into this heavily in the near future. Netlify was very quick to support Next.js, and I'm psyched about this integration.

I'm also (in my opinion) a bit too much of an AWS purist right now. Don't get me wrong, AWS is fantastic, but I need to diversify a bit. Some of the other options I mentioned above, specifically in the data storage realm, sound quite exciting. Using <a href="https://fauna.com" target="_blank">Fauna</a> as a data store over AWS's DynamoDB is likely in my future.

Further, I want to try out Netlify's own serverless Netlify Functions feature instead of manually building my own Lambda functions within AWS.

That's where I'm at for now. I'm extremely excited about the future of web development with the Jamstack. There are so many cool things happening around developer experience and workflow right now. The future looks incredibly bright, and the Jamstack is leading the charge.