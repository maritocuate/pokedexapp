'use client'
import { createTheme } from '@mui/material/styles'
import colors from './base/colors'
import typography from './base/typography'

const mainTheme = createTheme({
  typography: { ...typography },
  palette: { ...colors },
})

export default mainTheme
