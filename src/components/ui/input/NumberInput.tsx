import { Button } from "../button";
import { defaultStyles, disabledStyle, errorStyles } from "./BaseInput.styles";
import type { BaseInputProps } from "./BaseInput.types";
import { MinusIcon, PlusIcon } from "../../../assets/icons";

export function NumberInput({id, value, error={hasError:false, msg:""}, disabled, onChange}:BaseInputProps) {
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''} no-spinner`;

    function increment() {
        const newValue = String(Number(value) + 1);
        onChange?.(newValue);
    }

    function decrement() {
        const newValue = String(Number(value) - 1);
        onChange?.(newValue);
    }

    return (
        <div className="flex gap-2 items-center">
            <Button variant="ghost" size="sm" onClick={decrement}>
                <MinusIcon className="text-brand w-6 h-6"/>
            </Button>

            <input id={id} type="number" className={inputClasses} value={value} onChange={(e) => onChange(e.target.value)}/>

            <Button  variant="ghost" size="sm" onClick={increment}>
                <PlusIcon className="text-brand w-6 h-6"/>
            </Button>
        </div>
    );
}