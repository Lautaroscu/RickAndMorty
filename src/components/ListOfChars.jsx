import { useId } from "react";
import { Link } from "react-router-dom";
import { LocationIcon } from "./IconLocation";
import { Title } from "./Title";
 import { useCharsfilters } from "../hooks/useCharFilters";
import { useState } from "react";
import { CharactersFilters } from "./ListOfCharsFilters";
import { Pagination } from "./pagination";

export function Characters({ characters  , handlePage , CharKey , info}) {
  const [isFilter , setIsFilter] = useState(false) ;
  const {filters , getFilters} = useCharsfilters()
  const SearchByName = useId() ;
const SearchByStatus = useId();

function handleSubmit(e) {
  e.preventDefault()
  setIsFilter(true)
 const {name , statusChar} = Object.fromEntries(new FormData(e.target));
 getFilters(name , statusChar)


}

  return (
    <>
     <Title />
     <form className="form" onSubmit={handleSubmit}>
      <div className="inputs">
      <div className="input-name">
          <label htmlFor={SearchByName}>Search By Name</label>
        <input placeholder="Rick , Morty ...."  type="text" name="name" id={SearchByName} />
      </div>
    
<div className="inputStatus">
  <label htmlFor={SearchByStatus}>Search By Status</label>
        <input type="text" placeholder="Alive , Dead..." name="statusChar" id={SearchByStatus}/>
</div>
<button  type="submit">Send</button>
        </div>
      
        
     </form>
     {!isFilter ?  <div className="container">
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
      </div> : <CharactersFilters filters={filters} />  }
          <Pagination handlePage={handlePage} CharKey={CharKey} info={info} /> 
    </>

  )




}