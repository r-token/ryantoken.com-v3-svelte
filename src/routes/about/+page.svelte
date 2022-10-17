<script>
  import LargeHeader from '$lib/components/LargeHeader.svelte'
  import Subheader from '$lib/components/Subheader.svelte'
  import ResizableImage from '$lib/components/ResizableImage.svelte'
  
  import profileImage from '$lib/assets/site-images/profile.jpg'
  import outrankIcon from '$lib/assets/site-images/outrank/outrank-icon.png'
  import hurricastIcon from '$lib/assets/site-images/hurricast/hurricast-icon.jpg'
  import catchupIcon from '$lib/assets/site-images/catchup/catchup-icon.png'
</script>

<svelte:head>
	<title>Ryan Token - About</title>
  
  <meta name="description" content="About Ryan" />
  <meta name="keywords" content="Ryan Token, About Ryan, Serverless, Jamstack, iOS, Web, Javascript" />
  <meta name="author" content="Ryan Token" />
  
  <meta property="og:title" content="Ryan Token - About" />
  <meta property="og:description" content="About Ryan" />
  <meta property="og:url" content="https://ryantoken.com/about" />
  <meta property="og:image" content="https://ryantoken.com/_app/immutable/assets/profile-668eaa31.jpg" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Ryan Token - About" />
  <meta name="twitter:description" content="About Ryan" />
  <meta name="twitter:site" content="@_ryantoken" />
  <meta name="twitter:image" content="https://ryantoken.com/_app/immutable/assets/profile-668eaa31.jpg" />
</svelte:head>

<div>
  <LargeHeader text="About"/>

  <Subheader text="A bit about me."/>

  <img src={profileImage} alt="Ryan Token" loading="lazy" decoding="async" class="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 max-w-[320px] rounded-xl mb-4"/>

  <p class="mb-4">
    Hi, I'm Ryan. You can find me writing <a href="https://github.com/r-token" target="_blank">code</a>, running my <a href="https://thegoldenhurricast.com" target="_blank">podcast</a>, or watching my <a href="https://tulsahurricane.com" target="_blank">team</a>.
  </p>

  <p class="mb-4">
    My latest projects include <a href="https://apps.apple.com/us/app/outrank/id1588983785" target="_blank">Outrank for iOS and iPadOS</a>, <a href="https://thegoldenhurricast.com" target="_blank">The Golden Hurricast</a>, and <a href="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550" target="_blank">CatchUp for iOS</a>.
  </p>

  <div class="flex items-stretch mb-4">
    <ResizableImage src={outrankIcon} altText="Outrank's app icon" url="https://apps.apple.com/us/app/outrank/id1588983785"/>
    <ResizableImage src={hurricastIcon} altText="The Golden Hurricast's logo" url="https://thegoldenhurricast.com"/>
    <ResizableImage src={catchupIcon} altText="CatchUp's app icon" url="https://apps.apple.com/us/app/catchup-keep-in-touch/id1358023550"/>
  </div>

  <p class="mb-4">
    I'm currently into serverless web development, native iOS development, podcasting, and blogging.
  </p>

  <p class="mb-4">
    My favorite programming languages are <a href="https://www.javascript.com" target="_blank">JavaScript</a> and <a href="https://developer.apple.com/swift/" target="_blank">Swift</a>, I tend to run my web projects on <a href="https://aws.amazon.com" target="_blank">AWS</a> and <a href="https://www.netlify.com" target="_blank">Netlify</a> (or <a href="https://vercel.com" target="_blank">Vercel</a>), and I'm always looking to learn something new.
  </p>

  <p  class="mb-4">
    I'm also a die-hard fan of the <a href="https://tulsahurricane.com" target="_blank">Tulsa Golden Hurricane</a> and college sports in general.
  </p>

  <p class="mb-4">
    You can find me online in the following places:
  </p>

  <ul class="list-disc ml-6 mb-2">
    <li><a href="https://twitter.com/_ryantoken" target="_blank">Twitter</a></li>
    <li><a href="https://github.com/r-token" target="_blank">GitHub</a></li>
    <li><a href="https://linkedin.com/in/ryantoken" target="_blank">LinkedIn</a></li>
    <li><a href="mailto:ryantoken13@gmail.com" target="_blank">Email</a></li>
  </ul>
</div>