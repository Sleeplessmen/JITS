import ProductList from "../../components/section02/ProductList";
import Sidebar from "../../components/section02/Sidebar";
import styles from "./Section02.module.css";

export default function Section02() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <ProductList />
        </div>
    );
}
