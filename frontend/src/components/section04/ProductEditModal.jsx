import { useState, useEffect } from 'react';
import styles from './ProductEditModal.module.css';

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
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="price">Price:</label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            value={form.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        <button type="submit">Save</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
}
