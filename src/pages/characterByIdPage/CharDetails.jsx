import './charDetail.css'
import { LocationIcon } from '../../components/IconLocation'
export function Char ({ character }) {
  // TODO: Poner alguna caracteristica del personaje
  return (
    <div className='character' key={character.name}>

      <div className='specie-detail'>
        <figure className='figure-img'> <img src={character.image} /></figure>
        <div>
          <h2>{character.name}</h2>
          <p>{character.species} - {character.status}</p>
        </div>
        <div>
          <span> <LocationIcon /> Last known location :</span>

          <p> {character.location.name}</p>
        </div>
        <div>
          <span>First seen in :</span>
          <p>{}</p>
        </div>

      </div>
    </div>
  )
}
