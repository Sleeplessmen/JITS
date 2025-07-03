import { useState } from 'react';
import styles from './ProductForm.module.css';

export default function ProductForm({ onAddProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newProduct = { name, price, description };
        onAddProduct(newProduct);
        setName("");
        setPrice("");
    }

    return (
        <div className={styles.productForm}>
            <h2>Add Product Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        id='productName'
                        aria-invalid={name === "" ? "true" : "false"}
                        aria-describedby='name-error'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Pillow, Blanket, etc.'
                        required
                    />
                    {name === "" && (
                        <small id="name-error" >Please enter a product name.</small>
                    )}
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <input
                        type="number"
                        name="productPrice"
                        id='productPrice'
                        aria-required="true"
                        aria-describedby='priceHint'
                        min="0"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='100, 200, etc.'
                        required
                    />
                    <small id="priceHint">Enter price in USD</small>
                </div>
                <div>
                    <label htmlFor="productDescription">Description:</label>
                    <textarea
                        name="productDescription"
                        id='productDescription'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Brief description of the product'
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}