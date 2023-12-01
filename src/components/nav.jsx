import { Link } from 'react-router-dom'
export function Nav () {
  return (

    <nav>
      <ul>
        <li>
          <Link to='RickAndMorty/episodes'>Episodes</Link>
        </li>
      </ul>
    </nav>
  )
}
