export  async function fetchCharacters(currentPage) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
        if (response.ok) {
            const data = await response.json()
            const characters = data
            return characters

        }
    } catch (error) {
        throw new Error('No results founds')
    }

}

