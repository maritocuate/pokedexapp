import { fetchPokemonDetails } from '@/hooks/useFetchPokemon'
import { PokemonDetails } from '@/types'
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import DetailsNotFound from './DetailsNotFound'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { ArrowBackIos } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

export default async function DetailCard({ id }: { id: string }) {
  const data: PokemonDetails | null = await fetchPokemonDetails(id)
  if (!data) return <DetailsNotFound />

  const { name } = data

  return (
    <Box component="section">
      <Box className="flex flex-col md:flex-row items-center justify-between">
        <Typography variant="h1" className="capitalize flex items-center gap-1">
          <IconButton disabled>
            <CatchingPokemonIcon sx={{ fontSize: '3rem' }} />
          </IconButton>
          {name}
        </Typography>
        <Link href="/">
          <Box className="flex items-center">
            <ArrowBackIos sx={{ fontSize: '1.5rem' }} />
            <Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
              Go Back
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            my: 4,
          }}
        >
          <Image
            alt={name}
            width={500}
            height={500}
            src={data.sprites.other['official-artwork'].front_default}
            priority
          />
          <CardContent>
            <Typography className="capitalize" variant="h6">
              <strong>Types: </strong>
              {data.types.map(type => type.type.name).join(', ')}
            </Typography>
            <Typography className="capitalize" variant="body2">
              <strong>Stats: </strong>
              {data.stats.map(stat => stat.stat.name).join(', ')}
            </Typography>
            <Typography className="capitalize" variant="body2">
              <strong>Moves: </strong>
              {data.moves
                .slice(0, 5)
                .map(move => move.move.name)
                .join(', ')}
            </Typography>
            <Typography className="capitalize" variant="body2">
              <strong>Abilities: </strong>
              {data.abilities
                .slice(0, 5)
                .map(ability => ability.ability.name)
                .join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
