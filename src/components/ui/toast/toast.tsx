import { useEffect, useState } from "react";
import { XIcon } from "../../../assets/icons";
import { baseStyles, hiddenStyles, ToastIconStyles, ToastStyles, visibleStyles } from "./Toast.styles";
import { ToastIconSet, type ToastProps, ToastConfig } from "./Toast.types";

export function Toast({id, variant="default", title, message, onClose}:ToastProps) {
    const [isVisible, setVisibility] = useState(false);

    const toastStyles = ToastStyles[variant];
    const defaultStyles = baseStyles + " " + toastStyles + " " + (isVisible ? visibleStyles : hiddenStyles);

    const Icon = ToastIconSet[variant];
    const iconStyles = `h-5 w-5 ${ToastIconStyles[variant]}`;
    const config = ToastConfig[variant];

    useEffect(() => {
        setVisibility(true); // Tener cuidado con esto ya que se puede ciclar por el orden de actualizaciones (Antipatron ❌)
        if (!config.autoClose) return;

        const timer = setTimeout(
            ()=> closeToast()
        , config.delay);

        return (() => {
            clearTimeout(timer);
        });
    }, []);

    function closeToast() {
        setVisibility(false);
        setTimeout(() => {
            onClose?.(id);
        }, 300);
    }

    return (
        <div className={defaultStyles}>
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