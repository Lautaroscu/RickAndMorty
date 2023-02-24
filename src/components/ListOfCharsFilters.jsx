import { LocationIcon } from "./IconLocation";
import { Link } from "react-router-dom";
import { NotFound } from "./NotFound404";
export function CharactersFilters({filters}) {
  console.log({filters})
    return (  
    
    <div className="container">
    { filters.length ?  filters.map(character => (

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

    )) : <NotFound /> }
  </div> )
}