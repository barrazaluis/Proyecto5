export default function PokemonCard({ name, image, types }) {
  return (
    <div className="rounded border p-3 hover:shadow-sm transition">
      <img src={image} alt={name} className="w-28 h-28 mx-auto" />
      <h3 className="mt-2 text-center font-semibold capitalize">{name}</h3>
      <div className="mt-1 flex justify-center gap-2">
        {types?.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded bg-gray-100">{t}</span>
        ))}
      </div>
    </div>
  )
}