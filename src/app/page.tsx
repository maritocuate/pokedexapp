'use client'

import { useEffect, useState, useCallback } from 'react'
import { Box, Container } from '@mui/material'
import WithSearchBar from './components/home/WithSearchBar'
import ItemList from './components/home/ItemList'
import { PokemonResult } from '@/types'
import { fetchPokemon } from '@/hooks/useFetchPokemon'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { ThumbnailSkeleton } from './ui/skeletons'

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonResult[] | []>([])
  const [offset, setOffset] = useState(0)

  const fetchData = useCallback(async (index: number) => {
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
  }, [])

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
