'use client'

import { fetchPokemon } from '@/hooks/useFetchPokemon'
import { useEffect, useState } from 'react'
import { Box, Button, Container } from '@mui/material'
import WithSearchBar from './components/Home/WithSearchBar'
import ItemList from './components/Home/ItemList'
import { PokemonResult } from '@/types'
import { AddCircle } from '@mui/icons-material'

export default function Home() {
  const [nextPage, setNextPage] = useState<string | null>(null)
  const [pokemonList, setPokemonList] = useState<PokemonResult[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon(0)
        setPokemonList(data.results as PokemonResult[])
        setNextPage(data.next as string)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchData()
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

        {nextPage && (
          <Box className="flex justify-center my-5">
            <Button
              className="capitalize"
              variant="contained"
              size="large"
              endIcon={<AddCircle />}
              sx={{ borderRadius: '0 0 0.5rem 0.5rem' }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </main>
  )
}
