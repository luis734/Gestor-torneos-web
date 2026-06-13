import { useState } from "react";
import { BaseInput } from "./BaseInput";

export function InputExample() {
    const [name, setName] = useState("Torneo Pitero 2025-2026");
    const [number, setNumber] = useState("42");

    return (
        <div className="bg-background p-8 flex flex-col min-h-dvh gap-4">
            <BaseInput label="Tournament Name" placeholder="e.g. Torneo Pitero"></BaseInput>

            <BaseInput label="Active State" value={name} onChange={setName}></BaseInput>

            <BaseInput label="Number input" value={number} onChange={setNumber} variant="number"></BaseInput>
            
            <BaseInput label="With Error" error={{hasError: true, msg: "Mensaje de error"}} placeholder="Required field"></BaseInput>

            <BaseInput label="Disabled" placeholder="Cannot edit this" disabled></BaseInput>

            <BaseInput label="Password" placeholder="Hidden Password" variant="password"></BaseInput>
        </div>
    );
}