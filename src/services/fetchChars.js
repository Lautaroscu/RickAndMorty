export  async function fetchCharacters() {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);
        if (response.ok) {
            const data = await response.json()
            const characters = data
            return characters

        }
    } catch (error) {
        throw new Error('No results founds')
    }

}

