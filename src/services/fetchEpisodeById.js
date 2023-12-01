export async function fetchEpisodeById (id) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    throw new Error('No results founds')
  }
}
