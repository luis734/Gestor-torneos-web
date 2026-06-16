import { DefaultStyles, VariantStyles } from "./Modal.styles";
import type { ModalProps } from "./Modal.types";

export function Modal({variant="default", children, onClose}:ModalProps) {
    function handelContentClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    const BaseStyles = DefaultStyles + " " + VariantStyles[variant]; 

    return (
        <div id="backdrop" className="fixed flex flex-col inset-0 bg-surface/60" onClick={onClose}>
            <div onClick={handelContentClick} className={BaseStyles}>
                {children}
            </div>
        </div>
    );
}