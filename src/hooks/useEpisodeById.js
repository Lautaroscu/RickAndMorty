
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Episode } from '../pages/EpisodesPage/EpisodeDetail'
import { fetchEpisodeById } from '../services/fetchEpisodeById'
export function EpisodeDetails () {
  const [episode, setEpisode] = useState(null)
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getEpisode = async () => {
      const NEWEPISODE = await fetchEpisodeById(id)
      setEpisode(NEWEPISODE)
    }
    getEpisode()
  }, [id])
  return (
    episode ? <Episode episode={episode} /> : null
  )
}
