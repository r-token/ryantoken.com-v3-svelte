<script>
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Header from '$lib/components/Header.svelte'
	import ResizableImage from '$lib/components/ResizableImage.svelte'
	
	import bmcLogo from '$lib/assets/site-images/bmc-button.png'
	import outrankIcon from '$lib/assets/site-images/outrank/outrank-icon.png'
	import outrankRankings from '$lib/assets/site-images/outrank/outrank-rankings.png'
	import outrankDetail from '$lib/assets/site-images/outrank/outrank-detail.png'
	import outrankCompare from '$lib/assets/site-images/outrank/outrank-compare.png'
	import outrankSettings from '$lib/assets/site-images/outrank/outrank-settings.png'
	import hurricastWebsite from '$lib/assets/site-images/hurricast/hurricast-website.png'
	import eagleCrestHome from '$lib/assets/site-images/eaglecrest-home.png'
	import dttvWebsite from '$lib/assets/site-images/dttv-website.png'
	import catchupIcon from '$lib/assets/site-images/catchup/catchup-icon.png'
</script>

<svelte:head>
	<title>Ryan Token - Projects</title>
	
	<meta name="description" content="Ryan's projects" />
	<meta name="keywords" content="Ryan Token, Projects, Serverless, Jamstack, iOS, Web, Javascript, AWS, Cloud" />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content="Ryan Token - Projects" />
	<meta property="og:description" content="Ryan's projects" />
	<meta property="og:url" content="https://ryantoken.com/projects" />
	<meta property="og:image" content="https://ryantoken.com/android-chrome-512x512.png" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ryan Token - Projects" />
	<meta name="twitter:description" content="Ryan's projects" />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content="https://ryantoken.com/android-chrome-512x512.png" />
</svelte:head>

