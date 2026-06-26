import { defaultStyles, disabledStyle, errorStyles } from "./BaseInput.styles";
import type { BaseInputProps } from "./BaseInput.types";
import { MinusIcon, PlusIcon } from "../../../assets/icons";

export function NumberInput({id, value, error={hasError:false, msg:""}, minValue = 0, disabled, onChange, onKeyDown}:BaseInputProps) {
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''} no-spinner text-center`;

    function increment() {
        const newValue = String(Number(value) + 1);
        onChange?.(newValue);
    }

    function decrement() {
        const newValue = Number(value) >= minValue ? String(minValue) : String(Number(value) - 1);
        onChange?.(newValue);
    }

    return (
        <div className="flex gap-2 relative">
            <button className="absolute left-0 flex h-10 min-w-10 items-center justify-center hover:bg-transparent rounded-[4px]" onClick={decrement}>
                <MinusIcon className="text-brand w-4 h-4"/>
            </button>

            <input id={id} type="number" className={inputClasses} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown}/>

            <button className="absolute right-0 flex h-10 min-w-10 items-center justify-center hover:bg-transparent rounded-[4px]" onClick={increment}>
                <PlusIcon className="text-brand w-4 h-4"/>
            </button>
        </div>
    );
}