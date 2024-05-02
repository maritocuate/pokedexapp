import { fetchPokemonDetails } from '@/hooks/useFetchPokemon'
import DetailsNotFound from '../components/details/DetailsNotFound'
import CardDetails from '../components/details/CardDetails'

interface detailsPageProps {
  params: {
    pokeId: string
  }
}

export default async function Page({ params }: detailsPageProps) {
  const { pokeId } = params

  const data = await fetchPokemonDetails(Number(pokeId))
  if (!data) {
    return <DetailsNotFound />
  } else {
    return <CardDetails />
  }
}
