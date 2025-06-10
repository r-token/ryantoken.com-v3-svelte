---
title: Catching Up
description: Modernizing CatchUp with SwiftUI and cleaner code.
date: 2020-05-08
imagePath: /blog-images/catching-up/catchup-icon.png
imageAlt: CatchUp's app icon
tags:
- iOS
- swift
- swiftui
- rewrite
---

<script>
	import ResizableImage from '$lib/components/ResizableImage.svelte'
</script>

CatchUp - Keep in Touch was first released on May 6, 2018. It was the first iOS app I'd ever published to the App Store. Almost exactly two years later, I'm publishing this blog post and releasing an all-new, completely rewritten version of CatchUp.

This post talks about the origins of CatchUp, my decision to start over from scratch, implementing SwiftUI and Core Data, and writing cleaner code. At the end of this post, I do a bit of comparison between the new version and the previous version.

## Getting Started with iOS

When I graduated from college in 2017 I was primarily only familiar with web development. I had never taken a mobile development course in school and knew nothing about Objective-C or Swift. For whatever reason, iOS/mobile development hadn't truly crossed my mind until after graduation. But once I started down that path in late 2017 I never turned back.

I spent the next several months learning the basics of Swift, UIKit, and everything else that comes along with iOS development. Most of that learning came via courses on <a href="https://udemy.com" target="_blank" rel="noreferrer">Udemy</a>, tutorials from <a href="https://hackingwithswift.com" target="_blank" rel="noreferrer">Hacking with Swift</a> and <a href="https://swiftbysundell.com" target="_blank" rel="noreferrer">Swift by Sundell</a>, finding answers on <a href="https://stackoverflow.com" target="_blank" rel="noreferrer">Stack Overflow</a>, and stumbling around in the dark by myself until I happened upon a solution.

When all was said and done, I had my first app. And it worked! Much like <a href="/blog/rebuilding-my-website" target="_blank" rel="noreferrer">version one of my website</a>, it wasn't the greatest app in the world. But it was my app, and I was proud to have built it.

I put it out on the App Store on May 6, 2018, and, to my surprise, it did reasonably well. It even caught some publicity in the form of a feature in Brett Terpstra's <a href="https://systematicpod.com/ep/218" target="_blank" rel="noreferrer">Systematic</a> podcast around the 46:00 minute mark of episode 218.

However, over the following months/years, CatchUp began to suffer from some poor original choices made in the app.

## A Lull in Development

During the first few months after release in 2018, I updated CatchUp semi-regularly with new features and some minor design tweaks. However, as I began evaluating some larger-scope features I wanted to implement, I continued to run into the same problem.

Above all else, my existing code was just plain *bad*.

As I mentioned, I put this out pretty much immediately after I had learned the basics of Swift and iOS development. Knowing the basics != knowing how to make a good application. My naming was poor, many functions were massive and had far too many interspersed responsibilities, there was no consistency in where components were located, I was practically trial-and-erroring my Storyboards, etc. The list could go on and truly envelop this entire post. I'll spare you that pain.

The app was simple and straightforward enough that nearly all of this went unnoticed by users. There was only one noticeable performance issue and it didn't bother me enough at the time. As I said, the app was doing well! It was receiving nearly all 5-star reviews and was featured on a podcast. What more could I ask for?

Lesson learned. Good reviews do not mean a high-quality application. As my plans for the app grew more ambitious, and as I learned more about proper development from my full-time job, the code atrocities I was committing became ever more glaring. I consistently ran into walls caused by poor code quality as I continued to explore implementing more robust features.

I simply lost motivation for the app about a year after release. I didn't want to put forth the necessary effort to fix the underlying problems with the code that were holding it back. And so... In May of 2019, CatchUp was essentially left to die. Then came the email from Apple.

## Starting Over

In March 2020, Apple sent an email to all developers with a reminder that all apps for iPhone or iPad must be built with the iOS 13 SDK or later by June 30. If they weren't, they would no longer be available on the App Store.

CatchUp was my first iOS app; it holds a special place in my heart. But it was poorly written and had become increasingly difficult to maintain because of that.

This brought me to a crossroads of sorts. I saw three options in front of me.

**Option 1: Let it die.**

I honestly did consider this. My initial attempts at building the app with the iOS 13 SDK severely broke a significant amount of functionality. Figuring this out would mean an even bigger maintenance hole to dig myself out of.

**Option 2: Bite the bullet and fix the app, but stick with the core technologies I began with.**

This probably would have taken less time than the option I ended up choosing, but would have been far less fun, and I would have learned so much less.

