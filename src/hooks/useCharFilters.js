import { useState } from "react";
import { FilterChar } from "../services/filterChars";

export function useCharsfilters() {
    const [filters , setFilters] = useState([]) ;
    const getFilters = async (name , statusChar) => {
        try {
            const NewFilters = await FilterChar(name , statusChar)
            setFilters(NewFilters.results)
        } catch (error) {
        throw new Error('404 Not Found')
        }
    }
    return {filters , getFilters}
}