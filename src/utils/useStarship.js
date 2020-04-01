import { useEffect, useState } from 'react'

export default function useStarship( url ) {
  const [ starship, setStarship ] = useState()
  const [ error, setError ] = useState()
  const [ loading, setLoading ] = useState( false )

  useEffect( () => {
    async function fetchData() {
      setLoading(true)
      setError()
      const data = await fetch( url )
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setStarship(data)
      setLoading(false)
    }
    fetchData();
  }, [] )

  return {
    starship,
    error,
    loading
  }
}
