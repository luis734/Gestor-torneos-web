export type IconPosition = 
| "left"
| "right";

export type variantTypes =
| "number"
| "text"
| "password";

export type BaseInputProps = {
    id?: string;
    variant?: variantTypes;
    label?: string;
    placeholder?: string;
    icon?: { path: string, position: IconPosition };
    disabled?: boolean;
    error?: {hasError: boolean, msg?: string};
    value?: string;
    onChange?: (value:string) => void;
};