import { Container } from '@mui/material'
import ItemList from './components/Home/ItemList'
import WithSearchBar from './components/Home/WithSearchBar'

export default function Home() {
  return (
    <main>
      <Container maxWidth="md" sx={{ minHeight: 'calc(100vh - 14rem)', my: 4 }}>
        <WithSearchBar>
          <ItemList />
        </WithSearchBar>
      </Container>
    </main>
  )
}
