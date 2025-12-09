import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700">Bienvenido a PokéDex</h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl">
          Explora, busca y descubre información sobre tus Pokémon favoritos.
        </p>

        <Link
          to="/pokemon"
          className="inline-block mt-8 px-8 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transform hover:scale-105 transition"
        >
          Ver Pokémon
        </Link>

        <img
          src="https://img.pokemondb.net/sprites/home/normal/pikachu.png"
          alt="Pikachu"
          className="mt-12 w-40 animate-bounce"
        />
      </main>
    </>
  )
}