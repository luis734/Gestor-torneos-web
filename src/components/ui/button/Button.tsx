import { defaultStyles, sizeStyles, variantStyles } from "./Button.styles"
import type { ButtonProps } from "./Button.types";

export function Button({variant = "primary", size = "md", disabled = false, loading = false, children, onClick}: ButtonProps) {
    const clases = `${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles}`;
    return (
        <button
            className = {clases}
            disabled = {disabled || loading}
            onClick = {onClick}
        >
            {
                loading ?
                "Cargando...": // TODO Agregar un loader bonito
                children
            }
        </button>
    )
}