import type { ToastVariants } from "./toast.types"

export const ToastStyles: Record<ToastVariants, string> = {
    default: "border-success",
    info: "border-info",
    warning: "border-warning",
    error: "border-danger",
}

export const ToastIconStyles: Record<ToastVariants, string> = {
    default: "text-success",
    info: "text-info",
    warning: "text-warning",
    error: "text-danger",
}