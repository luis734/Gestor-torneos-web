import { defaultStyles, disabledStyle, errorStyles } from "./BaseInput.styles";
import type { BaseInputProps } from "./BaseInput.types";

export function TextInput({id, placeholder, disabled = false, error = {hasError: false, msg: ""}, value, onChange}:BaseInputProps) {
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''}`;

    return (
        <input
            id={id}
            className={inputClasses}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)} // Función de control
        />
    );
}