import { Link } from "react-router-dom";
import { LocationIcon } from "./IconLocation";
import { Title } from "./Title";
 import { useCharsfilters } from "../hooks/useCharFilters";
import { useState } from "react";
import { CharactersFilters } from "./ListOfCharsFilters";
import { Pagination } from "./pagination";
import { SearchForm } from "./searchForm";

export function Characters({ characters  , prevPage , nextPage, currentPage , CharKey , info   }) {
const {filters , getFilters} = useCharsfilters()
    const [isFilter, setIsFilter] = useState(false)

  return (
    <>
     <Title />
    <SearchForm getFilters={getFilters} setIsFilter={setIsFilter} />
     {!isFilter ? <div className="container">
        {characters.map(character => (

          <div className="specie" key={character.name}>
            <div className="specie-data">
              <Link to= {`/character/${character.id}`}>
              <figure className="specie-img"> <img  src={character.image}></img></figure>
              </Link>
              
              <h2>{character.name}</h2>
              <p>{character.species} - {character.status}</p>
              <p> {<LocationIcon/>} {character.location.name}</p>

                      </div>
                        
          </div>
    
        ))}
      </div> : <CharactersFilters filters={filters} /> }
          <Pagination characters={characters} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} CharKey={CharKey} info={info} /> 
    </>

  )




}