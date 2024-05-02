import axios from 'axios'
import { POKEAPI_URL } from '@/app/config/pokemonUrl'
import { PokemonList } from '@/types'

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

export const fetchPokemonDetails = async (id: number) => {
  try {
    const url = `${POKEAPI_URL}/pokemon/${id}`
    const { data } = await axios.get<PokemonList>(url)
    return data
  } catch (error) {
    console.error('Error ', error)
    return null
  }
}