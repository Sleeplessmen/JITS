import { useState, useEffect } from 'react';
import styles from './ProductEditModal.module.css';
/**
 * ProductEditModal component allows editing of a product's details.
 * @param {Object} param0 - Component props
 * @param {Object} param0.product - The product to edit
 * @param {Function} param0.onSave - Callback function to save the edited product
 * @param {Function} param0.onClose - Callback function to close the modal
 * @returns {JSX.Element} The rendered component
 */
export default function ProductEditModal({ product, onSave, onClose }) {
    const [form, setForm] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        if (product) setForm(product);
    }, [product]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave(form);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            name="price"
                            type="number"
                            value={form.price}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div className={styles.actions}>
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
