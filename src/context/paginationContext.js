import React, { createContext, useState } from 'react'

export const PaginationContext = createContext()

function PaginationContextProvider( { children } ) {
  const [ current, setCurrent ] = useState( 1 )
  const [ characters, setCharacters ] = useState()
  const [ loading, setLoading ] = useState( true )
  const [ count, setCount ] = useState( 0 )
  const [ error, setError ] = useState( false )

  async function fetchData( page ) {
    setLoading(true)
    setError()
    const data = await fetch( `https://swapi.co/api/people/?page=${page}` )
      .then(res => res.json())
      .catch(err => {
        setError(err)
      })

    setCharacters( data )
    setCount( data.count )
    setLoading( false )
  }
  

  let store = {
    current: {
      get: current, set: setCurrent
    },
    characters: {
      get: characters, set: ( page ) => fetchData( page )
    },
    loading: {
      get: loading
    },
    count: {
      get: count
    },
    error: {
      get: error
    }
  }

  return (
    <PaginationContext.Provider value={ store }>
      { children }
    </PaginationContext.Provider>
  )
}

export default PaginationContextProvider
