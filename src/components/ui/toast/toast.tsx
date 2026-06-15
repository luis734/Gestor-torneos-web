import { XIcon } from "../../../assets/icons";
import { ToastIconStyles, ToastStyles } from "./toast.styles";
import { ToastIconSet, type ToastProps } from "./toast.types";

export function Toast({variant="default", title, message, delay, dismissible=false, onClose}:ToastProps) {
    const defaultStyles = "flex gap-[12px] bg-surface flex p-4 border-l-4 rounded-r-[8px] text-body max-w-sm shadow-xl/50";
    const toastStyles = ToastStyles[variant];

    const Icon = ToastIconSet[variant];
    const iconStyles = `h-5 w-5 ${ToastIconStyles[variant]}`;

    function closeToast() {
        // TODO Funcionalidad para cerrar el toast
        onClose(true);
    }

    return (
        <div className={defaultStyles + " " + toastStyles}>
            <Icon className={iconStyles}/>

            <div className="flex flex-col">
                {
                    title != undefined ?
                        <span className="font-bold text-foreground text-body-small">{title}</span>
                    : ''

                }
                <span className="text-foreground-muted text-caption">{message}</span>
            </div>
            
            {
                dismissible ? 
                <button onClick={closeToast}>
                    <XIcon className="text-foreground"></XIcon>
                </button>
                :""
            }
        </div>
    );
}