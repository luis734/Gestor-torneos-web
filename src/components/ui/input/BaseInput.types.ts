export type IconPosition = 
| "left"
| "right";

export type variantTypes =
| "number"
| "text"
| "search"
| "password";

export type BaseInputProps = {
    id?: string;
    variant?: variantTypes;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: {hasError: boolean, msg?: string};
    value?: string;
    onChange?: (value:string) => void;
};