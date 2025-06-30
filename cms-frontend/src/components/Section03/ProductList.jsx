import styles from './ProductList.module.css';
/**
 * ProductList component to display a list of products.
 * If no products are available, it shows a message indicating that.
 *
 * @param {Object} props - Component properties
 * @param {Array} props.products - Array of product objects
 * @returns {JSX.Element} Rendered component
 */
export default function ProductList({ products }) {
    if (products.length === 0) {
        return (
            <div className={styles.noProducts}>
                <h2>No Products Available</h2>
                <p>Please add some products to see them listed here.</p>
            </div>
        )
    }

    return (
        <div className={styles.productList}>
            <h2>Product List</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}