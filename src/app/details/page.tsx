import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'

export default function Page() {
  return (
    <Container maxWidth="md" sx={{ my: 4, minHeight: 'calc(100vh - 14rem)' }}>
      <Box component="section">
        <Typography variant="h1" sx={{ left: 0 }}>
          Details
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              my: 4,
            }}
          >
            <CardMedia
              component="img"
              src="https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg"
            />
            <CardContent>
              <Typography variant="h6">Title</Typography>
              <Typography variant="body1">Title</Typography>
              <Typography variant="body2">Title</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}
