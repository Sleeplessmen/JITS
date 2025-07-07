import { Button, Input, ModalConfirm } from "@/components/shared";
import { useState } from "react";
import styles from "./ProductList.module.css";

export default function ProductList({ products, onDelete }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = (product) => {
        setSelectedProduct(product);
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        onDelete(selectedProduct.id);
        setShowConfirm(false);
        setSelectedProduct(null);
    };

    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <div key={product.id} className={styles.productItem}>
                    <span>{product.name}</span>
                    <Button onClick={() => handleDelete(product)}>Delete</Button>
                </div>
            ))}
            {showConfirm && (
                <ModalConfirm
                    message={`Are you sure you want to delete ${selectedProduct.name}?`}
                    onConfirm={confirmDelete}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
        </div>
    );
}