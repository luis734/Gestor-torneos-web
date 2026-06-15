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
    // Visuales
    variant?: ToastVariants;
    title?: string;
    message?: string;
    dismissible?: boolean;

    // Comportamiento
    delay?: number; // Tiempo en milisegundos antes de desaparecer
    onClose?: (value) => void;
}