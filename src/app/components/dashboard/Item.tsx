import { POKEMON_THUMB_URL } from '@/app/config/pokemonUrl'
import { PokemonResult } from '@/types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface ItemProps {
  data: PokemonResult
}

export default function Item({ data }: ItemProps) {
  const { name } = data

  return (
    <Card>
      <Link href={`/${name}`}>
        <Image
          alt={name}
          className="hover:scale-105 duration-100 ease-in-out object-contain p-10"
          height={250}
          width={250}
          src={`${POKEMON_THUMB_URL}/${name}.avif`}
          priority
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
