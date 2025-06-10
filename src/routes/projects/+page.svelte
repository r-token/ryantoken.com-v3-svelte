<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Header from '$lib/components/Header.svelte'
	import ResizableImage from '$lib/components/ResizableImage.svelte'
	import StandardParagraph from '$lib/components/StandardParagraph.svelte'
	
	import bmcLogo from '$lib/assets/site-images/bmc-button.png'
	import hlfIcon from '$lib/assets/site-images/hot-local-food/hlf-icon.png'
	import hlfPrimary from '$lib/assets/site-images/hot-local-food/hlf-primary-light.png'
	import outrankIcon from '$lib/assets/site-images/outrank/outrank-icon-rounded.png'
	import outrankRankings from '$lib/assets/site-images/outrank/outrank-rankings.png'
	import outrankDetail from '$lib/assets/site-images/outrank/outrank-detail.png'
	import outrankCompare from '$lib/assets/site-images/outrank/outrank-compare.png'
	import outrankSettings from '$lib/assets/site-images/outrank/outrank-settings.png'
	import hurricastWebsite from '$lib/assets/site-images/hurricast/hurricast-website.png'
	import eagleCrestHome from '$lib/assets/site-images/eaglecrest-home.png'
	import dttvWebsite from '$lib/assets/site-images/dttv-website.png'
	import catchupIcon from '$lib/assets/site-images/catchup/catchup-icon.png'
	import catchupScreenshot from '$lib/assets/site-images/catchup/catchup-home.jpeg'
	import serverlessSwiftIcon from '$lib/assets/site-images/serverless-swift.png'
</script>

<svelte:head>
	<title>Ryan Token - Projects</title>
	
	<meta name="description" content="Ryan's projects" />
	<meta name="keywords" content="Ryan Token, Projects, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud, Hot, Local, Food, Hot Local Food, Outrank, Golden, Hurricast, Golden Hurricast, CatchUp, SwiftUI, Swift" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token - Projects" />
	<meta property="og:description" content="Ryan's projects" />
	<meta property="og:url" content="https://www.ryantoken.com/projects" />
	<meta property="og:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token - Projects" />
	<meta name="twitter:description" content="Ryan's projects" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://www.ryantoken.com/android-chrome-512x512.png" />
	
	<link rel="canonical" href="https://www.ryantoken.com/projects">
</svelte:head>

