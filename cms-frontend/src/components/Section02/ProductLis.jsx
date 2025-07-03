import styles from './ProductLis.module.css';

export default function ProductLis() {
    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Tablet", price: 800 },
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Mock Product List</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
