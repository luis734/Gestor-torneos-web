import { useContext } from "react";
import { ToastContext } from "./toastContext";

export function useToast() {
    const context = useContext(ToastContext);
    
    if (context === null) {
        throw Error("useToast must be inside ToastProvider");
    }

    return context;
}