'use client'

import { fetchPokemon } from '@/hooks/useFetchPokemon'
import { useEffect, useState } from 'react'
import { Box, Button, Container } from '@mui/material'
import WithSearchBar from './components/Home/WithSearchBar'
import ItemList from './components/Home/ItemList'
import { PokemonResult } from '@/types'
import { AddCircle } from '@mui/icons-material'

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonResult[] | []>([])
  const [offset, setOffset] = useState(0)

  const fetchData = async (index: number) => {
    try {
      const data = await fetchPokemon(index)
      setPokemonList(prevList => [
        ...prevList,
        ...(data.results as PokemonResult[]),
      ])

      const urlParams = new URLSearchParams((data.next as string).split('?')[1])
      const newOffset = urlParams.get('offset')
      setOffset(Number(newOffset))
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
    }
  }

  useEffect(() => {
    fetchData(offset)
  }, [])

  return (
    <main>
      <Container
        maxWidth="md"
        className="my-4"
        sx={{ minHeight: 'calc(100vh - 14rem)' }}
      >
        {!pokemonList.length ? null : (
          <WithSearchBar>
            <ItemList dataList={pokemonList} />
          </WithSearchBar>
        )}

        {offset && (
          <Box className="flex justify-center my-5">
            <Button
              className="capitalize"
              variant="contained"
              size="large"
              endIcon={<AddCircle />}
              sx={{ borderRadius: '0 0 0.5rem 0.5rem' }}
              onClick={() => fetchData(offset)}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </main>
  )
}
