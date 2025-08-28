import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ChartBar from '../../components/Chart'
import DonutChart from '../../components/Donut'

const DashboardPage = () => {
  return (
       <Grid container spacing={1} sx={{mt:2, mr:1}}>
          <Grid item xs={2} md={4} size={4}>
            <Card sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: 6,
                  // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  // color: "white",
                },
              }}>
              <CardContent>
                <Typography variant="h6" gutterBottom> Orders</Typography>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  245
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Orders</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} md={4} size={4}>
            <Card  sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: 6,
                  // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  // color: "white",
                },
              }}>
              <CardContent>
                <Typography variant="h6" gutterBottom> Products</Typography>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  245
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Orders</Button>
              </CardActions>
            </Card>
          </Grid>
           <Grid item xs={2} md={4} size={4}>
            <Card sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: 6,
                  // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  // color: "white",
                },
              }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Payments</Typography>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  1,245
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Orders</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} md={4} size={5}>
            <Card sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: 6,
                  // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  // color: "white",
                },
              }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: 'black' }}>Profit</Typography>
                <Typography variant="p" sx={{ color: 'grey' }}>Last Month</Typography>
                <ChartBar/>
                {/* <Typography variant="h6" sx={{ color: 'black' }}>625k</Typography> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={4} size={5}>
            <Card sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: 6,
                  // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  // color: "white",
                },
              }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: 'black' }}>Report</Typography>
                <Typography variant="p" sx={{ color: 'grey' }}>Monthly Report</Typography>
                <DonutChart/>
              </CardContent>
            </Card>
          </Grid>
         
          <Grid item xs={3} md={4} size={2}>
            <Card sx={{ minHeight: 100,
             boxShadow: 3 ,
             transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
             "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: 6,
             }
               }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Return & Refund</Typography>
                <Typography variant="h4" sx={{ color: 'secondary.main' }}>
                  12
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Manage Products</Button>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid item xs={12} md={4} size={4}>
            <Card sx={{ minHeight: 150, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Updates</Typography>
                <Typography variant="h4" sx={{ color: 'success.main' }}>
                  890
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Customers</Button>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4} size={4} >
            <Card sx={{ minHeight: 150, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Return and refund</Typography>
                <Typography variant="h4" sx={{ color: 'success.main' }}>
                  890
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Returns & Refunds</Button>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
  )
}

export default DashboardPage
