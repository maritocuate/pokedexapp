import { Container } from '@mui/material'
import SearchBar from './SearchBar'

interface WithSearchBarProps {
  children: JSX.Element
}

export default function WithSearchBar({
  children,
}: WithSearchBarProps): JSX.Element {
  return (
    <Container>
      <SearchBar />
      {children}
    </Container>
  )
}
