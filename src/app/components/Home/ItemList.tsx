import { Container, Grid } from '@mui/material'
import Item from './Item'

export default function ItemList() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Item />
        </Grid>
      </Grid>
    </Container>
  )
}
