import axios from 'axios'
import { POKEAPI_URL } from '@/app/config/pokemonUrl'
import { PokemonList } from '@/types'

export const fetchPokemon = async (offset: number) => {
  const limit = 9
  const { data } = await axios.get<PokemonList>(
    `${POKEAPI_URL}/pokemon?limit=${limit}&offset=${offset}`
  )
  const result = {
    results: data.results,
    next: data.next,
  }
  return result
}
