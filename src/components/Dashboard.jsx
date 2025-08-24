import { AppBar, Box, Button, Card, CardActions, CardContent, Divider, Drawer, Grid, Grow, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const DashBoard = () => {
    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <Typography variant="h6" textAlign="center" component="div" sx={{ flexGrow: 1 }}>
        Urban Tote Co.
    </Typography>
      <List>
        {['Orders', 'Products','Customers', 'Collections'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>                
                {index % 2 === 0 ? <CategoryIcon /> : <InventoryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Analytics', 'Settings' , 'Returns/Refunds', 'Review/Ratings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <TrendingUpIcon /> : <SettingsIcon /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 , width: "100%" }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DashBoard
          </Typography>
          <Button color="inherit"><img src="/images/userpass.svg" alt="Login" /></Button>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
       <Grid container spacing={2} direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
        <Grid size={8}>
          <Item sx={{ height: '200px', boxSizing: 'border-box' }}>Sales</Item>
        </Grid>
        <Grid size={4}>
          <Item sx={{ height: '200px', boxSizing: 'border-box' }}>Revenue</Item>
        </Grid>
        <Grid size={4}>
          <Item sx={{ height: '200px', boxSizing: 'border-box' }}>Update</Item>
        </Grid>
        <Grid size={8}>
          <Item sx={{ height: '200px', boxSizing: 'border-box' }}>Expenses</Item>
        </Grid>
        <Grid size={8}>
          <Item sx={{ height: '200px', boxSizing: 'border-box' }}>Customer Review</Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
export default DashBoard