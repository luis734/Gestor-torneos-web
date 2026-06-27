import { useId } from "react";
import { components, type BaseInputProps } from "./BaseInput.types";
import { errorMessage, labelStyles } from "./BaseInput.styles";

export function BaseInput({id, variant="text", label, placeholder, disabled = false, error, value, onChange, onKeyDown}:BaseInputProps) {
    const inputId = useId(); // Se crea un id unico en caso de que no se pase alguno
    const InputComponent = components[variant];

    return (
        <div className="flex flex-col">
            {
                // Etiqueta del input
                label &&
                <label htmlFor={id != undefined ? id : inputId} className={labelStyles}>
                    {label}
                </label>
            }

            <InputComponent id={id != undefined ? id : inputId} placeholder={placeholder} disabled={disabled} error={error} value={value} onChange={onChange} onKeyDown={onKeyDown}></InputComponent>

            {
                // Mensaje de error
                error &&
                <span className={errorMessage}>
                    {error}
                </span>
            }
        </div>
    );
}