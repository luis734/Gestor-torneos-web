import { Toast } from "./Toast";
import type { ToastContainerProps } from "./Toast.types";

export function ToastContainer({toastList, toClose}:ToastContainerProps) {
    return (
        <div className="flex flex-col gap-2 fixed right-5 bottom-5 max-w-sm max-h-dvh">
            {
                toastList.map((toast) => 
                    <Toast 
                        key={toast.id}
                        id={toast.id}
                        variant={toast.variant}
                        title={toast.title}
                        message={toast.message}
                        onClose={toClose}
                        dismissible={true}>
                    </Toast>
                )
            }
        </div>
    )
}