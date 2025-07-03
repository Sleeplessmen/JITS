import styles from "../section03/Section03.module.css";
import ProductList from "../../components/section03/ProductList";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/products";

export default function Section04() {
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

    return (
        <div className={styles.container}>
            {loading && <p>Loading...</p>}
            {error && <p className="error">Error loading products: {error.message}</p>}
            <ProductList products={products} />
        </div>
    );
}
