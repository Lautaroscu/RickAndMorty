import { useState , useEffect , useId} from "react";
import  {fetchCharacters}  from "../services/fetchChars";
import { UseInfo } from "./useInfo";

export  function useChars() {
    const [currentPage , setCurrentPage] = useState(1)
   const CharKey = useId() ;
   const {info , getInfo } = UseInfo()
    
    const [characters, SetCharacters] = useState([]);
    const [LOADING, setLoading] = useState(false);
    const [ERROR, setError] = useState(null);
    const handlePage = (PageNumber) => {
        setCurrentPage(PageNumber)
      }
        const getChars = async (currentPage) => {
        try {
            console.log(currentPage)
            setLoading(true);
            setError(null) ;
            const NEWCHARS = await fetchCharacters(currentPage);
            SetCharacters(NEWCHARS.results);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }

    }
      useEffect( () => {
      getChars(currentPage);
      getInfo()
    
      } , [currentPage])
      return {characters , handlePage , LOADING , CharKey , info}

}