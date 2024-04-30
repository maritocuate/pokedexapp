import {
  Button,
  FormGroup,
  Icon,
  InputAdornment,
  InputBase,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
  return (
    <FormGroup
      sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}
      row
    >
      <InputBase
        placeholder="Search..."
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormGroup>
  )
}
