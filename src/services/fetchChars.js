export async function fetchCharacters (currentPage) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    throw new Error('No results founds')
  }
}
