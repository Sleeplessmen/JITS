import styles from "../section04/Section04.module.css";
import ProductList from "../../components/section04/ProductList";
import ProductEditModal from "../../components/section04/ProductEditModal";
import { useState, useEffect } from "react";
import ProductRepository from "../../repositories/ProductRepository";

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';

export default function Section04() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actionError, setActionError] = useState(null);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        setLoading(true);
        ProductRepository.fetchAll()
            .then(setProducts)
            .catch((err) => {
                console.error("Failed to load products:", err);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);

    function handleEdit(product) {
        setEditingProduct(product);
        setActionError(null);
    }

    async function handleSave(updatedProduct) {
        setActionError(null);
        try {
            const res = await ProductRepository.update(updatedProduct.id, updatedProduct);
            setProducts((prev) =>
                prev.map((p) => (p.id === res.id ? res : p))
            );
            setEditingProduct(null);
        } catch (err) {
            console.error("Update failed:", err);
            setActionError(new Error(`Failed to update product: ${err.message}`));
        } finally {
            // If the modal is still open due to an error, we keep it open.
            // If it was successfully saved, it's already set to null.
        }
    }

    async function handleDelete(product) {
        const confirmed = window.confirm(`Are you sure you want to delete "${product.name}"?`);
        if (!confirmed) return;

        setActionError(null);
        try {
            await ProductRepository.delete(product.id);
            setProducts((prev) => prev.filter((p) => p.id !== product.id));
        } catch (err) {
            console.error("Delete failed:", err);
            setActionError(new Error(`Failed to delete product: ${err.message}`));
        }
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setActionError(null);
    };

    return (
        <div className={styles.container}>

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <CircularProgress />
                </Box>
            )}

            {!loading && error && (
                <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
                    Error loading products: {error.message}
                </Alert>
            )}

            {!loading && !error && (
                <ProductList
                    products={products}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}

            {editingProduct && (
                <ProductEditModal
                    product={editingProduct}
                    onSave={handleSave}
                    onClose={() => setEditingProduct(null)}
                />
            )}

            <Snackbar
                open={!!actionError}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {actionError?.message}
                </Alert>
            </Snackbar>
        </div>
    );
}