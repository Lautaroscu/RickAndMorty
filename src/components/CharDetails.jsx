import './charDetail.css'
export function Char({character}) {
  //TODO: Poner alguna caracteristica del personaje
  return (
    <div className="character" key={character.name}>
      
            <div className="specie-detail">
              <figure className="figure-img"> <img  src={character.image}></img></figure>
              
              <h2>{character.name}</h2>
              <p>{character.species} - {character.status}</p>
            </div>
          </div>
  );
} 