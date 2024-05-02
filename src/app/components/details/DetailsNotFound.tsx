import { Box, Container, Typography, Link as LinkMU } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'

export default function DetailsNotFound() {
  return (
    <Container
      maxWidth="sm"
      className="flex flex-col align-center justify-center text-center"
      sx={{ minHeight: 'calc(100vh - 10rem)' }}
    >
      <Box>
        <ErrorIcon
          className="m-5"
          sx={{ color: 'secondary.main', fontSize: '9rem' }}
        />
      </Box>
      <Typography variant="h1">Details not found</Typography>
      <LinkMU href="/" variant="body1">
        Go back
      </LinkMU>
    </Container>
  )
}
