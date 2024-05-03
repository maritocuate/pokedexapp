'use client'

import { useEffect, useState, useCallback } from 'react'
import { Box, Container } from '@mui/material'
import WithSearchBar from './components/dashboard/WithSearchBar'
import ItemList from './components/dashboard/ItemList'
import { PokemonResult } from '@/types'
import { fetchPokemon } from '@/hooks/useFetchPokemon'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { ThumbnailSkeleton } from './ui/skeletons'
import { usePokemonStore } from '@/store/pokemonStore'

export default function Home() {
  const [offset, setOffset] = useState(0)
  const pokemonList = usePokemonStore(state => state.pokemonList)
  const addPokemon = usePokemonStore(state => state.addPokemon)

  const fetchData = async (index: number) => {
    try {
      const data = await fetchPokemon(index)
      addPokemon(data.results as PokemonResult[])
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

  useInfiniteScroll({ fetchData, offset })

  return (
    <main>
      <Container
        maxWidth="md"
        className="my-4"
        sx={{ minHeight: 'calc(100vh - 14rem)' }}
      >
        {!pokemonList.length ? (
          <ThumbnailSkeleton />
        ) : (
          <WithSearchBar>
            <ItemList dataList={pokemonList} />
          </WithSearchBar>
        )}
      </Container>
    </main>
  )
}
