import { useState } from "react";
import { Input } from "./Input";

export function InputExample() {
    const [name, setName] = useState("Torneo Pitero 2025-2026");
    const [number, setNumber] = useState("42");

    return (
        <div className="bg-background p-8 flex flex-col min-h-dvh gap-4">
            <Input label="Tournament Name" placeholder="e.g. Torneo Pitero"></Input>

            <Input label="Active State" value={name} onChange={(e) => setName(e.target.value)}></Input>

            <Input label="Number input" value={number} onChange={(e) => setNumber(e.target.value)} variant="number"></Input>
            
            <Input label="With Error" error={{hasError: true, msg: "Mensaje de error"}} placeholder="Required field"></Input>

            <Input label="Disabled" placeholder="Cannot edit this" disabled></Input>
        </div>
    );
}