import { createContext } from "react";
import type { ToastCreateData } from "./Toast.types"

export type ToastContextValue = {
    addToast: (toast: ToastCreateData) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(
    null
);