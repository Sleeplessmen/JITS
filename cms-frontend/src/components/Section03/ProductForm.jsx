import { useState } from 'react';
import styles from './ProductForm.module.css';

export default function ProductForm({ onAddProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newProduct = { name, price };
        onAddProduct(newProduct);
        setName("");
        setPrice("");
    }

    return (
        <div className={styles.productForm}>
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        id='productName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Pillow, Blanket, etc.'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <input
                        type="number"
                        name="productPrice"
                        id='productPrice'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='100.00, 200.00, etc.'
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}