import React from "react";

export type ButtonVariant = 
| "primary"
| "secondary"
| "ghost"
| "danger";

export type ButtonSize =
| "sm"
| "md"
| "lg";

export type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}
