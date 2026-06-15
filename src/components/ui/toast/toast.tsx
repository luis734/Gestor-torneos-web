import { useEffect } from "react";
import { XIcon } from "../../../assets/icons";
import { ToastIconStyles, ToastStyles } from "./toast.styles";
import { ToastIconSet, type ToastProps, ToastConfig } from "./toast.types";

export function Toast({id, variant="default", title, message, onClose}:ToastProps) {
    const defaultStyles = "flex gap-[12px] bg-surface flex p-4 border-l-4 rounded-r-[8px] text-body w-sm shadow-xl/50";
    const toastStyles = ToastStyles[variant];

    const Icon = ToastIconSet[variant];
    const iconStyles = `h-5 w-5 ${ToastIconStyles[variant]}`;
    const config = ToastConfig[variant];

    useEffect(() => {
        if (!config.autoClose) return;

        const timer = setTimeout(
            ()=> closeToast()
        , config.delay);

        return (() => {
            clearTimeout(timer);
        });
    }, []);

    function closeToast() {
        onClose?.(id);
    }

    return (
        <div className={defaultStyles + " " + toastStyles}>
            <Icon className={iconStyles}/>

            <div className="flex flex-col flex-1">
                {
                    title != undefined ?
                        <span className="font-bold text-foreground text-body-small">{title}</span>
                    : ''

                }
                <span className="text-foreground-muted text-caption">{message}</span>
            </div>
            
            {
                config.dismissible ? 
                <button onClick={closeToast} className="flex">
                    <XIcon className="text-foreground h-4 w-4"></XIcon>
                </button>
                :""
            }
        </div>
    );
}