import { marked } from 'marked';
import matter from 'gray-matter';

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/*.md', { as: 'raw' })
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
	iterablePostFiles.map(async ([path, resolver]) => {
	  const rawMd = await resolver()
	  const { data: metadata, content } = matter(rawMd)
	  
	  // Remove Svelte script tags and component imports
	  const cleanedContent = removeScriptTags(content)
	  
	  // Convert markdown to HTML
	  const html = marked.parse(cleanedContent)
	  const postPath = path.slice(11, -3)

	  return {
		meta: metadata,
		path: postPath,
		postContent: { html }
	  }
	})
  )

  return allPosts
}

// Function to remove Svelte script tags and components
function removeScriptTags(content) {
  // Remove script tags and their contents
  let cleaned = content.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  // Remove Svelte component tags (like <ResizableIcon />)
  cleaned = cleaned.replace(/<[A-Z][A-Za-z]*[\s\S]*?\/>/g, '');
  
  return cleaned;
}