import { useState } from 'react';
import styles from './ProductForm.module.css';
import Input from '../shared/Input';
import Button from '../shared/Button';

export default function ProductForm({ onAddProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newProduct = { name, price: Number(price), description };
        onAddProduct(newProduct);
        setName("");
        setPrice("");
        setDescription("");
    }

    return (
        <div className={styles.productForm}>
            <h2>Add Product Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <Input
                        type="text"
                        name="productName"
                        id="productName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Pillow, Blanket, etc."
                        aria-invalid={name === "" ? "true" : "false"}
                        aria-describedby="name-error"
                        required
                    />
                    {name === "" && (
                        <small id="name-error" style={{ color: "red" }}>
                            *Please enter a product name.
                        </small>
                    )}
                </div>

                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <Input
                        type="number"
                        name="productPrice"
                        id="productPrice"
                        min="0"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="100, 200, etc."
                        aria-describedby="priceHint"
                        required
                    />
                    <small id="priceHint">Enter price in USD.</small>
                </div>

                <div>
                    <label htmlFor="productDescription">Description:</label>
                    <textarea
                        name="productDescription"
                        id="productDescription"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Brief description of the product"
                        required
                        className={styles.textarea}
                    />
                </div>

                <Button type="submit">Add Product</Button>
            </form>
        </div>
    );
}
ProductForm.defaultProps = {
    onAddProduct: () => { },
};