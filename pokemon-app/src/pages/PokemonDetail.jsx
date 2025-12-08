import Header from '../components/Header'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getPokemonByName } from '../lib/api'

export default function PokemonDetail() {
  const { name } = useParams()
  const { data: pokemon, loading, error } = useFetch(() => getPokemonByName(name), [name])

  if (loading) return (<><Header /><main className="mx-auto max-w-5xl px-4 py-6"><p>Cargando...</p></main></>)
  if (error) return (<><Header /><main className="mx-auto max-w-5xl px-4 py-6"><p className="text-red-600">No se encontró el Pokémon.</p></main></>)

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Link to="/pokemon" className="text-sm text-blue-600">&larr; Volver</Link>
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded p-4">
            <img src={pokemon.sprites?.other?.['official-artwork']?.front_default} alt={name} className="w-64 mx-auto" />
            <h1 className="mt-4 text-2xl font-bold capitalize">{pokemon.name}</h1>
            <div className="mt-2 flex gap-2">
              {pokemon.types?.map((t) => (
                <span key={t.slot} className="px-2 py-1 text-xs rounded bg-gray-100">{t.type.name}</span>
              ))}
            </div>
          </div>

          <div className="border rounded p-4">
            <h2 className="font-semibold">Estadísticas</h2>
            <ul className="mt-2 space-y-2">
              {pokemon.stats?.map((s) => (
                <li key={s.stat.name} className="flex items-center justify-between">
                  <span className="capitalize">{s.stat.name}</span>
                  <span className="font-mono">{s.base_stat}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 font-semibold">Habilidades</h2>
            <ul className="mt-2 list-disc ml-6">
              {pokemon.abilities?.map((a) => (
                <li key={a.ability.name} className="capitalize">{a.ability.name}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}