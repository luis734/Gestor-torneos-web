import { useId } from "react";
import { defaultStyles, disabledStyle, errorMessage, errorStyles, labelStyles } from "./Input.styles";
import type { InputProps } from "./Input.types";

export function Input({id, variant = "text", label, placeholder, icon, disabled = false, error = {hasError: false, msg: ""}, value, onChange}:InputProps) {
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''}`;
    const inputId = useId(); // Se crea un id unico en caso de que no se pase alguno

    return (
        <div className="flex flex-col">
            {
                // Etiqueta del input
                label &&
                <label htmlFor={id != undefined ? id : inputId} className={labelStyles}>
                    {label}
                </label>
            }

            <input
                id={id != undefined ? id : inputId}
                type={variant}
                className={inputClasses}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChange} // Función de control
            />

            {
                // Mensaje de error
                error.hasError &&
                <span className={errorMessage}>
                    {error.msg}
                </span>
            }
        </div>
    );
}