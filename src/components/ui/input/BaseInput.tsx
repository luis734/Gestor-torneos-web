import { useId } from "react";
import type { BaseInputProps } from "./BaseInput.types";
import { TextInput } from "./TextInput";
import { errorMessage, labelStyles } from "./BaseInput.styles";
import { NumberInput } from "./NumberInput";

export function BaseInput({id, variant="text", label, placeholder, disabled = false, error = {hasError: false, msg: ""}, value, onChange}:BaseInputProps) {
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

            {
                variant === "text" ?
                    <TextInput id={id != undefined ? id : inputId} placeholder={placeholder} disabled={disabled} error={error} value={value} onChange={onChange}></TextInput>
                :
                    <NumberInput id={id != undefined ? id : inputId} placeholder={placeholder} disabled={disabled} error={error} value={value} onChange={onChange}></NumberInput>
            }

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