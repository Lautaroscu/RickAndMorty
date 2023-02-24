import { useState, useEffect, useId } from "react";
import { fetchCharacters } from "../services/fetchChars";
import { UseInfo } from "./useInfo";
export function useChars() {
    const [currentPage, setCurrentPage] = useState(1)
    const CharKey = useId();
    const { info, getInfo } = UseInfo()
    const [characters, SetCharacters] = useState([]);
    const [LOADING, setLoading] = useState(false);
    const [ERROR, setError] = useState(null);
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const getChars = async () => {
        try {
            setLoading(true);
            setError(null)
          
        const NEWCHARS = await fetchCharacters(currentPage);
                SetCharacters(NEWCHARS.results)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        getChars();
        getInfo()

    }, [currentPage])
    return { characters, nextPage, prevPage, LOADING, CharKey, info, currentPage  }

}