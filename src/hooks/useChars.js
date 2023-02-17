import { useState } from "react";
import  {fetchCharacters}  from "../services/fetchChars";
export  function useChars() {
    const [characters, SetCharacters] = useState([]);
    const [LOADING, setLoading] = useState(false);
    const [ERROR, setError] = useState(null);
        const getChars = async () => {
        try {
            setLoading(true);
            setError(null) ;
            const NEWCHARS = await fetchCharacters();
            SetCharacters(NEWCHARS.results);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }

    }
    
    

    return { characters, getChars  , LOADING , ERROR }
}