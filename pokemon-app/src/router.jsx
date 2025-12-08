import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail'
import Error from './pages/Error'

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <Error /> },
  { path: '/pokemon', element: <PokemonList /> },
  { path: '/pokemon/:name', element: <PokemonDetail /> },
])