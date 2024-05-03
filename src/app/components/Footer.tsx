import { Box } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex space-x-3 text-xs text-gray-500">
            <a href="https://github.com/maritocuate" target="_blank">
              💻 <strong>@marioquiroga</strong>
            </a>
            <a href="https://github.com/maritocuate/pokedexapp" target="_blank">
              ⚙️ source
            </a>
          </div>
        </div>
      </div>
    </Box>
  )
}
