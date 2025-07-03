import styles from './ProductList.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
/**
 * ProductList component displays a list of products with edit and delete options.
 * @param {Object} param0 - Component props
 * @param {Array} param0.products - List of products to display
 * @param {Function} param0.onEdit - Callback function to handle editing a product
 * @param {Function} param0.onDelete - Callback function to handle deleting a product
 * @returns {JSX.Element} The rendered component
 */
export default function ProductList({ products, onEdit, onDelete }) {
    if (products.length === 0) {
        return (
            <div className={styles.noProducts}>
                <h2>No Products Available</h2>
                <p>Please add some products to see them listed here.</p>
            </div>
        );
    }

    return (
        <div className={styles.productList}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Product List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th className={styles.actionsHeading}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name || 'No name available'}</td>
                                <td>{product.price != null ? product.price + "$" : 'No price available'}</td>
                                <td>{product.description || 'No description available'}</td>
                                <td>
                                    <button
                                        className={styles.updateBtn}
                                        title="Update Product"
                                        onClick={() => onEdit(product)}
                                    >
                                        <FaEdit style={{ marginRight: 4 }} />
                                    </button>
                                    <button
                                        className={styles.deleteBtn}
                                        title="Delete Product"
                                        onClick={() => onDelete(product)}
                                    >
                                        <FaTrash style={{ marginRight: 4 }} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
