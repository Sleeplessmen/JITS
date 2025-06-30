import styles from "./Section03.module.css";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { useState } from "react";

export default function Section03() {
    const [products, setProducts] = useState([]);

    function handleAddProduct(newProduct) {
        setProducts((prev) => [...prev, newProduct])
    }

    return (
        <div className={styles.container}>
            <ProductForm onAddProduct={handleAddProduct} />
            <ProductList products={products} />
        </div>
    );
}