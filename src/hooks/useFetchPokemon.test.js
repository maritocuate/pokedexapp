import axios from 'axios'
import { fetchPokemon } from './useFetchPokemon'

jest.mock('axios')

describe('Fetch Pokemon Hook', () => {
  it('should return a valid response', async () => {
    const mockData = {
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
    }

    axios.get.mockResolvedValueOnce({ data: mockData })
    const result = await fetchPokemon(0)

    expect(result).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0'
    )
  })
})
