import { useState } from "react";
import { FilterChar } from "../services/filterChars";

export function useCharsfilters() {
    const [filters , setFilters] = useState([]) ;
    const getFilters = async (name , statusChar) => {
        try {
            const NewFilters = await FilterChar(name , statusChar)
            setFilters(NewFilters.results)
        } catch (error) {
        throw new Error('Can not find characters')
        }
    }
    return {filters , getFilters}
}