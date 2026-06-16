import type { ModalVariants } from "./Modal.types";

export const VariantStyles:Record<ModalVariants, string> = {
    default: "border-t-brand",
    info: "border-t-info/80",
    warning: "border-t-warning",
    error: "border-t-danger"
}

export const DefaultStyles = "flex fixed top-1/2 left-1/2 -translate-x-1/2 p-6 -translate-y-1/2 bg-surface w-full rounded-[8px] max-w-sm border border-t-[8px] border-border";