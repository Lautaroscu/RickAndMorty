import { useEffect, useState } from "react";

const RickAndMortyData =  () => {
  const [characters , setCharacters] = useState([]);
  const [isFetching , setIsFetching] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character') ;
        const data = await response.json( );
        setCharacters(data.results)
        setIsFetching(false) ;
      
      }
      fetchData() ;
    } , [])
return (
  <section>
     <h1>Rick And Morty characters</h1>
    <div className="container">
      {!isFetching ? 
        characters.map(character => (
          <div className="specie" key={character.id}>
             
            <figure className="specie-img"> <img src={character.image}></img></figure>
            <div className="specie-data">
              <h2>{character.name}</h2>
            <p>{character.species} - {character.status}</p>
              </div>
          </div>
        ))
       : <h1>...Loading</h1>}
      </div>
      
  </section>
  
)
}

export default RickAndMortyData;




