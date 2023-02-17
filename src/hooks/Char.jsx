
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharById } from '../services/fetchCharById';
import { Char } from '../components/CharDetails';

export function CharacterDetails() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      const NEWCHAR = await fetchCharById(id)
      setCharacter(NEWCHAR)
     }
     getCharacter()

  }, [id]);
    return (
      character ? <Char character={character} /> : null
    )
}