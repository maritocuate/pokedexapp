import { Container, Grid } from '@mui/material'
import Item from './Item'
import { PokemonResult } from '@/types'

interface ItemListProps {
  dataList: PokemonResult[]
}

export default function ItemList({ dataList }: ItemListProps) {
  return (
    <Container>
      <Grid container spacing={2} className="flex justify-center">
        {dataList.map((item: PokemonResult, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
