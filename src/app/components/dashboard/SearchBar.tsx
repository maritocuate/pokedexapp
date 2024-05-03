import { Autocomplete, FormGroup, TextField } from '@mui/material'
import { POKEMON as allPokemon } from '@/app/lib/pokemonData'

export default function SearchBar() {
  return (
    <FormGroup className="flex justify-center my-6" row>
      <Autocomplete
        onChange={(event, newValue) => {
          if (
            typeof newValue === 'object' &&
            newValue !== null &&
            'name' in newValue
          ) {
            window.open(`/${newValue.name}`, '_self')
          }
        }}
        options={allPokemon}
        getOptionLabel={option => {
          if (typeof option === 'string') {
            return option
          }
          if (option.name) {
            return option.name
          }
          return option.name
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li {...props} key={option.name}>
            {option.name}
          </li>
        )}
        sx={{ width: 300 }}
        freeSolo
        renderInput={params => (
          <TextField {...params} label="Search..." size="small" />
        )}
      />
    </FormGroup>
  )
}