<div>
	<LargeHeader text="Projects" />

	<h3 class="italic mb-6 text-gray-500 dark:text-gray-400">
		What I'm currently working on in my spare time. You can support my work on <a class="text-indigo-500 dark:text-sky-300" href="https://patreon.com/thegoldenhurricast" target="_blank" rel="noreferrer">Patreon</a> or <a class="text-indigo-500 dark:text-sky-300" href="https://www.buymeacoffee.com/ryantoken" target="_blank" rel="noreferrer">Buy Me a Coffee</a>.
	</h3>

	<div class="flex items-stretch mb-8">
		<a href="https://www.buymeacoffee.com/ryantoken" class="w-2/3 xl:w-1/3 lg:w-1/3 max-w-xs" target="_blank" rel="noreferrer">
			<img src={bmcLogo} alt="Buy Me a Coffee button" loading="lazy" decoding="async" class="rounded-3xl" />
		</a>
	</div>
	
	<Header text="Serverless Swift"/>
	
	<div class="flex items-stretch mb-4">
		<ResizableImage src={serverlessSwiftIcon} altText="Serverless Swift icon" url="/blog/serverless-swift"/>
	</div>
	
	<StandardParagraph>I built a serverless back-end system on AWS written entirely in Swift that remotely controls the Philips Hue bulbs in my house whenever my favorite sports teams score or win. It runs on AWS services including Lambda, DynamoDB, SQS, and EventBridge.</StandardParagraph>
	
	<StandardParagraph>You can read my blog post about it <a href="/blog/serverless-swift">here</a>, and you can view the full source code for this project on GitHub: <a href ="https://github.com/r-token/sports-home-automation-swift" target="_blank" rel="noreferrer">https://github.com/r-token/sports-home-automation-swift</a></StandardParagraph>
	
	<br />
	
	<hr class="mb-8"/>
	
	<Header text="CatchUp - Keep in Touch"/>
	
	<div class="flex items-stretch mb-4">
		<ResizableImage src={catchupIcon} altText="CatchUp's app icon" url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550"/>
	</div>
	
	<p class="italic mb-4">*Featured on Brett Terpstra's <a href="https://systematicpod.com/ep/218" target="_blank" rel="noreferrer">Systematic</a> Podcast as one of his 'Top 3' picks (around 46:21)</p>
	
	<StandardParagraph>My first public-facing iOS app! First released in May 2018. I completely rewrote it in May of 2020 using <a href="https://developer.apple.com/swiftui/" target="_blank" rel="noreferrer">SwiftUI</a> and <a href="https://developer.apple.com/documentation/coredata" target="_blank" rel="noreferrer">Core Data</a>, then shipped a large update in 2024 with <a href="https://developer.apple.com/documentation/swiftdata" target="_blank" rel="noreferrer">SwiftData</a> and <a href="/blog/catchup-v3" target="_blank" rel="noreferrer">several new features</a>. It also runs well on iPadOS and macOS and syncs data between them.</StandardParagraph>
	
	<StandardParagraph>CatchUp helps you stay in touch with the people who matter most. You can set reminders for the contacts you choose, and get notified when it's time to CatchUp with them again.</StandardParagraph>
	
	<div class="flex items-stretch mb-4">
		<ResizableImage src={catchupScreenshot} altText="CatchUp screenshot" url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550"/>
	</div>
	
	<StandardParagraph>CatchUp is free with no ads, but has an in-app tip jar if you want to buy me a coffee ☕</StandardParagraph>
	
	<StandardParagraph extraClasses="mb-4">Read my blog post about modernizing CatchUp with SwiftUI <a href="/blog/catching-up" target="_blank" rel="noreferrer">here</a> or my latest post about releasing version 3.0 <a href="/blog/catchup-v3" target="_blank" rel="noreferrer">here</a>.</StandardParagraph>
	
	<a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1526515200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
	
	<br /> <br /> <br />
	
	<hr class="mb-8" />
	
	<Header text="Outrank"/>
	
	<div class="flex items-stretch mb-4">
		<ResizableImage src={outrankIcon} altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
	</div>
	
	<StandardParagraph>Outrank is an app to help you check how your favorite FBS college football teams stack up against the rest.</StandardParagraph>
	
	<StandardParagraph>Available on iOS, iPadOS, and macOS (on Apple Silicon Macs), it tracks forty-seven different stats for all 131 Division One FBS teams and lets you dissect and compare them however you'd like. You can even compare two teams side-by-side to preview an intriguing matchup.</StandardParagraph>
	
	<div class="flex items-stretch mb-4 max-w-5xl">
		<ResizableImage src={outrankRankings} altText="Outrank's rankings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
		<ResizableImage src={outrankDetail} altText="Outrank's details screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
		<ResizableImage src={outrankCompare} altText="Outrank's comparison screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
		<ResizableImage src={outrankSettings} altText="Outrank's settings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
	</div>
	
	<StandardParagraph>Outrank is built with 100% <a href="https://developer.apple.com/swiftui/" target="_blank" rel="noreferrer">SwiftUI</a>.</StandardParagraph>
	
	<StandardParagraph>On the back-end, it leverages <a href="https://developer.apple.com/icloud/cloudkit/" target="_blank" rel="noreferrer">CloudKit</a> as well as various AWS services including <a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noreferrer">DynamoDB</a>,  <a href="https://aws.amazon.com/api-gateway/" target="_blank" rel="noreferrer">API Gateway</a>, and  <a href="https://aws.amazon.com/lambda/" target="_blank" rel="noreferrer">Lambda</a>.</StandardParagraph>
	
	<p class="mb-8">You can follow <a href="https://twitter.com/OutrankApp" target="_blank" rel="noreferrer">Outrank on Twitter</a>, and you can read my blog post about building Outrank <a href="https://www.ryantoken.com/blog/introducing-outrank/" target="_blank" rel="noreferrer">here</a>.</p>
	
	<a href="https://apps.apple.com/us/app/outrank/id1588983785?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1635206400" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
	
	<br /> <br /> <br />
	
	<hr class="mb-8" />
	
	<Header text="Hot Local Food"/>
	
	<div class="flex items-stretch mb-4">
		<ResizableImage src={hlfIcon} altText="Hot Local Food's app icon" url="https://apps.apple.com/us/app/hot-local-food/id1621818779"/>
	</div>
	
	<StandardParagraph>Think Tinder, but for food, and it already likes you back. Say hello to <b>Hot Local Food</b>. Free, hot, and available on iOS 15 and newer.</StandardParagraph>
	
	<StandardParagraph>Want something to eat or drink but don't know where to go? Want to explore the local scene nearby or far away? Just want to look at some good pictures of good food? Hot Local Food is there for you.</StandardParagraph>
	
	<StandardParagraph>With a photo-heavy, Tinder-style swipe interface, an extensive library of restaurants powered by <a href="https://fusion.yelp.com/" target="_blank" rel="noreferrer">Yelp</a>, and slick features built on top, Hot Local Food will help you find exactly what you need.</StandardParagraph>
	
	<ResizableImage src={hlfPrimary} altText="Hot Local Food screenshots" url="https://apps.apple.com/us/app/hot-local-food/id1621818779"/>
	
	<br />
	
	<p>Features:</p>
	<ul class="list-disc ml-8 mb-4">
		<li>When you’re out, see restaurants nearby and swipe until you find your perfect match</li>
		<li>Traveling somewhere? Get to know what’s good by swiping in the area you plan to visit</li>
		<li>Filter by price, location, and categories</li>
		<li>Create custom lists to save places for later</li>
		<li>Access quick shortcuts to make reservations, order delivery or pickup, and find directions</li>
	</ul>
	
	<StandardParagraph>For vegans, carnivores, and everyone in between, Hot Local Food is the best place to find what you love, so you can eat it.</StandardParagraph>
	
	<StandardParagraph>Hot Local Food is built with 100% <a href="https://developer.apple.com/swiftui/" target="_blank" rel="noreferrer">SwiftUI</a>, and it uses <a href="https://developer.apple.com/icloud/cloudkit/" target="_blank" rel="noreferrer">CloudKit</a> as a back end to enable syncing between iOS devices.</StandardParagraph>
	
	<p class="mb-8">You can follow <a href="https://twitter.com/HotLocalFood" target="_blank" rel="noreferrer">Hot Local Food on Twitter</a>, check out its <a href="https://www.hotlocalfood.app" target="_blank" rel="noreferrer">marketing website</a>, or read my <a href="/blog/hot-local-food/" rel="noreferrer">blog post</a> about building it.</p>
	
	<a href="https://apps.apple.com/us/app/hot-local-food/id1621818779?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1674691200" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
	
	<br /> <br /> <br />

	<hr class="mb-8" />

	<Header text="The Golden Hurricast" />

	<StandardParagraph><a href="https://www.thegoldenhurricast.com" target="_blank" rel="noreferrer">The Golden Hurricast</a> is the leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa.</StandardParagraph>

	<StandardParagraph>The website was built with <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>, <a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a>, and <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby</a>.</StandardParagraph>

	<div class="max-w-5xl">
		<ResizableImage src={hurricastWebsite} altText="The Golden Hurricast home page" url="https://thegoldenhurricast.com"/>
	</div>

	<StandardParagraph extraClasses='mb-8'>I built and maintain the website, as well as co-host the podcast and contribute to blog posts. All of the content produced by The Golden Hurricast is completely free.</StandardParagraph>

	<hr class="mb-8" />

	<Header text="Eagle Crest STL"/>

	<StandardParagraph><a href="https://eaglecreststl.org" target="_blank" rel="noreferrer">Eagle Crest STL</a> is a fully serverless web app tailor-made for the Eagle Crest HOA in St. Louis, MO.</StandardParagraph>

	<StandardParagraph>It allows members and trustees to easily send messages, make requests, give announcements, view documents, and see a list of all homeowners in the HOA.</StandardParagraph>

	<div class="mb-4 max-w-5xl">
		<ResizableImage src={eagleCrestHome} altText="Eagle Crest STL home page" url="https://eaglecreststl.org"/>
	</div>

	<StandardParagraph>It's a Jamstack app built with <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a> on the front end, <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">AWS</a> as the middle tier and the back end, and is hosted on <a href="https://www.netlify.com" target="_blank" rel="noreferrer">Netlify</a>.</StandardParagraph>

	<StandardParagraph extraClasses='mb-8'>AWS services used for this include S3, Lambda, API Gateway, DynamoDB, SES, Cognito, Amplify, and more.</StandardParagraph>

	<hr class="mb-8" />

	<Header text="Dashing Through the 'Ville"/>

	<StandardParagraph><a href="https://dashingthroughtheville.com" target="_blank" rel="noreferrer">Dashing Through the 'Ville</a> is a city-wide scavenger hunt held throughout Bartlesville, Oklahoma.</StandardParagraph>

	<StandardParagraph>Proceeds from the event benefitted Youth and Family Services of Washington County, and it helped them raise a total of $15,000.</StandardParagraph>

	<StandardParagraph>The web app is fully serverless - built with <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a> on the front end, <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">AWS</a> as the middle tier and back end, and hosted on <a href="https://www.netlify.com" target="_blank" rel="noreferrer">Netlify</a>. The AWS services used include Lambda, API Gateway, DynamoDB, SES, Cognito, Amplify, IAM, and more.</StandardParagraph>

	<div class="mb-4 max-w-5xl">
		<ResizableImage src={dttvWebsite} altText="Dashing Through the 'Ville game page" url="https://dashingthroughtheville.com"/>
	</div>

	<StandardParagraph>I was the sole developer for this project. As a volunteer, I ended up building the entire application in a span of three weeks.</StandardParagraph>

	<StandardParagraph extraClasses='mb-4'>We had about three hundred users throughout the city and had no incidents throughout the event.</StandardParagraph>
	
	<br />

</div>