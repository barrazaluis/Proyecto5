import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-red-600">PokéDex</Link>
        <div className="flex gap-4">
          <Link to="/" className="text-sm text-gray-700">Inicio</Link>
          <Link to="/pokemon" className="text-sm text-gray-700">Pokémon</Link>
        </div>
      </nav>
    </header>
  )
}