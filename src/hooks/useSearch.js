import { useState, useEffect, useRef } from 'react'
export function useSearch () {
  const [search, updateSearch] = useState({
    nombre: '',
    estado: ''
  })
  const [error, setError] = useState(null)

  const { nombre, estado } = search

  useEffect(() => {
    if ((nombre && estado) === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (nombre.match(/^\d+$/) && estado.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (nombre.length < 3 && estado.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
