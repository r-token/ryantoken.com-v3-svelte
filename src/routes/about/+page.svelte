<script>
  import LargeHeader from '$lib/components/LargeHeader.svelte'
  import Subheader from '$lib/components/Subheader.svelte'
  import ResizableImage from '$lib/components/ResizableImage.svelte'
  import StandardParagraph from '$lib/components/StandardParagraph.svelte'
  
  import profileImage from '$lib/assets/site-images/profile.jpg'
  import hlfIcon from '$lib/assets/site-images/hot-local-food/hlf-icon.png'
  import outrankIcon from '$lib/assets/site-images/outrank/outrank-icon-rounded.png'
  import hurricastIcon from '$lib/assets/site-images/hurricast/hurricast-icon-rounded.png'
</script>

<svelte:head>
	<title>Ryan Token - About</title>
  
  <meta name="description" content="About Ryan" />
  <meta name="keywords" content="Ryan Token, About Ryan, Serverless, Jamstack, iOS, Web, Javascript" />
  <meta name="author" content="Ryan Token" />
  
  <meta property="og:title" content="Ryan Token - About" />
  <meta property="og:description" content="About Ryan" />
  <meta property="og:url" content="https://www.ryantoken.com/about" />
  <meta property="og:image" content="https://res.cloudinary.com/dcu4ssa4m/image/upload/v1677081894/profile-square_veahoc.jpg" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Ryan Token - About" />
  <meta name="twitter:description" content="About Ryan" />
  <meta name="twitter:site" content="@_ryantoken" />
  <meta name="twitter:image" content="https://res.cloudinary.com/dcu4ssa4m/image/upload/v1677081894/profile-square_veahoc.jpg" />
  
  <link rel="canonical" href="https://www.ryantoken.com/about">
</svelte:head>

<div>
  <LargeHeader text="About"/>

  <Subheader text="A bit about me."/>

  <img src={profileImage} alt="Ryan Token" loading="lazy" decoding="async" class="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 max-w-[320px] rounded-xl mb-4"/>

  <StandardParagraph>
    Hi, I'm Ryan. You can find me writing <a href="https://github.com/r-token" target="_blank" rel="noreferrer">code</a>, running my <a href="https://thegoldenhurricast.com" target="_blank" rel="noreferrer">podcast</a>, or watching my <a href="https://tulsahurricane.com" target="_blank" rel="noreferrer">team</a>.
  </StandardParagraph>

  <StandardParagraph>
    My latest projects include <a href="https://apps.apple.com/us/app/hot-local-food/id1621818779" target="_blank" rel="noreferrer">Hot Local Food for iOS</a>, <a href="https://thegoldenhurricast.com" target="_blank" rel="noreferrer">The Golden Hurricast</a>, and <a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank" rel="noreferrer">Outrank for iOS and iPadOS</a>.
  </StandardParagraph>

  <div class="flex items-stretch mb-4">
    <ResizableImage src={hlfIcon} altText="Hot Local Food's app icon" url="https://apps.apple.com/us/app/hot-local-food/id1621818779"/>
    <ResizableImage src={hurricastIcon} altText="The Golden Hurricast's logo" url="https://thegoldenhurricast.com"/>
    <ResizableImage src={outrankIcon} altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
  </div>

  <StandardParagraph>
    I'm currently into native Apple platform development (iOS and macOS), serverless web development, podcasting, and blogging.
  </StandardParagraph>

  <StandardParagraph>
    My favorite programming language is <a href="https://www.swift.org" target="_blank" rel="noreferrer">Swift</a>, I tend to run my projects on <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">AWS</a>, and I'm always looking to learn something new.
  </StandardParagraph>

  <StandardParagraph>
    I'm also a die-hard fan of the <a href="https://tulsahurricane.com" target="_blank" rel="noreferrer">Tulsa Golden Hurricane</a> and college sports in general.
  </StandardParagraph>

  <StandardParagraph>
    You can find me online in the following places:
  </StandardParagraph>

  <ul class="list-disc ml-6 mb-2">
    <li><a class="text-indigo-500 dark:text-sky-300" href="https://x.com/_ryantoken" target="_blank" rel="noreferrer">X</a></li>
    <li><a class="text-indigo-500 dark:text-sky-300" href="https://bsky.app/profile/ryantoken.com" target="_blank" rel="noreferrer">Bluesky</a></li>
    <li><a class="text-indigo-500 dark:text-sky-300" href="https://indieweb.social/@ryantoken" target="_blank" rel="noreferrer">Mastodon</a></li>
    <li><a class="text-indigo-500 dark:text-sky-300" href="https://github.com/r-token" target="_blank" rel="noreferrer">GitHub</a></li>
    <li><a class="text-indigo-500 dark:text-sky-300" href="https://linkedin.com/in/ryantoken" target="_blank" rel="noreferrer">LinkedIn</a></li>
    <li><a class="text-indigo-500 dark:text-sky-300" href="mailto:ryantoken13@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
  </ul>
</div>