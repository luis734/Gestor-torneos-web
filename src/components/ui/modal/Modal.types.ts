export type ModalProps = {
    variant?: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export type ModalVariants = 
| "default"
| "info"
| "warning"
| "error";