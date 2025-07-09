import styles from "./ModalConfirm.module.css";
/**
 * ModalConfirm component for confirmation dialogs
 * @param {Object} props - Component properties
 * @param {string} props.message - Confirmation message to display
 * @param {function} props.onConfirm - Function to call when user confirms
 * @param {function} props.onCancel - Function to call when user cancels
 */
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