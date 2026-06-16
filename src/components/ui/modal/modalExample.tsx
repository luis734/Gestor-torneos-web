import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../button";
import { ArrowRightIcon } from "../../../assets/icons";

export function ModalExample() {
    const [isOpen, setIsOpen] = useState(false);

    function changeVisibility() {
        setIsOpen((current) => !current);
    }
    return(
        <div className="bg-background min-h-dvh">
            <Button onClick={changeVisibility}>{isOpen ? "Cerrar" : "Abrir"} Modal</Button>
            {
                isOpen ?
                    <Modal onClose={changeVisibility}>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-brand/20 flex justify-center items-center rounded-[8px] shrink-none shrink-0">
                                <ArrowRightIcon className="text-brand h-4 w-4" />
                            </div>

                            <div className="flex flex-col gap-10 text-foreground">
                                <div>
                                    <h1 className="text-body-large font-bold">Crear torneo</h1>
                                    <p className="text-body-small text-foreground-muted">Una vez creado el torneo no se puede cambiar las alineaciones</p>
                                </div>

                                <div className="flex gap-4 justify-between">
                                    <Button variant="ghost" size="sm" onClick={changeVisibility}>Cancelar</Button>
                                    <Button size="sm">Crear Torneo</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                : ''
            }
        </div>
    );
}