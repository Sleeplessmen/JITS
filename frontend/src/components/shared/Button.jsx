import styles from "./Button.module.css";

export default function Button({ children, onClick, className = "", type = "button", ...props }) {
    return (
        <button type={type} className={`${styles.btn} ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
Button.defaultProps = {
    className: "",
    type: "button",
    onClick: () => { },
};