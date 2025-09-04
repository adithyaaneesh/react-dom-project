import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
function AddProduct() {

const [product, setProduct] = useState({
name: "",
category: "",
price: "",
stock: "",
description: "",
image: null,
});
const [preview, setPreview] = useState(null);
const [errors, setErrors] = useState({});
const handleChange = (e) => {
const { name, value } = e.target;
setProduct((prev) => ({ ...prev, [name]: value }));
};
const handleImageChange = (e) => {
const file = e.target.files[0];
if (file) {
    setProduct((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
}
};
const validate = () => {
    let temp = {};
    temp.name = product.name ? "" : "Product name is required";
    temp.category = product.category ? "" : "Category is required";
    temp.price = product.price && !isNaN(product.price)
        ? ""
        : "Valid price required";
    temp.stock = product.stock && !isNaN(product.stock)
        ? ""
        : "Valid stock required";
    temp.description = product.description ? "" : "Description is required";
    setErrors(temp);
        return Object.values(temp).every((x) => x === "");
};
const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
        console.log("Product submitted:", product);
        alert("Product added successfully :white_check_mark:");
// Reset
setProduct({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: null,
});
setPreview(null);
};
const handleReset = () => {
setProduct({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: null,
});
setPreview(null);
setErrors({});
};
return (
<Box sx={{ maxWidth: 800, mx: "auto", mt: 3 }}>
    <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
    <Typography variant="h5" gutterBottom>
        Add New Product
    </Typography>
    <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Price ($)"
            name="price"
            value={product.price}
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            fullWidth
            label="Stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            error={!!errors.stock}
            helperText={errors.stock}
            />
        </Grid>
        <Grid item xs={12} size={4}>
            <TextField
            fullWidth
            multiline
            rows={1}
            label="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            />
        </Grid>
        <Grid item xs={12}>
            <Button
            variant="outlined"
            component="label"
            startIcon={<CloudUploadIcon />}
            >
            Upload Image
            <input type="file" hidden onChange={handleImageChange} />
            </Button>
            {preview && (
            <Box mt={2}>
                <img
                src={preview}
                alt="Preview"
                style={{ width: "150px", borderRadius: "8px" }}
                />
            </Box>
            )}
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "right" }} >
            <Button variant="outlined" color="secondary" onClick={handleReset} sx={{ mr: 2 }}>
            Reset
            </Button>
            <Button variant="contained" type="submit" color="primary">
                
            Add Product
            </Button>
        </Grid>
        </Grid>
    </form>
    </Paper>
</Box>
);
}
export default AddProduct;