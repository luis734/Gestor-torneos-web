import { useState } from "react";
import type { ToastCreateData, ToastData } from "./toast.types";
import { ToastContext } from "./toastContext";
import { ToastContainer } from "./toastContainer";

type ToastProviderProps = {
    children: React.ReactNode;
};

export function ToastProvider({children}:ToastProviderProps) {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    function addToast(data: ToastCreateData) {
        const newId = crypto.randomUUID();

        const newToast: ToastData = {
            id: newId,
            variant: data.variant,
            title: data.title,
            message: data.message
        };

        setToasts((currentToasts) => 
            [...currentToasts, newToast]
        );
    }

    function removeToast(id: string) {
        setToasts((currentToasts) =>
            currentToasts.filter(
                (toast) => toast.id !== id
            )
        );
    }

    return (
        <ToastContext.Provider
            value={{
                addToast
            }}
        >
            {children}

            <ToastContainer
                toastList={toasts}
                toClose={removeToast}
            />
        </ToastContext.Provider>
    )
}