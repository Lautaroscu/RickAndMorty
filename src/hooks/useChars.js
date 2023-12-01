import { useState, useEffect, useId } from 'react'
import { fetchCharacters } from '../services/fetchChars'
export function useChars () {
  const [currentPage, setCurrentPage] = useState(1)
  const CharKey = useId()
  const [characters, SetCharacters] = useState([])
  const [LOADING, setLoading] = useState(false)
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getChars = async () => {
    try {
      setLoading(true)

      const NEWCHARS = await fetchCharacters(currentPage)
      SetCharacters(NEWCHARS.results)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getChars()
  }, [currentPage])

  return {
    characters,
    nextPage,
    prevPage,
    LOADING,
    CharKey,
    currentPage
  }
}
