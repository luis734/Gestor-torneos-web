import { useState } from "react";
import { Toast } from "./toast";
import { Button } from "../button";
import { ToastContainer } from "./toastContainer";
import type { ToastData, ToastVariants } from "./toast.types";

export function ToastExample() {
    const [toasts, setToast] = useState<ToastData[]>([]);
    const [count, setCount] = useState(1);

    function deleteToast(id:string) {
        setToast((currentToasts) =>
            currentToasts.filter(
                (toast) => toast.id !== id
            )
        );
    }

    function addToast(variant:ToastVariants) {
        const newToast: ToastData = {
            id: String(count),
            variant: variant,
            title: `${count} Title`,
            message: `${count} Message`,
        }

        setToast([...toasts, newToast]);
        setCount(count+1);
    }

    return (
        <div className="flex flex-col gap-6 bg-background p-8 min-h-dvh text-foreground">
            <div className="flex flex-col gap-2">
                <h1>Toast Example</h1>

                <Toast id="1" title="Match saved" message="Scores updated for Round 1."></Toast>
                
                <Toast id="2" variant="info" title="Note" message="Right now the app only have 1 tournamen type."></Toast>

                <Toast id="3" variant="warning" title="Missing players" message="Need at least 3 players to start."></Toast>

                <Toast id="4" variant="error" title="Action failed" message="Could not save tournament data."></Toast>
            </div>

            <div className="flex flex-col gap-2">
                <h1>Buttons Playground</h1>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => addToast("default")}>Success</Button>
                    <Button variant="secondary" onClick={() => addToast("info")}>Info</Button>
                    <Button variant="secondary" onClick={() => addToast("warning")}>Warning</Button>
                    <Button variant="secondary" onClick={() => addToast("error")}>Error</Button>
                </div>
            </div>
            <ToastContainer toastList={toasts} toClose={(id) => deleteToast(id)}></ToastContainer>
        </div>
    );
}