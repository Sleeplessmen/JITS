import styles from "./Section03.module.css";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import { useState } from "react";

export default function Section03() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Wireless Mouse', price: 25.99 },
        { id: 2, name: 'Mechanical Keyboard', price: 79.5 },
        { id: 3, name: 'USB-C Hub', price: 34.0 },
        { id: 4, name: '27 Monitor', price: 199.99 },
        { id: 5, name: 'Laptop Stand', price: 45.75 },
    ]);
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