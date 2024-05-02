import { render, screen } from '@testing-library/react'
import Page from './page'
import { fetchPokemon } from '../hooks/useFetchPokemon'

jest.mock('../hooks/useFetchPokemon')

describe('Home Page', () => {
  beforeEach(() => {
    fetchPokemon.mockResolvedValueOnce({
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
        { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
        { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
        { name: 'wartortle"', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
        { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
      ],
      next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    })
  })

  it('first fetch should return a list of 9 pokemon', async () => {
    const pokemonList = await fetchPokemon(0)
    expect(pokemonList.results.length).toBe(9)
  })

  it('should show an error when fetch fails', async () => {
    render(<Page />)
    const errorMessage = 'Error fetching Pokemon'
    fetchPokemon.mockRejectedValueOnce(new Error('Failed to fetch Pokemon'))

    try {
      await fetchPokemon(0)
    } catch (error) {
      const errorElement = await screen.findByText(errorMessage)
      expect(errorElement).toBeInTheDocument()
    }
  })
})
