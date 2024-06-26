---
title: Hot Local Food for iOS
description: It's like Tinder, but for food, and it already likes you back.
date: 2023-01-26
imagePath: /blog-images/hot-local-food/hlf-icon-square.png
imageAlt: Hot Local Food App Icon for iOS
tags:
- iOS
- swift
- swiftui
---

<script>
	import ResizableIcon from '$lib/components/ResizableIcon.svelte'
	import ResizableImage from '$lib/components/ResizableImage.svelte'
</script>

Think Tinder, but for food, and it already likes you back. Say hello to **Hot Local Food**. Free, hot, and available on iOS 15 and newer.

<ResizableIcon src="/blog-images/hot-local-food/hlf-icon-rounded.png" altText="Hot Local Food's app icon" url="https://apps.apple.com/us/app/hot-local-food/id1621818779" />

***Find love, then eat it***

Want something to eat or drink but don't know where to go? Want to explore the local scene nearby or far away? Just want to look at some good pictures of good food? Hot Local Food is there for you.

With a photo-heavy, Tinder-style swipe interface, an extensive library of restaurants powered by <a href="https://fusion.yelp.com/" target="_blank" rel="noreferrer">Yelp</a>, and slick features built on top, Hot Local Food will help you find exactly what you need.

<ResizableImage src="/blog-images/hot-local-food/hlf-primary-light.png" altText="UI Screenshots for Hot Local Food" />

Features:
* High-quality photos of each location (powered by Yelp)
* Filter places by category, price, and location
* Save places for later by adding them to a custom list
* Quick shortcuts to make reservations (<a href="https://www.opentable.com/" target="_blank" rel="noreferrer">OpenTable</a>), order delivery or pickup (<a href="https://www.doordash.com/" target="_blank" rel="noreferrer">DoorDash</a> and <a href="https://www.ubereats.com" target="_blank" rel="noreferrer">Uber Eats</a>), and find directions (<a href="https://www.apple.com/maps/" target="_blank" rel="noreferrer">Apple Maps</a>)
* Easy access to information about the place, including its phone number, address, hours, and whether or not it's currently open

Personally, I've gotten the most use out of the location filter.

<ResizableIcon src="/blog-images/hot-local-food/hlf-location-light.png" altText="Location Filter screen for Hot Local Food" />

It's a simple map for v1.0 of the app, and will likely be expanded upon, but the ability to pan around the map to see what's available in places I'm interested in has been invaluable.

My wife and I recently moved to Denver. Before moving we used the app to check out fun bars and restaurants close to where we would be living and in the surrounding areas. It was a fun exercise and we've repeated it when getting ready to travel for weddings, vacations, and other trips. We also often use it on an average weekday when we want to go out somewhere.

Building this app has been a labor of love by me and a good friend – Carter Krafft. Carter has been the driver behind the idea and the overall concept, while I've done the implementation work and taken some creative liberties with the design. It has been a blast to build, and we hope you get as much out of it as we have.

Technical notes and privacy:
* 100% of Hot Local Food is written in Swift and SwiftUI
* I do not store ***any*** of your data on my servers
* I do use iCloud to sync your saved Lists and swipes data between iOS devices
* The free version of the app uses <a href="https://developers.google.com/admob/ios/data-disclosure" target="_blank" rel="noreferrer">Google AdMob</a>, which collects some very basic data - you can pay to remove the ads


<a href="https://apps.apple.com/us/app/hot-local-food/id1621818779?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 125px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1674691200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>

## Personal Notes

If you're still here, hello there! This is just a bit more background on how the app came to be.

As is tradition, after launching <a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" rel="noreferrer">Outrank for iOS</a> in October of 2021, I moved away from iOS development for a while. This is not new behavior for me. I try to stay active in three areas of software development: iOS, front-end web, and back-end web; but I can only focus on two at a time. I'm always active in back-end web because that's what I focus on for work, but then I have to choose which one to spend my free time on: front-end web or iOS. So, naturally, once Outrank for iOS was out and stable, it was time to re-up my front-end skills. That led to <a href="/blog/nuxt-3-vs-sveltekit" rel="norefferer">rewriting my website in SvelteKit (and also Nuxt 3?)</a>.

But iOS came calling again, as it always does. This time in the form of one of my very good friends. Carter and I went to college together and still frequently bounce ideas off one another. One of those ideas was a "Tinder for food" app. The initial idea came at a bar over three years ago when Carter and I, as well as another one of our friends (Matt Rechtien), were talking about app ideas.

Three years, two app icons, one pandemic, and multiple starts and stops later - we have our app. It's all SwiftUI, it's clean and straightforward, it's not (currently) expensive to run, and it's ready for the world. I'm so excited about it.

We'd love it if you tried it out. If you do, and you have feedback - positive or negative - we'd be honored to hear from you. Please <a href="mailto:hotlocalfood@gmail.com?subject=Blog Post Feedback - Hot Local Food" target="_blank" rel="noreferrer">email us</a>.

<a href="https://apps.apple.com/us/app/hot-local-food/id1621818779?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 125px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1674691200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>