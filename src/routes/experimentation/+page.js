export const load = async ({ fetch }) => {
	const { randomSentence } = await fetch(`${import.meta.env.VITE_PUBLIC_BASE_PATH}/sentence-generator`)
	
	return {
		randomSentence
	}
}