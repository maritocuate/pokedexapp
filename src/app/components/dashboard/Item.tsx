import { useEffect, useState } from 'react'
import { POKEMON_THUMB_URL } from '@/app/config/pokemonUrl'
import { PokemonResult } from '@/types'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import LoopIcon from '@mui/icons-material/Loop'
import Link from 'next/link'
import styles from '@/app/ui/styles/item.module.css'

interface ItemProps {
  data: PokemonResult
}

export default function Item({ data }: ItemProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const { name, url } = data

  const UrlParts = url.split('/')
  const pokemonId = parseInt(UrlParts[UrlParts.length - 2])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isFlipped) {
      timeoutId = setTimeout(() => {
        setIsFlipped(false)
      }, 1500)
    }

    return () => clearTimeout(timeoutId)
  }, [isFlipped])

  return (
    <Container
      className={isFlipped ? `${styles.card} ${styles.flip}` : styles.card}
    >
      <Card className={styles.front}>
        <Link href={`/${name}`}>
          <CardMedia
            component="img"
            alt={name}
            className="hover:scale-105 duration-100 ease-in-out"
            sx={{ height: '10rem', objectFit: 'contain', padding: '3rem' }}
            image={`${POKEMON_THUMB_URL}/${pokemonId}.gif`}
          />
        </Link>
        <CardContent
          className="flex justify-between items-center"
          sx={{ borderTop: '1px solid #e5e5e5' }}
        >
          <Typography variant="h6" className="capitalize">
            {name}
          </Typography>
          <Box
            className="cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <LoopIcon sx={{ fontSize: '1.2rem' }} />
          </Box>
        </CardContent>
      </Card>

      <Card className={styles.back}>
        <Link href={`/${name}`}>
          <CardMedia
            component="img"
            alt={name}
            className="hover:scale-105 duration-100 ease-in-out"
            sx={{ height: '10rem', objectFit: 'contain', padding: '3rem' }}
            image={`${POKEMON_THUMB_URL}/back/${pokemonId}.gif`}
          />
        </Link>
        <CardContent
          className="flex justify-between items-center"
          sx={{ borderTop: '1px solid #e5e5e5' }}
        ></CardContent>
      </Card>
    </Container>
  )
}
