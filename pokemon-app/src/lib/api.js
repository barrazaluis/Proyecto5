const BASE = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit = 24, offset = 0) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`)
  if (!res.ok) throw new Error('Failed fetching pokemon list')
  return res.json()
}

export async function getPokemonByName(name) {
  const res = await fetch(`${BASE}/pokemon/${name}`)
  if (!res.ok) throw new Error('Pokemon not found')
  return res.json()
}