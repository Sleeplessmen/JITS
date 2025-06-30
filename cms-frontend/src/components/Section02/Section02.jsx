import ProductList from "./ProductLis";
import Sidebar from "./Sidebar";
import styles from "./Section02.module.css";

export default function Section02() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <ProductList />
        </div>
    );
}
