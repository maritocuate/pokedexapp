import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function Item() {
  return (
    <Card>
      <CardMedia
        component="img"
        height={140}
        src="https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg"
      />
      <CardContent>
        <Typography variant="h6">Title</Typography>
      </CardContent>
    </Card>
  )
}
