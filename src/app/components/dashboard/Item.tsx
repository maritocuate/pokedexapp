import { POKEMON_THUMB_URL } from '@/app/config/pokemonUrl'
import { PokemonResult } from '@/types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'

interface ItemProps {
  data: PokemonResult
}

export default function Item({ data }: ItemProps) {
  const { name, url } = data

  const UrlParts = url.split('/')
  const pokemonId = parseInt(UrlParts[UrlParts.length - 2])

  return (
    <Card>
      <Link href={`/${name}`}>
        <CardMedia
          component="img"
          alt={name}
          className="hover:scale-105 duration-100 ease-in-out"
          sx={{ height: '10rem', objectFit: 'contain', padding: '3rem' }}
          image={`${POKEMON_THUMB_URL}/${pokemonId}.gif`}
        />
        <CardContent sx={{ borderTop: '1px solid #e5e5e5' }}>
          <Typography variant="h6" className="capitalize">
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}
