import { LocationIcon } from "./IconLocation";
import { Link } from "react-router-dom";
export function CharactersFilters({filters}) {
    return (  <div className="container">
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

    )) : <div className="notFoundChars">No se encontraron resultados :( </div>}
  </div> )
}