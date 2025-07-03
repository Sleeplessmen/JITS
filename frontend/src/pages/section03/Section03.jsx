import styles from "./Section03.module.css";
import ProductList from "../../components/section03/ProductList";
import ProductForm from "../../components/section03/ProductForm";
import { useState, useEffect } from "react";
import ProductRepository from "../../repositories/ProductRepository";
import { message, Spin } from "antd";
// This component manages the product section of the application.
// It fetches products from the API, allows adding new products, and displays them in a list.
// It uses the ProductRepository to handle API interactions and manages loading states for better user experience.
// It also handles error messages using Ant Design's message component for better user feedback.
// This component is part of the Section03 page, which focuses on product management.
// It includes a form for adding new products and a list to display existing products.
// This file is part of the frontend/src/pages/section03 directory, which contains components related to Section 03 of the application.
export default function Section03() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addingProduct, setAddingProduct] = useState(false);

    useEffect(() => {
        setLoading(true);
        ProductRepository.fetchAll()
            .then(setProducts)
            .catch((err) => {
                console.error("Failed to load products:", err);
                message.error(`Error loading products: ${err.message}`);
            })
            .finally(() => setLoading(false));
    }, []);

    async function handleAddProduct(newProduct) {
        setAddingProduct(true);
        try {
            const added = await ProductRepository.create(newProduct);
            setProducts((prev) => [...prev, added]);
            message.success("Product added successfully!");
        } catch (err) {
            console.error("Failed to add product:", err);
            message.error(`Failed to add product: ${err.message}`);
        } finally {
            setAddingProduct(false);
        }
    }

    return (
        <div className={styles.container}>
            {loading ? (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Spin size="large" tip="Loading products..." />
                </div>
            ) : (
                <>
                    <Spin spinning={addingProduct} tip="Adding product...">
                        <ProductForm onAddProduct={handleAddProduct} />
                    </Spin>
                    <ProductList products={products} />
                </>
            )}
        </div>
    );
}