import styles from "./Input.module.css";
/**
 * Input component for forms
 * @param {Object} props - Component properties
 * @param {string} props.name - Name of the input field
 * @param {string} props.value - Value of the input field
 * @param {function} props.onChange - Function to call when the input value changes
 * @param {string} [props.placeholder] - Placeholder text for the input field
 * @param {string} [props.className] - Additional CSS classes to apply
 */
export default function Input({ name, value, onChange, placeholder = "", className = "", ...props }) {
    return (
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${styles.input} ${className}`}
            {...props}
        />
    );
}
Input.defaultProps = {
    name: "",
    value: "",
    onChange: () => { },
    placeholder: "",
    className: "",
};