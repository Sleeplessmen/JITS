import React from 'react';
import styles from './Products.module.css';

const Products = () => {
    return (
        <div className={styles.container}>
            <h1>Products Page</h1>
            <p>
                Here you can browse and manage all available products in the system. Use the
                search box to filter products by name, or navigate through pages to explore more.
            </p>
            <p>
                Each product contains details like name, price, and description, and the list is dynamically updated from the backend.
            </p>
        </div>
    );
};

export default Products;
