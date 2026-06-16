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

export const baseStyles = "flex gap-[12px] bg-surface flex p-4 border-l-4 rounded-r-[8px] text-body w-sm shadow-xl/50 transition-[opacity,translate] duration-200 ease-out";

// ### ANIMACION TOAST
export const hiddenStyles = "opacity-0 translate-x-10 scale-95"

export const visibleStyles = "opacity-100 translate-x-0 scale-100"