<div>
	<LargeHeader text="Projects" />

	<h1 class="italic mb-6 text-gray-500 dark:text-gray-400">
		What I'm currently working on in my spare time. You can support my work on <a href="https://patreon.com/ryantoken" target="_blank">Patreon</a> or <a href="https://www.buymeacoffee.com/ryantoken" target="_self">Buy Me a Coffee</a>.
	</h1>

	<div class="flex items-stretch mb-8">
		<a href="https://www.buymeacoffee.com/ryantoken" class="w-2/3 xl:w-1/3 lg:w-1/3 max-w-xs" target="_blank">
			<img src={bmcLogo} alt="Buy Me a Coffee button" loading="lazy" decoding="async" class="rounded-3xl" />
		</a>
	</div>

	<hr class="mb-8" />

	<Header text="Outrank"/>

	<div class="flex items-stretch mb-4">
		<ResizableImage src={outrankIcon} altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
	</div>

	<p class="mb-4">Outrank is an app to help you check how your favorite FBS college football teams stack up against the rest.</p>

	<p class="mb-4">Available on iOS, iPadOS, and macOS (on Apple Silicon Macs), it tracks forty-seven different stats for all 131 Division One FBS teams and lets you dissect and compare them however you'd like. You can even compare two teams side-by-side to preview an intriguing matchup.</p>

	<div class="flex items-stretch mb-4 max-w-5xl">
		<ResizableImage src={outrankRankings} altText="Outrank's rankings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
		<ResizableImage src={outrankDetail} altText="Outrank's details screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
		<ResizableImage src={outrankCompare} altText="Outrank's comparison screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
		<ResizableImage src={outrankSettings} altText="Outrank's settings screen" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
	</div>

	<p class="mb-4">Outrank is built with 100% <a href="https://developer.apple.com/xcode/swiftui/" target="_blank">SwiftUI</a>.</p>

	<p class="mb-4">On the back-end, it leverages <a href="https://developer.apple.com/icloud/cloudkit/" target="_blank">CloudKit</a> as well as various AWS services including <a href="https://aws.amazon.com/dynamodb/" target="_blank">DynamoDB</a>,  <a href="https://aws.amazon.com/api-gateway/" target="_blank">API Gateway</a>, and  <a href="https://aws.amazon.com/lambda/" target="_blank">Lambda</a>.</p>

	<p class="mb-8">You can follow <a href="https://twitter.com/OutrankApp" target="_blank">Outrank on Twitter</a>, and you can read my blog post about building Outrank <a href="https://www.ryantoken.com/blog/introducing-outrank/" target="_blank">here</a>.</p>

	<a class="mb-8" href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:270px;height:80px;background-size:contain;"></a>

	<hr class="mb-8" />

	<Header text="The Golden Hurricast" />

	<p class="mb-4"><a href="https://www.thegoldenhurricast.com" target="_blank">The Golden Hurricast</a> is the leading independent podcast and blog covering Golden Hurricane athletics at The University of Tulsa.</p>

	<p>The website was built with <a href="https://reactjs.org" target="_blank">React</a>, <a href="https://graphql.org/" target="_blank">GraphQL</a>, and <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>.</p>

	<div class="max-w-5xl">
		<ResizableImage src={hurricastWebsite} altText="The Golden Hurricast home page" url="https://thegoldenhurricast.com"/>
	</div>

	<p class="mb-8">I built and maintain the website, as well as co-host the podcast and contribute to blog posts. All of the content produced by The Golden Hurricast is completely free.</p>

	<hr class="mb-8" />

	<Header text="Eagle Crest STL"/>

	<p class="mb-4"><a href="https://eaglecreststl.org" target="_blank">Eagle Crest STL</a> is a fully serverless web app tailor-made for the Eagle Crest HOA in St. Louis, MO.</p>

	<p class="mb-4">It allows members and trustees to easily send messages, make requests, give announcements, view documents, and see a list of all homeowners in the HOA.</p>

	<div class="mb-4 max-w-5xl">
		<ResizableImage src={eagleCrestHome} altText="Eagle Crest STL home page" url="https://eaglecreststl.org"/>
	</div>

	<p class="mb-4">It's a Jamstack app built with <a href="https://reactjs.org" target="_blank">React</a> on the front end, <a href="https://aws.amazon.com" target="_blank">AWS</a> as the middle tier and the back end, and is hosted on <a href="https://www.netlify.com" target="_blank">Netlify</a>.</p>

	<p class="mb-8">AWS services used for this include S3, Lambda, API Gateway, DynamoDB, SES, Cognito, Amplify, and more.</p>

	<hr class="mb-8" />

	<Header text="Dashing Through the 'Ville"/>

	<p class="mb-4"><a href="https://dashingthroughtheville.com" target="_blank">Dashing Through the 'Ville</a> is a city-wide scavenger hunt held throughout Bartlesville, Oklahoma.</p>

	<p class="mb-4">Proceeds from the event benefitted Youth and Family Services of Washington County, and it helped them raise a total of $15,000.</p>

	<p class="mb-4">The web app is fully serverless - built with <a href="https://reactjs.org" target="_blank">React</a> on the front end, <a href="https://aws.amazon.com" target="_blank">AWS</a> as the middle tier and back end, and hosted on <a href="https://www.netlify.com" target="_blank">Netlify</a>. The AWS services used include Lambda, API Gateway, DynamoDB, SES, Cognito, Amplify, IAM, and more.</p>

	<div class="mb-4 max-w-5xl">
		<ResizableImage src={dttvWebsite} altText="Dashing Through the 'Ville game page" url="https://dashingthroughtheville.com"/>
	</div>

	<p class="mb-4">I was the sole developer for this project. As a volunteer, I ended up building the entire application in a span of three weeks.</p>

	<p class="mb-8">We had about three hundred users throughout the city and had no incidents throughout the event.</p>

	<hr class="mb-8"/>

	<Header text="CatchUp - Keep in Touch"/>

	<div class="flex items-stretch mb-4">
		<ResizableImage src={catchupIcon} altText="CatchUp's app icon" url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550"/>
	</div>

	<p class="italic mb-4">*Featured on Brett Terpstra's <a href="https://systematicpod.com/ep/218" target="_blank">Systematic</a> Podcast as one of his 'Top 3' picks (around 46:21)</p>

	<p class="mb-4">My first public-facing iOS app! First released in May of 2018, I completely rewrote it in May of 2020 using <a href="https://developer.apple.com/xcode/swiftui/" target="_blank">SwiftUI</a>, <a href="https://developer.apple.com/documentation/coredata" target="_blank">Core Data</a>, and several other improvements.</p>

	<p class="mb-4">CatchUp helps you stay in touch with the people who matter most. You can set reminders for the contacts you choose, and get notified when it's time to CatchUp with them again.</p>

	<p class="mb-4">CatchUp is free with no ads, but has a tip jar if you want to buy me a coffee ☕</p>

	<p class="mb-8">Read my blog post about modernizing CatchUp <a href="https://ryantoken.com/blog/catching-up" target="_blank">here</a>.</p>

	<a class="mb-8" href="https://itunes.apple.com/us/app/catchup-keep-in-touch/id1358023550" target="_blank" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:270px;height:80px;background-size:contain;"></a>

</div>