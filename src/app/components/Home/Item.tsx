import { POKEMON_ARTWORK_URL } from '@/app/config/pokemonUrl'
import { PokemonResult } from '@/types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'

interface ItemProps {
  data: PokemonResult
}

export default function Item({ data }: ItemProps) {
  const { name } = data

  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: '14rem' }}
        image={`${POKEMON_ARTWORK_URL}/${name}.jpg`}
      />
      <CardContent>
        <Typography variant="h6" className="capitalize">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}