**Option 3: Start from scratch and rewrite everything.**

Why not just blow away the whole project and start over?

A headlining announcement from WWDC 2019 was the debut of <a href="https://developer.apple.com/swiftui/" target="_blank" rel="noreferrer">SwiftUI</a>. SwiftUI is a brand new framework from Apple that allows you to build user interfaces declaratively. Previously, all of iOS development was done imperatively using <a href="https://developer.apple.com/documentation/uikit" target="_blank" rel="noreferrer">UIKit</a>. I watched the announcement happen live, and was instantly excited and drawn to it. I had initially considered rewriting parts of CatchUp with SwiftUI, but not the entire app.

---

Clearly I picked **Option 3**. SwiftUI marked the dawn of a new era in iOS development, and this was the perfect excuse for me to start a new project and learn how SwiftUI works.

Option 3 also provided the perfect opportunity to address what ended up being one of the worst decisions I made while building the original app: using <a href="https://developer.apple.com/documentation/foundation/userdefaults" target="_blank" rel="noreferrer">UserDefaults</a> as my entire persistence/storage system instead of <a href="https://developer.apple.com/documentation/coredata" target="_blank" rel="noreferrer">Core Data</a>.

Everything in version 1.x of CatchUp uses UserDefaults. I didn't choose UserDefaults because I thought that was the *right* way to do it, I chose UserDefaults simply because that's what I had learned from the Udemy course I took when first learning iOS development. I knew nothing about Core Data or how it worked at the time, and storing everything in UserDefaults has plagued CatchUp from the beginning. Until today.

So there was my path forward. A complete rebuild using SwiftUI over UIKit, and Core Data over UserDefaults. I was ecstatic about the idea, and CatchUp would get to live to see another day.


## Implementing SwiftUI

On the same day that SwiftUI was first announced back in 2019, I started working through Apple's (legitimately wonderful) "<a href="https://developer.apple.com/tutorials/swiftui/tutorials" target="_blank" rel="noreferrer">Learn to Make Apps with SwiftUI</a>" tutorials. I also participated in Hacking with Swift's (also wonderful) <a href="https://hackingwithswift.com/100/swiftui" target="_blank" rel="noreferrer">100 Days of SwiftUI</a> course and read <a href="https://www.hackingwithswift.com/quick-start/swiftui" target="_blank" rel="noreferrer">SwiftUI By Example</a> All of these things together gave me enough knowledge to feel somewhat comfortable with SwiftUI, even though documentation around it was/is not quite there.

In the case of implementing Core Data, it's been around since 2005. There are *plenty* of resources out there to help you learn and understand how it works. SwiftUI was built to play nicely with Core Data as well, so after a few articles and WWDC videos from previous years, I felt good enough on that side of things.

The rewrite started off moving at lightspeed. SwiftUI was **amazing**. Legitimately. I had a full mockup of all the major aspects of the user interface done in just a few hours, and they all looked better than before.

Of course, as expected and as I've heard from others who have used SwiftUI, once you get past the basics and move into an area where not much has been done yet, you find yourself in a strange and unknown world of mystery. Here are a couple of the strangest SwiftUI holes I found myself in.

**SwiftUI Issue #1:**

In CatchUp's 'Preference' screen, there are a few different pickers you might work with. I wanted to run some code every time one of those pickers was interacted with. Sounds simple enough, right? Using SwiftUI's onReceive modifier *does* work, but actually getting the value out the picker when onReceive is triggered is much weirder than you'd think.

You have to attach:
```swift
[self.*someSelection*].publisher.first()
```
to the onReceive call, and then pass in the value from the picker via a closure. I can only hope that this is fixed in a subsequent SwiftUI update because it was maddeningly difficult to figure that out.

Here's the workaround I found on Stack Overflow - the fix is highlighted at the bottom of the picture:

<ResizableImage src="/blog-images/catching-up/catchingup-onReceive.png" altText="A screenshot of SwiftUI onReceive weirdness" />

**SwiftUI Issue #2:**

At the time of writing, you need to manually pass Core Data's <a href="https://developer.apple.com/documentation/coredata/nsmanagedobject/1506677-managedobjectcontext" target="_blank" rel="noreferrer">managed object context</a> from one view to another if you want to be able to use that context in the view you're navigating to.

SwiftUI's <a href="https://developer.apple.com/documentation/swiftui/environment" target="_blank" rel="noreferrer">`@Environment`</a> property wrapper should theoretically allow the managed object context to be accessible from anywhere. You shouldn't need to manually pass it along.

