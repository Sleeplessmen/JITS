import styles from "./Section03.module.css";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { useState, useEffect } from "react";
import { fetchProducts, addProduct } from "../../api/products";

export default function Section03() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch((err) => {
                console.error("Failed to load products:", err);
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);

    async function handleAddProduct(newProduct) {
        try {
            const added = await addProduct(newProduct);
            setProducts((prev) => [...prev, added]);
        } catch (err) {
            console.error("Failed to add product:", err);
        }
    }

    return (
        <div className={styles.container}>
            {loading && <p>Loading...</p>}
            {error && <p className="error">Error loading products: {error.message}</p>}
            <ProductForm onAddProduct={handleAddProduct} />
            <ProductList products={products} />
        </div>
    );
}
