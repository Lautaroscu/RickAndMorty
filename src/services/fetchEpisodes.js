export async function fetchEpisodes () {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode')
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    throw new Error('No results founds')
  }
}
