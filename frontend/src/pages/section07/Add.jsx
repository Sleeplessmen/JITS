import React from 'react';
import styles from './Add.module.css';

const Add = () => {
    return (
        <div className={styles.container}>
            <h1>Add New Product</h1>
            <p>
                Use the form below to add a new product to the system. Make sure to fill in all the required
                fields like name, price, and description. After submission, the product will appear in the product list.
            </p>
            <p>
                This page interacts with the backend using async API calls to persist the new product into the database.
            </p>
        </div>
    );
};

export default Add;
