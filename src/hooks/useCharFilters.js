import { useCallback, useEffect, useState , useRef} from "react";
import { FilterChar } from "../services/filterChar";

export function useCharsfilters() {
    const [filters , setFilters] = useState([]) ;
    const getFilters = async (name , statusChar) => {
        console.log(name)
        try {
            const NewFilters = await FilterChar(name , statusChar)
            setFilters(NewFilters.results)
        } catch (error) {
        throw new Error('Can not find characters')
        }
    }
    return {filters , getFilters}
}