import React, { useState } from "react";
import {Box,Paper,TextField,Select,MenuItem,Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Avatar,Typography,Switch,IconButton,Menu, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Stack, Pagination} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useNavigate } from "react-router-dom";
const sampleProducts = [
    {
        name: "Banana Pop",
        desc: "Add a burst of energy to your look with Banana Pop! ",
        img: "https://static.wixstatic.com/media/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg",
        stock: false,
        sku: "31063",
        qty: "942",
    },
    {
        name: "Night Desert",
        desc: "Inspired by desert landscapes",
        img: "https://static.wixstatic.com/media/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg",
        price:260,
        stock: false,
        sku: "5829",
        qty: "587",
    },
    {
        name: "Indigo Splash",
        desc:"Bold strokes of cobalt blue bring Blue Splash to life.",
        img: "https://static.wixstatic.com/media/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg",
        stock: true,
        sku: "35946",
        qty: "468",
    },
    {
        name: "Tiger Muse",
        desc: "Bold and artistic.",
        img: "https://static.wixstatic.com/media/45d10e_871191908b1c4045995538d0a943a5a3~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_871191908b1c4045995538d0a943a5a3~mv2.jpg",
        stock: false,
        sku: "46658",
        qty: "301",
    },
    {
        name: "Rustic Strokes",
        desc: "Make a bold impression with Rustic Strokes.",
        img: "https://static.wixstatic.com/media/45d10e_dd5d9543998c4c0f9ecf120fac20ffb0~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_dd5d9543998c4c0f9ecf120fac20ffb0~mv2.jpg",
        stock: true,
        sku: "41867",
        qty: "579",
    },
    {
        name: "Banana Pop",
        desc: "Add a burst of energy to your look with Banana Pop! ",
        img: "https://static.wixstatic.com/media/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg",
        stock: false,
        sku: "31063",
        qty: "942",
    },
    {
        name: "Banana Pop",
        desc: "Add a burst of energy to your look with Banana Pop! ",
        img: "https://static.wixstatic.com/media/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg",
        stock: false,
        sku: "31063",
        qty: "942",
    },
    {
        name: "Night Desert",
        desc: "Inspired by desert landscapes",
        img: "https://static.wixstatic.com/media/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg",
        price:260,
        stock: false,
        sku: "5829",
        qty: "587",
    },
    {
        name: "Night Desert",
        desc: "Inspired by desert landscapes",
        img: "https://static.wixstatic.com/media/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg",
        price:260,
        stock: false,
        sku: "5829",
        qty: "587",
    },
    {
        name: "Indigo Splash",
        desc:"Bold strokes of cobalt blue bring Blue Splash to life.",
        img: "https://static.wixstatic.com/media/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg",
        stock: true,
        sku: "35946",
        qty: "468",
    },
    {
        name: "Indigo Splash",
        desc:"Bold strokes of cobalt blue bring Blue Splash to life.",
        img: "https://static.wixstatic.com/media/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg/v1/fill/w_563,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45d10e_1d14719f23fa4277bddd33220562c678~mv2.jpg",
        stock: false,
        sku: "35946",
        qty: "468",
    },
    
    
];
export default function ProductDashboard() {
    // const [selected, setSelected] = React.useState([]);
    const [open, setOpen ] = useState(false);
    const [products, setProducts] = useState(sampleProducts);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("Status");
    const [stockFilter, setStockFilter] = useState("Stock");
    // const [rowsPerPage, setRowsPerPage] = useState(7);
    
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleExportClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);





    const handleExport = (type) => {
        if (type === "csv") {
            let csv = "Name,Stock,SKU,Qty\n";
            products.forEach((p) => {
                csv += `${p.name},${p.stock ? "In Stock" : "Out of Stock"},${p.sku},${p.qty}\n`;
            });
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "products.csv";
            link.click();
        }
        if (type === "print") window.print();
        if (type === "copy") navigator.clipboard.writeText(JSON.stringify(products, null, 2));
        if (type === "pdf") alert("PDF export needs jsPDF or similar lib ");
        if (type === "excel") alert("Excel export needs SheetJS (xlsx) ");
        handleClose();
    };
   
    const handlePageChange = (event, value) => {
    setPage(value);
    };

    const handleStockToggle = (index) => {
        const updated = [...products];
        updated[index].stock = !updated[index].stock;
        setProducts(updated);
    };
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleCloseDialog = () => {
        setOpen(false)
    }

    // const handleSelectAll = (event) => {
    // if (event.target.checked) {
    //   setSelected(sampleProducts.map((sampleProducts) => sampleProducts.id));
    // } else {
    //   setSelected([]);
    // }
    // };

    // const handleSelectRow = (id) => {
    //   setSelected((prev) =>
    //     prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    //   );
    // };

    const handleAddProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct({ name: "", desc: "", img: "", stock: false, sku: "", qty: "" });
        handleCloseDialog();
    };

    const [newProduct, setNewProduct] = useState({
        name: "", desc: "", img: "", stock: false, sku: "", qty: ""
    });

    const filteredProducts = products.filter((p) => {
        const matchSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.desc.toLowerCase().includes(search.toLowerCase());
        const matchStatus =
            statusFilter === "Status"
                ? true
                : statusFilter === "Active"
                ? p.stock
                : !p.stock;
        const matchStock =
            stockFilter === "Stock"
                ? true
                : stockFilter === "In Stock"
                ? p.stock
                : !p.stock;
        return matchSearch && matchStatus && matchStock;
    });

    const paginatedProducts = filteredProducts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
    );

    return (
        <Box sx={{ p: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                        gap: 2,
                    }}
                >
                    <TextField
                        placeholder="Search Product"
                        size="small"
                        sx={{ width: 250 }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          size="small"
                      >
                          <MenuItem value="Status">Status</MenuItem>
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Inactive">Inactive</MenuItem>
                      </Select>
                      <Select
                          value={stockFilter}
                          onChange={(e) => setStockFilter(e.target.value)}
                          size="small"
                      >
                          <MenuItem value="Stock">Stock</MenuItem>
                          <MenuItem value="In Stock">In Stock</MenuItem>
                          <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                      </Select>
                        {/* <Select
                            size="small"
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                        >
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select> */}
                        <Button sx={{p:1}}
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            size="small"
                            onClick={handleExportClick}
                        >
                            Export
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleExport("print")}>
                                <PrintIcon fontSize="small" sx={{ mr: 1 }} /> Print
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("csv")}>
                                <TableChartIcon fontSize="small" sx={{ mr: 1 }} /> CSV
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("excel")}>
                                <GridOnIcon fontSize="small" sx={{ mr: 1 }} /> Excel
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("pdf")}>
                                <PictureAsPdfIcon fontSize="small" sx={{ mr: 1 }} /> PDF
                            </MenuItem>
                            <MenuItem onClick={() => handleExport("copy")}>
                                <FileCopyIcon fontSize="small" sx={{ mr: 1 }} /> Copy
                            </MenuItem>
                        </Menu>
                        <Button 
                            variant="contained"
                            startIcon={<AddIcon />}
                            size="small"
                            sx={{ backgroundColor: "#6C5CE7" , p:1}}
                            onClick={handleClickOpen}
                        >
                            Add Product
                        </Button>
                    </Box>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                              {/* <TableCell padding="checkbox">
                                <Checkbox
                                  indeterminate={
                                    selected.length > 0 && selected.length < sampleProducts.length
                                  }
                                  checked={sampleProducts.length > 0 && selected.length === sampleProducts.length}
                                  onChange={handleSelectAll}
                                />
                              </TableCell> */}
                                <TableCell></TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Stock</TableCell>
                                <TableCell>SKU</TableCell>
                                <TableCell>QTY</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                    {paginatedProducts.map((p, i) => (
                        <TableRow key={i}>
                        <TableCell>
                            <IconButton size="small" color="primary">
                            {/* optional actions */}
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Avatar
                                variant="rounded"
                                src={p.img}
                                alt={p.name}
                                sx={{ width: 40, height: 40 }}
                            />
                            <Box>
                                <Typography variant="body2">{p.name}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                {p.desc}
                                </Typography>
                            </Box>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Switch checked={p.stock} onChange={() => handleStockToggle(i)} />
                        </TableCell>
                        <TableCell>{p.sku}</TableCell>
                        <TableCell>{p.qty}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>

                    </Table>
                </TableContainer>
            {/* </Paper> */}

            <Dialog open={open} onClose={handleCloseDialog}>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                <TextField label="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} fullWidth />
                <TextField label="Description" value={newProduct.desc} onChange={(e) => setNewProduct({ ...newProduct, desc: e.target.value })} fullWidth />
                <TextField label="Image URL" value={newProduct.img} onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })} fullWidth />
                <TextField label="SKU" value={newProduct.sku} onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })} fullWidth />
                <TextField label="Quantity" value={newProduct.qty} onChange={(e) => setNewProduct({ ...newProduct, qty: e.target.value })} fullWidth />
                <Select
                value={newProduct.stock ? "In Stock" : "Out of Stock"}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value === "In Stock" })}
                >
                <MenuItem value="In Stock">In Stock</MenuItem>
                <MenuItem value="Out of Stock">Out of Stock</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleAddProduct} variant="contained">Add</Button>
            </DialogActions>
            </Dialog>
            <Stack spacing={2} sx={{ mt: 2, alignItems: "flex-end" }}>
                <Pagination
                    count={Math.ceil(filteredProducts.length / rowsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>

        </Box>
        
    );
}