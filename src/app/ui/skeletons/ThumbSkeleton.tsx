import { Card, CardContent, Grid, Skeleton } from '@mui/material'

export default function ThumbSkeleton() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Skeleton animation="wave" variant="rectangular" height={230} />
        <CardContent>
          <Skeleton animation="wave" height={20} width="30%" />
        </CardContent>
      </Card>
    </Grid>
  )
}
