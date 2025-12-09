import { useEffect, useState } from 'react'
export function useFetch(asyncFn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true); setError(null)
    asyncFn()
      .then((res) => active && setData(res))
      .catch((err) => active && setError(err))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, deps)

  return { data, loading, error }
}