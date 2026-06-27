export interface CheckboxProps {
    id?: string;

    checked?: boolean;
    defaultChecked?: boolean;

    onChange?: (checked: boolean) => void;

    label?: string;
    checkboxPosition?: "start" | "end";

    disabled?: boolean;

    error?: string;

    className?: string;
    labelClassName?: string;
}