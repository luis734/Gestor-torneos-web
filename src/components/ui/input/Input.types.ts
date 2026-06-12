export type IconPosition = 
| "left"
| "right";

export type variantTypes =
| "number"
| "text"
| "password";

export type InputProps = {
    id?: string;
    variant?: variantTypes;
    label?: string;
    placeholder?: string;
    icon?: { path: string, position: IconPosition };
    disabled?: boolean;
    error?: {hasError: boolean, msg?: string};
    value?: string;
    onChange?: (value) => void;
};