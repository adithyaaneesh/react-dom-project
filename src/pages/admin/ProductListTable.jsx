import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, Checkbox, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

const rows = [
  { id: 1, product: "#1001", stock: "2025-08-20", sku: "John Doe", price: "$200",qty:"g", status: "Completed", action:"hii" },
];

const ProductListTable = () => {
  const [selected, setSelected] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState("");

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const filteredRows = rows.filter(
    (row) =>
      row.product.toLowerCase().includes(search.toLowerCase()) ||
      row.stock.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%" }}>
        <Typography
          sx={{ flex: '1 1 100%', m:2 }}
          variant="h6"
          id="tableTitle"
          component="div"

        >
          Filter
        </Typography>
      {/* Top Bar */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Order"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Select
            size="small"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(e.target.value)}
            sx={{ mr: 2, minWidth: 80 }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon />}
            sx={{
              backgroundColor: "#f5f5f5",
              color: "text.primary",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Export
          </Button>
          <Button variant="contained" type="submit" color="primary" 
          sx={{
            ml:1,
              color: "text.white",
              textTransform: "none",
            }}
          >
             +Add Product
          </Button>
        </Grid>
      </Grid>

      {/* Table */}
      <Paper>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>PRODUCT</TableCell>
                <TableCell>STOCK</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>QTY</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => {
                const isSelected = selected.includes(row.id);
                return (
                  <TableRow
                    key={row.id}
                    hover
                    role="checkbox"
                    selected={isSelected}
                    onClick={() => handleSelectRow(row.id)}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell>{row.stock}</TableCell>
                    <TableCell>{row.sku}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.qty}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.action}</TableCell>
                    {/* <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          display: "inline-block",
                          fontWeight: 500,
                          bgcolor:
                            row.status === "Completed"
                              ? "success.light"
                              : row.status === "Pending"
                              ? "warning.light"
                              : row.status === "Failed"
                              ? "error.light"
                              : "info.light",
                          color:
                            row.status === "Completed"
                              ? "success.dark"
                              : row.status === "Pending"
                              ? "warning.dark"
                              : row.status === "Failed"
                              ? "error.dark"
                              : "info.dark",
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ProductListTable;