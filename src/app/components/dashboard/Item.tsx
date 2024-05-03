import { POKEMON_ARTWORK_URL } from '@/app/config/pokemonUrl'
import { PokemonResult } from '@/types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

interface ItemProps {
  data: PokemonResult
}

export default function Item({ data }: ItemProps) {
  const { name } = data

  return (
    <Card>
      <Link href={`/${name}`}>
        <CardMedia
          component="img"
          alt={name}
          className="hover:scale-105 duration-100 ease-in-out"
          sx={{ height: '14rem' }}
          image={`${POKEMON_ARTWORK_URL}/${name}.jpg`}
        />
        <CardContent>
          <Typography variant="h6" className="capitalize">
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}
