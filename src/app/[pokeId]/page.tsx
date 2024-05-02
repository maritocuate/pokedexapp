import { Suspense } from 'react'
import DetailCard from '../components/details/DetailCard'
import { Container } from '@mui/material'
import { DetailsSkeleton } from '../ui/skeletons'

interface detailsPageProps {
  params: {
    pokeId: string
  }
}

export default async function Page({ params }: detailsPageProps) {
  const { pokeId } = params

  return (
    <Container maxWidth="md" sx={{ my: 4, minHeight: 'calc(100vh - 14rem)' }}>
      <Suspense fallback={<DetailsSkeleton />}>
        <DetailCard id={Number(pokeId)} />
      </Suspense>
    </Container>
  )
}
