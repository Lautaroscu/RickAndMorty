export async function fetchInfo () {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    if (response.ok) {
      const { info } = await response.json()
      return info
    }
  } catch (error) {
    throw new Error(error)
  }
}
