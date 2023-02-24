export async function fetchCharById(id) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (response.ok) {
           return await response.json()
        }
    } catch (error) {
        throw new Error('No results founds')
    }
}