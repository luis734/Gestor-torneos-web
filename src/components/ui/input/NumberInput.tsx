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
        <div className="flex gap-2">
            <button className="flex items-center justify-center min-w-10 hover:bg-surface rounded-[4px]" onClick={decrement}>
                <MinusIcon className="text-brand w-6 h-6"/>
            </button>

            <input id={id} type="number" className={inputClasses} value={value} onChange={(e) => onChange(e.target.value)}/>

            <button className="flex items-center justify-center min-w-10 hover:bg-surface rounded-[4px]" onClick={increment}>
                <PlusIcon className="text-brand w-6 h-6"/>
            </button>
        </div>
    );
}