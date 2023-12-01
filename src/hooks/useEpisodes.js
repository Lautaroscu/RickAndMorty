import { useState, useEffect } from 'react'

import { fetchEpisodes } from '../services/fetchEpisodes'
export function useEpisodes () {
  const [episodes, setEpisodes] = useState([])
  const getEpisodes = async () => {
    try {
      const newEpisodes = await fetchEpisodes()
      setEpisodes(newEpisodes.results)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getEpisodes()
  }, [])
  return { episodes }
}
