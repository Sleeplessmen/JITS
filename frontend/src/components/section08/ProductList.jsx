import { useState, useMemo, useEffect } from "react";
import styles from "./ProductList.module.css";
import { SearchBox } from "../shared";

const PRODUCTS_PER_PAGE = 5;

export default function ProductList({ products }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const filteredProducts = useMemo(() => {
        const keyword = searchTerm.toLowerCase();
        return products.filter((p) =>
            p.name.toLowerCase().includes(keyword)
        );
    }, [products, searchTerm]);

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
        return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    const hasSearchTerm = searchTerm.trim() !== "";

    return (
        <div className={styles.productList}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Product List</h2>

                <SearchBox
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search products..."
                />

                {filteredProducts.length === 0 ? (
                    <div className={styles.noProducts}>
                        {hasSearchTerm ? (
                            <>
                                <h2>No products found for "{searchTerm}"</h2>
                            </>
                        ) : (
                            <>
                                <h2>No Products Available</h2>
                                <p>Please add some products to see them listed here.</p>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name || "No name"}</td>
                                        <td>{product.price ? `$${product.price}` : "N/A"}</td>
                                        <td>{product.description || "No description"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {totalPages > 1 && (
                            <div className={styles.pagination}>
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage((prev) => prev - 1)}
                                >
                                    Prev
                                </button>
                                <span>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage((prev) => prev + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
