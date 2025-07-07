export default function Input({ name, value, onChange, placeholder = "", className = "", ...props }) {
    return (
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input ${className}`}
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