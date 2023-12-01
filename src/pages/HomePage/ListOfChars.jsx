import { Link } from 'react-router-dom'
import { Title } from '../../components/Title'
import { useCharsfilters } from './../../hooks/useCharFilters'
import { useState } from 'react'
import { CharactersFilters } from './ListOfCharsFilters'
import { Pagination } from './pagination'
import { SearchForm } from './searchForm'

export function Characters ({
  characters,
  prevPage,
  nextPage,
  currentPage,
  CharKey,
  info
}) {
  const { filters, getFilters } = useCharsfilters()
  const [isFilter, setIsFilter] = useState(false)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setIsFilter(true)
    const { name, statusChar } = Object.fromEntries(new FormData(e.target))
    getFilters(name, statusChar)
  }
  return (
    <>
      <Title />
      <SearchForm HandleSubmit={HandleSubmit} />
      {!isFilter
        ? (
          <div className='container'>
            {characters.map((character) => (
              <div className='specie' key={character.id}>
                <div className='specie-data'>
                  <Link to={`/character/${character.id}`}>
                    <figure className='specie-img'>
                      {' '}
                      <img src={character.image} alt={character.name} />
                    </figure>
                  </Link>
                  <h2>{character.name}</h2>
                </div>
              </div>
            ))}
          </div>
          )
        : (
          <CharactersFilters filters={filters} />
          )}
      <Pagination
        characters={characters}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        CharKey={CharKey}
        info={info}
      />
    </>
  )
}
