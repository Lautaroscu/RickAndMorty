export async function FilterChar (name , statusChar) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${statusChar}`)
        if(response.ok){
            
            return await response.json()
        } 
    } catch (error) {
        throw new Error(error)
        }
}