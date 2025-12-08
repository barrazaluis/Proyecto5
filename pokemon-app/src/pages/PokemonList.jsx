import Header from '../components/Header'
import PokemonCard from '../components/PokemonCard'
import SearchBar from '../components/SearchBar'
import { useState, useMemo } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'
import { getPokemonList, getPokemonByName } from '../lib/api'
import { Link } from 'react-router-dom'

export default function PokemonList() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const limit = 24
  const debouncedQuery = useDebounce(query, 300)

  const { data, loading, error } = useFetch(() => getPokemonList(limit, page * limit), [page])

  // Prefetch simple: si hay búsqueda exacta, intento obtener ese Pokémon
  const { data: searched } = useFetch(
    () => (debouncedQuery ? getPokemonByName(debouncedQuery.toLowerCase()) : Promise.resolve(null)),
    [debouncedQuery]
  )

  const list = useMemo(() => {
    if (!data?.results) return []
    return data.results
  }, [data])

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Pokémon</h1>
        </div>

        <div className="mb-4">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-600">Error al cargar la lista.</p>}

        {debouncedQuery && searched ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Link to={`/pokemon/${searched.name}`}>
              <PokemonCard
                name={searched.name}
                image={searched.sprites?.front_default}
                types={searched.types?.map((t) => t.type.name)}
              />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {list.map((p) => (
              <Link key={p.name} to={`/pokemon/${p.name}`}>
                <PokemonCard name={p.name} image={`https://img.pokemondb.net/sprites/home/normal/${p.name}.png`} />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="px-3 py-2 border rounded disabled:opacity-50"
            onClick={() => setPage((n) => Math.max(0, n - 1))}
            disabled={page === 0}
          >
            Anterior
          </button>
          <span className="text-sm">Página {page + 1}</span>
          <button
            className="px-3 py-2 border rounded disabled:opacity-50"
            onClick={() => setPage((n) => n + 1)}
          >
            Siguiente
          </button>
        </div>
      </main>
    </>
  )
}