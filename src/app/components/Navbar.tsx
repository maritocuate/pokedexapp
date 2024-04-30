'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center', paddingY: 3 }}>
        <Typography>PokedexApp</Typography>
        <IconButton color="inherit" aria-label="menu">
          <CatchingPokemonIcon fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
