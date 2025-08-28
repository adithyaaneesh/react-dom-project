// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PeopleIcon from '@mui/icons-material/People';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PaymentIcon from '@mui/icons-material/Payment';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import DashboardPage from '../pages/admin/Dashboard';
// const drawerWidth = 240;
// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });
// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });
// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }));
// const items = [
//   { text: "Dashboard", icon: <DashboardIcon />},
//   { text: "Products", icon: <InventoryIcon /> },
//   { text: "Order", icon: <ShoppingCartIcon /> },
//   { text: "Customers", icon: <PeopleIcon /> },
//   { text: "Return/Refunds", icon: <PaymentIcon/>},
//   { text: 'Analytics', icon: <TrendingUpIcon /> },
//   { text: "Settings", icon: <SettingsIcon />}, 
// ]
// const Dashboard = () => {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//           <Stack direction="row" spacing={2} sx={{marginLeft:'auto'}}>
//             <Avatar sx={{ bgcolor:'white' , width: 36, height: 36 , }}
//             alt="Cindy Baker"
//             src="/images/femaleavatar.jpg" />
//           </Stack>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             Urban Tote Co.
//           </Typography>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//        <List>
//           {items.map((item) => (
//             <ListItem key={item.text} disablePadding>
//               <ListItemButton
//                 sx={{ color: "black", "&:hover": { bgcolor: "grey.200" } }}
//               >
//                 <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1 }}>
//         <DrawerHeader />
//             <DashboardPage/>
//       </Box>
//     </Box>
//   );
// }
// export default Dashboard