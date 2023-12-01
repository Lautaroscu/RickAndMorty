import { Link } from "react-router-dom";
export function Episodes({ episodes }) {
  return (
    <div className="container">
      {episodes.map((episode) => (
        <div className="specie" key={episode.id}>
          <div className="specie-data">
            <Link to={`/episode/${episode.id}`}>
              <h2>{episode.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
