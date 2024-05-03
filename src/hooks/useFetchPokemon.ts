import axios from 'axios'
import { POKEAPI_URL } from '@/app/config/pokemonUrl'
import { PokemonDetails, PokemonList } from '@/types'

export const fetchPokemon = async (offset: number) => {
  const limit = 9
  const url = `${POKEAPI_URL}/pokemon?limit=${limit}&offset=${offset}`

  const { data } = await axios.get<PokemonList>(url)
  const result = {
    results: data.results,
    next: data.next,
  }
  return result
}

export const fetchPokemonDetails = async (
  id: string
): Promise<PokemonDetails | null> => {
  try {
    const url = `${POKEAPI_URL}/pokemon/${id}`
    const { data } = await axios.get<PokemonDetails>(url)
    return data
  } catch (error) {
    console.error('Error ', error)
    return null
  }
}
