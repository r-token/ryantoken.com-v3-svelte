---
title: CatchUp v3
description: Revisiting my first iOS app with a refreshed design and new features.
date: 2024-04-03
imagePath: /blog-images/catchup-v3/catchup-icon.png
imageAlt: CatchUp v3
tags:
- iOS
- swiftui
- swiftdata
---

<script>
	import ResizableIcon from '$lib/components/ResizableIcon.svelte'
</script>

<a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" target="_blank" rel="noreferrer">
	<ResizableIcon src="/blog-images/catchup-v3/catchup-icon.png" altText="CatchUp App Icon" />
</a>

I first launched <a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" target="_blank" rel="noreferrer">CatchUp - Keep in Touch</a> for iOS in May 2018. It was the first app I'd ever released and it was, from a code perspective, objectively pretty bad.

It's now April of 2024 and somehow, despite years of neglect while building <a href="https://apps.apple.com/us/app/hot-local-food/id1621818779" target="_blank" rel="noreferrer">three</a> <a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" rel="noreferrer">other</a> <a href="https://apps.apple.com/us/app/chat-by-storyboard/id1662743814" target="_blank" rel="noreferrer">apps</a>, CatchUp still does relatively well on the App Store.

CatchUp is like a first child for me. It marked the beginning of a journey that has shaped my life and career. I still love and use the app weekly. It still helps me stay in touch with those that matter most.

However, due to the aforementioned neglect, it has had obvious bugs and missing features for quite a while. That all changes with CatchUp v3, out today.

## CatchUp v3

CatchUp v3 is a significant improvement across every corner of the app. The core functionality remains - you can still add your contacts and set recurring reminders to CatchUp with people - but everything around it has changed.

First, there's a new auto-updating grid of your next CatchUps. I've found this helpful as I plan my week and get a feel for who I should remember to get in touch with. It looks like this:

<ResizableIcon src="/blog-images/catchup-v3/next-catchups.jpeg" altText="A screenshot of the Next CatchUps grid" />

I've also revamped the contact detail screen's design and removed the “Notification Preference” pop-up sheet entirely. Setting your notification preference for a contact now lives fully within the contact detail screen. There's no "Save" step anymore either. The app auto-saves your notification preference every time you change it.

That new contact detail screen looks like this:

<ResizableIcon src="/blog-images/catchup-v3/detail-screen.jpeg" altText="A screenshot of the contact detail screen" />

All controls for this contact now live inside this single screen. Additionally, there's a nice new "Next CatchUp" row, which shows the next time you'll get a notification to CatchUp with this person.

## Longstanding Feature Requests

Those are the primary UI improvements, though there are several more UI tweaks here and there that you might notice.

The rest of v3's changes address longstanding feature requests. For example:
* There are now orange unread indicators on the contact rows if it's time to CatchUp with them
* Pulling down on the home screen fetches the latest contact picture and information for all of your selected contacts
  * Previously you had to delete and re-add the contact to update their information
* There is now automatic cloud syncing, so your contacts and notification preferences stay up-to-date across iPhone, iPad, and Mac
  * This involved a fun migration to <a href="https://developer.apple.com/documentation/swiftdata" target="_blank" rel="noreferrer">SwiftData</a>, which dramatically simplified my local storage code

## Still Free with No Ads

CatchUp is, and always will be, completely free with no ads. The tiny bits of money I make from this app come from the in-app Tip Jar. This is a passion project that I genuinely find helpful in my day-to-day life. I do not, nor do I have any incentive to, store your data on my servers or use your data in any way.

I hope that you use the app and find it valuable. If you do, please consider supporting development by leaving a tip in the app. I really do find that motivating. Alternatively, you can <a href="https://www.buymeacoffee.com/ryantoken" class="w-2/3 xl:w-1/3 lg:w-1/3 max-w-xs" target="_blank" rel="noreferrer">buy me a coffee</a>!

<div class="flex items-stretch mb-8">
	<a href="https://www.buymeacoffee.com/ryantoken" class="w-2/3 xl:w-1/3 lg:w-1/3 max-w-xs" target="_blank" rel="noreferrer">
		<img src="/blog-images/bmc-button.png" alt="Buy Me a Coffee button" loading="lazy" decoding="async" class="rounded-3xl" />
	</a>
</div>

## Download

Thank you for reading, and thank you for your interest in CatchUp - Keep in Touch. Feel free to reach out via [email](mailto:ryantoken13@gmail.com) with any questions or comments.

CatchUp v3 is available on iOS, iPadOS, and macOS. It requires iOS 17. You can download it on the App Store today:
<a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 125px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1526515200" alt="Download CatchUp v3 on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>