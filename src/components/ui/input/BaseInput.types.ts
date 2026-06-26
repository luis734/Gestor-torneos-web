import { NumberInput } from "./NumberInput";
import { PasswordInput } from "./PasswordInput";
import { SearchInput } from "./SearchInput";
import { TextInput } from "./TextInput";

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
    minValue?: number;
    minLength?: number;
    onChange?: (value:string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const components = {
    number: NumberInput,
    text: TextInput,
    search: SearchInput,
    password: PasswordInput
}