Unfortunately, this appears to be a bug in the version of SwiftUI I built the app on. So I had to use the following workaround to pass in the managed object context.

Here's what I found:

<ResizableImage src="/blog-images/catching-up/catchingup-moc.png" altText="A screenshot of SwiftUI managed object context weirdness" />

There were several other small issues that I bumped into when building this out, but those two took me the longest to find solutions for. In general, though, this is what my browser typically looked like while in the throes of SwiftUI development:

<ResizableImage src="/blog-images/catching-up/catchingup-somanytabs.png" altText="A screenshot of many SwiftUI browser tabs opened at once" />

*So. Many. SwiftUI. Tabs. (shout-out to Hacking with Swift and Swift by Sundell for solving most of my problems)*

There's also a **third issue** that still hasn't been resolved as of this post being published and the app being released. Apple's Contacts frameworks don't work with SwiftUI at all.

To be fair, this is the case with several frameworks since SwiftUI is still so new. However, for most frameworks that don't work natively with SwiftUI, you can simply create a bridge into UIKit. You'd render just those views using UIKit instead of SwiftUI, then come back to SwiftUI when you're done. The interplay between SwiftUI and UIKit was heavily advertised when SwiftUI was debuted in 2019, and, for the vast majority of frameworks, seems to work as expected.

Unfortunately, I've found the bridging between SwiftUI and UIKit for the contact picker to be especially buggy. This is not ideal. The contact picker - which shows up when you tap the 'Add Contacts' button on CatchUp's home screen - is likely the first button you'll ever tap in the app. I don't want a user's first experience with my app to feel buggy and show strange animation glitches.

I filed my first ever <a href="https://developer.apple.com/support/technical" target="_blank" rel="noreferrer">Technical Support Incident (TSI)</a> with Apple, and hope to have a resolution for that bug shortly.

I want to make something especially clear, though: Despite the somewhat bumpy road, I have **loved** working with SwiftUI. It has been a true joy and has significantly improved how I go about creating user interfaces. CatchUp V1 used Storyboards exclusively, and I would be more than OK with never having to create a Storyboard again. I know I could have done my layout programmatically with UIKit, but it's hard to imagine a system as clean and as nice as SwiftUI is proving to be.

## Wrapping Up with Clean Code

As I was putting the finishing touches on version 2.0 of CatchUp, I started reading <a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank" rel="noreferrer">Clean Code</a> by "Uncle" Bob Martin.

I'll tell you what, dear reader, there could not have been a better time for me to read this book.

Since releasing the original app in 2018, I had learned a lot. I knew the SOLID principles, I understood the importance of proper naming and concise logic, etc., but all of that truly sank in on a deeper level upon reading that book on my own.

While reading it, I found that nearly every chapter gave me some new idea on how to organize or clean up my code even further. It was a fantastic experience. I went from code, to book, to code, to book, and back and forth again and again until I was satisfied with the app as a whole.

If you haven't read it, and you want to be a better programmer, I can't recommend it enough. Even being over a decade old at this point, I found it incredibly valuable.

Before reading it, CatchUp 2.0 was a massive improvement in underlying code quality simply from having gained more experience and a greater understanding of what "good" code is. After reading it, I am quite proud of the quality of code I've written. To be sure, there is more work to be done and more improvements to be made. But to have rewritten an entire app from scratch, leave all the cruft and bad ideas behind, and come out on the other end with what I have now is immensely satisfying.

Here's a single point of reference for you: the difference in the number of total lines of code from version 1.1.2 to version 2.0.0, one update (and one year) later.

Lines of code is by no means a proper metric for overall code quality, but I think it represents how much simplification I was able to do for what is, by all accounts, an app that has *more* functionality than the previous version.

**Total lines of code in CatchUp version 1.1.2:** 2,924

**Total lines of code in CatchUp version 2.0.0:** 1,905

*Lines of code counted with <a href="https://github.com/AlDanial/cloc" target="_blank" rel="noreferrer">cloc</a>*

Over 1,000 fewer lines of code! For an app that is more advanced and has more functionality. Talk about a significant win.

## What's Next

With SwiftUI and cleaner code, CatchUp is ready for the new era of iOS development. I plan to write all of my personal apps in SwiftUI going forward unless there is something that makes it physically impossible to do so.

I'm proud of the product that's available out there now, and look forward to continuing to build on the modern foundation it has today.

CatchUp is completely free with no ads. Download the all-new CatchUp – Keep in Touch here:

<a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 125px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1526515200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>