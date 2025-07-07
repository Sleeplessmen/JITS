import styles from "./styles.module.css";

export default function ModalConfirm({ message, onConfirm, onCancel }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{message || "Bạn có chắc chắn thực thi hành động không?"}</p>
                <div className={styles.actions}>
                    <button onClick={onConfirm} className={styles.confirm}>Đồng ý</button>
                    <button onClick={onCancel} className={styles.cancel}>Hủy</button>
                </div>
            </div>
        </div>
    );
}
ModalConfirm.defaultProps = {
    message: "Bạn có chắc chắn thực thi hành động không?",
    onConfirm: () => { },
    onCancel: () => { },
};