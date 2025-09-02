import React from 'react';
import { Grid, Paper, Typography, Box, Divider } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ProductListTable from './ProductListTable';

const stats = [
    { label: "Pending Payment", value: 56, icon: <CalendarTodayIcon /> },
    { label: "Completed", value: "12,689", icon: <DoneAllIcon /> },
    { label: "Refunded", value: 124, icon: <AccountBalanceWalletIcon /> },
    { label: "Failed", value: 32, icon: <ErrorOutlineIcon /> },
];


const ProductList = () => {
return (
<Box sx={{ p: 1 }}>
   <Paper elevation={2} sx={{ p: 2, borderRadius: 2 ,width:"100%"}}>
        <Grid container sx={{flexBasis:"25%"}}>
            {stats.map((item, index) => (
            <React.Fragment key={index}>
                <Box sx={{flexGrow:1 ,p:1}}>
                <Box
                
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ p: 2 }}
                >
                    <Box>
                    <Typography variant="h4" fontWeight="bold">
                        {item.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.label}
                    </Typography>
                    </Box>
                    <Box color="text.secondary">{item.icon}</Box>
                </Box>
                </Box>
                {index < stats.length - 1 && (
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: "none", sm: "block" } }}
                />
                )}
            </React.Fragment>
            ))}
            
        </Grid>
    </Paper>
    <Paper elevation={4} direction="row" spacing={2}  sx={{p: 2, borderRadius: 2 , mt:1, width:"100%"}}>
        <ProductListTable/>
    </Paper>
</Box>

    
  );
}

export default ProductList;