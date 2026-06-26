import { defaultStyles, disabledStyle, errorStyles } from "./BaseInput.styles";
import type { BaseInputProps } from "./BaseInput.types";
import { SearchIcon } from "../../../assets/icons";

export function SearchInput({id, value, placeholder, disabled, error={hasError: false, msg: ""}, onChange, onKeyDown}:BaseInputProps) {
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''} pl-11`;

    return (
        <div className="flex items-center relative">
            <input id={id} type="text" value={value} className={inputClasses} placeholder={placeholder} onChange={(e) => onChange?.(e.target.value)} onKeyDown={onKeyDown}/>
            <div className="flex items-center justify-center absolute left-2 h-[80%] aspect-square">
                <SearchIcon className="text-brand"></SearchIcon>
            </div>
        </div>
    )
};