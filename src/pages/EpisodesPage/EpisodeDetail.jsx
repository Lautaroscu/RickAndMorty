import './episode.css'
export function Episode ({ episode }) {
  return (
    <div className='episode' key={episode.id}>
      <div className='episode-data'>
        <h2>{episode.name}</h2>
        <p>Primere : {episode.air_date}</p>

      </div>

    </div>
  )
}
