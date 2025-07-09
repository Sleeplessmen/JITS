import { useState } from "react";
import styles from "./SearchBox.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function SearchBox({ value, onChange, placeholder = "Search..." }) {
    const [focused, setFocused] = useState(false);

    const handleClear = () => {
        onChange("");
    };

    return (
        <div className={`${styles.searchBox} ${focused ? styles.focused : ""}`}>
            <FaSearch className={styles.icon} />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={styles.input}
                placeholder={placeholder}
            />
            {value && (
                <button className={styles.clearBtn} onClick={handleClear} aria-label="Clear search">
                    <FaTimes />
                </button>
            )}
        </div>
    );
}

SearchBox.defaultProps = {
    value: "",
    onChange: () => { },
    placeholder: "Search...",
};