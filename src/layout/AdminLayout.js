import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Collapse } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

// menu config
const items = [
  { text: "Dashboard", icon: <DashboardIcon />, path: '/admin/dashboard' },
  {
    text: "Products", icon: <InventoryIcon />, children: [
      { text: "All Products", path: "/admin/product" },
      { text: "Add Product", path: "/admin/product/add" },
      { text: "Edit Product", path: "/admin/product/edit" },
    ]
  },
  { text: "Order", icon: <ShoppingCartIcon />, path: '/admin/order' },
  { text: "Customers", icon: <PeopleIcon />, path: '/admin/customer' },
  { text: 'Analytics', icon: <TrendingUpIcon />, path: '/admin/analytics' },
  { text: "Settings", icon: <SettingsIcon />, path: '/admin/settings' },
];

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  // 🔥 Advanced active style
  const getItemStyles = (isActive) => ({
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
    bgcolor: isActive ? "primary.light" : "transparent",
    color: isActive ? "black" : "black",
    "& .MuiSvgIcon-root": { color: "black" },

    borderRadius: 3,
    "&:hover": {
      bgcolor: isActive ? "primary.light" : "grey.200",
      color: "black",
      "& .MuiSvgIcon-root": { color: "blue" }
    }
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto' }}>
            <Avatar sx={{ width: 36, height: 36 }}
              alt="Cindy Baker"
              src="/images/femaleavatar.jpg" />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer variant="permanent" open={open} sx={{ mr: 1 }}>
        <DrawerHeader>
          <Avatar sx={{ width: 36, height: 36 }}
            alt="Cindy Baker"
            src="/images/logo.webp" />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Urban Tote Co.
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {items.map((item) => {
            const isActive = item.path && location.pathname.includes(item.path);

            return (
              <React.Fragment key={item.text}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => {
                      if (item.children) {
                        toggleDropdown(item.text);
                      } else {
                        item.path && navigate(item.path);
                      }
                    }}
                    sx={getItemStyles(isActive)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: isActive ? "white" : "black",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />

                    {/* arrow indicator for dropdown */}
                    {item.children && open && (
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: openDropdown[item.text] ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s",
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {/* Dropdown children */}
                {item.children && (
                  <Collapse in={openDropdown[item.text] && open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => {
                        const childActive = location.pathname === child.path;
                        return (
                          <ListItemButton
                            key={child.text}
                            sx={{
                              pl: 4,
                              ...getItemStyles(childActive),
                            }}
                            onClick={() => navigate(child.path)}
                          >
                            <ListItemIcon>
                              <PanoramaFishEyeIcon
                                sx={{
                                  fontSize: 'small',
                                  color: childActive ? "white" : "black"
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={child.text} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
