import { create } from 'zustand'
import { PokemonResult } from '@/types'

type State = {
  pokemonList: PokemonResult[]
  addPokemon: (pokemon: PokemonResult[]) => void
}

export const usePokemonStore = create<State>(set => ({
  pokemonList: [],
  addPokemon: pokemon =>
    set(state => ({ pokemonList: [...state.pokemonList, ...pokemon] })),
}))
