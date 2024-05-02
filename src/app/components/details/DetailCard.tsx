import { fetchPokemonDetails } from '@/hooks/useFetchPokemon'
import { PokemonDetails } from '@/types'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import DetailsNotFound from './DetailsNotFound'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export default async function DetailCard({ id }: { id: number }) {
  const data: PokemonDetails | null = await fetchPokemonDetails(id)
  if (!data) return <DetailsNotFound />

  const { name } = data

  return (
    <Box component="section">
      <Typography variant="h1" className="capitalize flex items-center gap-1">
        <CatchingPokemonIcon sx={{ fontSize: '3rem' }} />
        {name}
      </Typography>
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
          <CardMedia
            component="img"
            src={data.sprites.other['official-artwork'].front_default}
            alt={name}
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
