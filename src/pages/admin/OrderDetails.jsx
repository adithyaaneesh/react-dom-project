// import { Grid, Paper, Typography, Box, Divider } from "@mui/material";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import React from "react";

// const stats = [
//   { label: "Pending Payment", value: 56, icon: <CalendarTodayIcon /> },
//   { label: "Completed", value: "12,689", icon: <DoneAllIcon /> },
//   { label: "Refunded", value: 124, icon: <AccountBalanceWalletIcon /> },
//   { label: "Failed", value: 32, icon: <ErrorOutlineIcon /> },
// ];

// const OrderDetails = () => {
//   return (
//     <Paper elevation={2} sx={{ p: 2, borderRadius: 2, mt: 2, mr: 1 }}>
//       <Grid container alignItems="center">
//         {stats.map((item, index) => (
//           <React.Fragment key={index}>
//             <Grid item xs={6} sm={3}>
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 flexDirection="column"
//                 gap={1}
//                 sx={{ textAlign: "center", height: "100%" }}
//               >
//                 <Box
//                   color="text.secondary"
//                   display="flex"
//                   alignItems="center"
//                   gap={1}
//                 >
//                   <Typography variant="h5" fontWeight="bold">
//                     {item.value}
//                   </Typography>
//                   {item.icon}
//                 </Box>

//                 <Box color="text.secondary">
//                   <Typography variant="body2">{item.label}</Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Divider between items (except last) */}
//             {index < stats.length - 1 && (
//               <Divider
//                 orientation="vertical"
//                 flexItem
//                 sx={{ borderColor: "grey.300" }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </Grid>
//     </Paper>
//   );
// };

// export default OrderDetails;
