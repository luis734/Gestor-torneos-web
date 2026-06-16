import { Button } from "../button";
import type { ToastCreateData, ToastVariants } from "./Toast.types";
import { useState } from "react";
import { useToast } from "./useToast";

export function ToastExample() {
    const [count, setCount] = useState(1);
    const { addToast} = useToast(); // Se necesia importar para agregar y mostrar toast.

    function createNewToast(variant:ToastVariants) {
        // Creamos un objeto de tipo toastCreateData para pasra los datos necesarios
        const newToast: ToastCreateData = {
            variant: variant,
            title: `${count} Title`,
            message: `${count} Message`,
        }

        setCount((current) => current + 1);
        addToast(newToast); // Usamos la funcion necesaria para poder agregar y visualizar un nuevo toast
    }

    return (
        <div className="flex flex-col gap-6 bg-background p-8 min-h-dvh text-foreground">

            <div className="flex flex-col gap-2">
                <h1>Buttons Playground</h1>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => createNewToast("default")}>Success</Button>
                    <Button variant="secondary" onClick={() => createNewToast("info")}>Info</Button>
                    <Button variant="secondary" onClick={() => createNewToast("warning")}>Warning</Button>
                    <Button variant="secondary" onClick={() => createNewToast("error")}>Error</Button>
                </div>
            </div>
        </div>
    );
}