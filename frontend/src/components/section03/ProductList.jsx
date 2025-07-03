import styles from './ProductList.module.css';
export default function ProductList({ products }) {

    return (
        products.length === 0 ? (
            <div className={styles.noProducts}>
                <h2>No Products Available</h2>
                <p>Please add some products to see them listed here.</p>
            </div>
        ) : (
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
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name || 'No name available'}</td>
                                    <td>{product.price + "$" || 'No price available'}</td>
                                    <td>{product.description || 'No description available'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
}

