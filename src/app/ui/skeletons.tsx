import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material'

export function DetailsSkeleton() {
  return (
    <Box component="section">
      <Typography variant="h1" className="capitalize flex items-center gap-1">
        <Skeleton variant="circular" animation="wave" width={50} height={50} />
        <Skeleton animation="wave" height={80} width="30%" />
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
          <Skeleton variant="rectangular" width={500} height={500} />
          <CardContent>
            <Skeleton animation="wave" height={30} width="40%" />
            <Skeleton animation="wave" height={20} width="70%" />
            <Skeleton animation="wave" height={20} width="70%" />
            <Skeleton animation="wave" height={20} width="70%" />
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
