import { AlertTriangleIcon, CheckIcon, InfoIcon, XCircleIcon } from "../../../assets/icons";

export type ToastVariants = 
| "default"
| "warning"
| "info"
| "error";

type SvgIcon = React.ComponentType<
    React.SVGProps<SVGSVGElement>
>;

export const ToastIconSet: Record<ToastVariants, SvgIcon> = {
    default: CheckIcon,
    info: InfoIcon,
    warning: AlertTriangleIcon,
    error: XCircleIcon
}

export type ToastProps = {
    id: string,
    // Visuales
    variant?: ToastVariants;
    title?: string;
    message?: string;
    dismissible?: boolean;

    // Comportamiento
    onClose?: (value:string) => void;
}

// Tipo de dato para el container
export type ToastData = {
    id: string;
    variant: ToastVariants;
    title?: string;
    message: string;
    delay?: number;
    dismissible?: boolean;
}

export type ToastContainerProps = {
    toastList: ToastData[];
    toClose?: (value:string) => void;
}

export const ToastConfig = {
    default: {
        autoClose: true,
        dismissible: false,
        delay: 4000
    },
    info: {
        autoClose: true,
        dismissible: false,
        delay: 4000
    },
    warning: {
        autoClose: true,
        dismissible: true,
        delay: 8000
    },
    error: {
        autoClose: false,
        dismissible: true,
        delay: 1000
    }
}

// Props para el Provider
export type ToastCreateData = {
    variant: ToastVariants;
    title?: string;
    message: string;
}