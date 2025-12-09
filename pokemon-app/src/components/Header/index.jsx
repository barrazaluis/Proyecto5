import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      {/* Contenedor principal: Usamos 'flex flex-col' para apilar los elementos 
        y 'gap-3' para darles separación vertical.
      */}
      <nav className="mx-auto max-w-5xl px-4 py-3 flex flex-col items-start gap-3">
        <div className="flex flex-col gap-1"> 
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium transition ${
                isActive ? 'text-blue-600 underline decoration-2 underline-offset-4' : 'text-gray-700 hover:text-blue-600'
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/pokemon"
            className={({ isActive }) =>
              `text-base font-medium transition ${
                isActive ? 'text-blue-600 underline decoration-2 underline-offset-4' : 'text-gray-700 hover:text-blue-600'
              }`
            }
          >
            Pokémon
          </NavLink>
        </div>
      </nav>
    </header>
  )
}