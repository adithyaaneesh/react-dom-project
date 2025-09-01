import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import DonutChart from '../../components/Donut'
import ChartBar from '../../components/Chart'

const Analytics = () => {
  return (
    <div>
      <Grid item xs={3} md={4} size={5} sx={{mb:3, mr:4, mt:3, ml:4}}>
            <Card sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                // "&:hover": {
                //   transform: "scale(1.01)",
                //   boxShadow: 6,
                //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                //   color: "white",
                // },
              }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: 'black' }}>Profit</Typography>
                <Typography variant="p" sx={{ color: 'grey' }}>Last Month</Typography>
                <ChartBar/>
                {/* <Typography variant="h6" sx={{ color: 'black' }}>625k</Typography> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={4} size={5} sx={{mb:3, mr:4, mt:3, ml:4}}>
            <Card sx={{
                minHeight: 100,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                // background: "linear-gradient(135deg, #ffffff, #f3e5f5)",
                // "&:hover": {
                //   transform: "scale(1.01)",
                //   boxShadow: 6,
                //   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                //   color: "white",
                // },
              }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: 'black' }}>Report</Typography>
                <Typography variant="p" sx={{ color: 'grey' }}>Monthly Report</Typography>
                <DonutChart/>
              </CardContent>
            </Card>
          </Grid>
    </div>
  )
}

export default Analytics
