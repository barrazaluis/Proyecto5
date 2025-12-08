export default function SearchBar({ value, onChange, placeholder = 'Buscar Pokémon...' }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded px-3 py-2"
    />
  )
}