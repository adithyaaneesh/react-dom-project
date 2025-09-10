import { Grid, Paper, Typography, Box, Divider, Stack, Pagination } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {TextField,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Avatar,Chip,IconButton,MenuItem,Select,Button,} from "@mui/material";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import React, { useState } from "react";
import debounce from "lodash.debounce";

const stats = [
    { label: "Pending Payment", value: 56, icon: <CalendarTodayIcon /> },
    { label: "Completed", value: "12,689", icon: <DoneAllIcon /> },
    { label: "Refunded", value: 124, icon: <AccountBalanceWalletIcon /> },
    { label: "Failed", value: 32, icon: <ErrorOutlineIcon /> },
];


const orders = [
    {
        id: "#6979",
        date: "Apr 15, 2023, 10:21",
        customer: "Elif Shafak",
        email: "ekifshafak@theguardian.com",
        avatar: "",
        payment: "Pending",
        status: "Delivered",
    },
    {
        id: "#6624",
        date: "Apr 17, 2023, 6:43",
        customer:"Coollen Hover",
        email: "coollenhover@army.mil",
        avatar: "",
        payment: "Failed",
        status: "Delivered",
    },
    {
        id: "#9305",
        date: "Apr 17, 2023, 8:05",
        customer: "William Shakespeare",
        email: "williamshake@wikia.com",
        avatar: "",
        payment: "Cancelled",
        status: "Out for Delivery",
    },
    {
        id: "#8005",
        date: "Apr 22, 2023, 3:01",
        customer: "Jane Austen",
        email: "austin@japanpost.jp",
        avatar: "",
        payment: "Paid",
        status: "Dispatched",
    },
];
const paymentChipColor = {
    Pending: "warning",
    Failed: "error",
    Cancelled: "default",
    Paid: "success",
};
const statusChipColor = {
    Delivered: "success",
    "Out for Delivery": "info",
    Dispatched: "warning",
    };

    
export default function OrdersDashboard() {

    const [data, setData] = useState(orders)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchInput = (e) => {
        const value = e.target.value
        setSearchQuery(value)
        handleSearch(value)
    }
    const handleSearch = debounce((val) => {
        
        if (val) {
            let list = orders.filter(item=> item.customer.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
            setData(list)
        } else {
            setData(orders)
        }
    }, 300)

return (
<Box sx={{ p: 1 }}>
   <Paper elevation={2} sx={{ p: 2, borderRadius: 2 ,width:"100%"}}>
        <Grid container>
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
    <Paper sx={{ p: 2, borderRadius: 2 , mt:1}} elevation={2}>
    <Box
        sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
        gap: 2,
        }}
    >
        <TextField
        placeholder="Search Order"
        size="small"
        sx={{ width: 250 }}
        value={searchQuery} 
        onChange={handleSearchInput}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* <Select size="small" defaultValue={10}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
        </Select> */}
        <Button sx={{p:1}}
            variant="outlined"
            startIcon={<DownloadIcon />}
            size="small"
        >
            Export
        </Button>
        </Box>
    </Box>
    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell></TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customers</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((o, i) => (
            <TableRow key={i}>
                <TableCell>
                    
                <IconButton size="small" color="primary">
                    <AddCircleOutlineIcon />
                </IconButton>
                </TableCell>
                <TableCell>
                <Typography color="primary">{o.id}</Typography>
                </TableCell>
                <TableCell>{o.date}</TableCell>
                <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={o.avatar} />
                    <Box>
                    <Typography variant="body2">{o.customer}</Typography>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {o.email}
                    </Typography>
                    </Box>
                </Box>
                </TableCell>
                <TableCell>
                <Chip
                    label={o.payment}
                    color={paymentChipColor[o.payment]}
                    variant="outlined"
                    size="small"
                />
                </TableCell>
                <TableCell>
                <Chip
                    label={o.status}
                    color={statusChipColor[o.status]}
                    variant="filled"
                    size="small"
                />
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    </Paper>
    <Stack spacing={2} sx={{mt:2, alignItems:"flex-end" }}>
                <Pagination count={10} color="primary" />
                </Stack>
</Box>
);
}