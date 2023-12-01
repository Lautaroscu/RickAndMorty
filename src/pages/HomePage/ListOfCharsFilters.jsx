import { Link } from 'react-router-dom'
import { NotFound } from '../../components/NotFound404'
export function CharactersFilters ({ filters }) {
  return (

    <div className='container'>
      {filters.length
        ? filters.map(character => (

          <div className='specie' key={character.name}>
            <div className='specie-data'>
              <Link to={`/character/${character.id}`}>
                <figure className='specie-img'> <img src={character.image} /></figure>
              </Link>

              <h2>{character.name}</h2>
            </div>
          </div>

        ))
        : <NotFound />}
    </div>
  )
}
