import styles from "./Section08.module.css";
import ProductList from "../../components/section08/ProductList";
import ProductForm from "../../components/section08/ProductForm";
import { useState, useEffect } from "react";
import ProductRepository from "../../repositories/ProductRepository";

import {
    CircularProgress,
    Snackbar,
    Alert,
    Backdrop,
    Box,
} from "@mui/material";

export default function Section08() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addingProduct, setAddingProduct] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success", // success | error | warning | info
    });

    useEffect(() => {
        setLoading(true);
        ProductRepository.fetchAll()
            .then(setProducts)
            .catch((err) => {
                console.error("Failed to load products:", err);
                showSnackbar(`Error loading products: ${err.message}`, "error");
            })
            .finally(() => setLoading(false));
    }, []);

    const showSnackbar = (message, severity = "success") => {
        setSnackbar({ open: true, message, severity });
    };

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    async function handleAddProduct(newProduct) {
        setAddingProduct(true);
        try {
            const added = await ProductRepository.create(newProduct);
            setProducts((prev) => [...prev, added]);
            showSnackbar("Product added successfully!", "success");
        } catch (err) {
            console.error("Failed to add product:", err);
            showSnackbar(`Failed to add product: ${err.message}`, "error");
        } finally {
            setAddingProduct(false);
        }
    }

    return (
        <div className={styles.container}>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" p={4}>
                    <CircularProgress size={40} />
                </Box>
            ) : (
                <>
                    <Backdrop open={addingProduct} sx={{ zIndex: 1000, color: "#fff" }}>
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    <ProductForm onAddProduct={handleAddProduct} />
                    <ProductList products={products} />
                </>
            )}

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity={snackbar.severity} onClose={handleCloseSnackbar} sx={{ width: "100%" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
