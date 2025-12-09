import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getPokemonList } from "../lib/api"

export default function SearchBar({ value, onChange, placeholder = "Buscar Pokémon..." }) {
  const [allPokemon, setAllPokemon] = useState([])
  const [suggestions, setSuggestions] = useState([])

  // Cargar lista completa de Pokémon una sola vez
  useEffect(() => {
    getPokemonList(1000, 0).then((data) => {
      setAllPokemon(data.results || [])
    })
  }, [])

  // Filtrar sugerencias cada vez que cambia el input
  useEffect(() => {
    if (!value) {
      setSuggestions([])
      return
    }
    const filtered = allPokemon.filter((p) =>
      p.name.toLowerCase().startsWith(value.toLowerCase())
    )
    setSuggestions(filtered.slice(0, 5)) // máximo 5 sugerencias
  }, [value, allPokemon])

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2"
      />

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 border border-gray-300 rounded-md bg-white shadow-lg z-50">
          {suggestions.map((s) => (
            <li key={s.name}>
              <Link
                to={`/pokemon/${s.name}`}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}