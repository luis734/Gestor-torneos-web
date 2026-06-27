import { useId } from "react";
import type { CheckboxProps } from "./Checkbox.type";
import { CheckIcon } from "../../../assets/icons";
import { CheckboxStyles } from "./Checkbox.styles";

export function Checkbox({id, checked, defaultChecked, onChange, label, checkboxPosition, disabled, error, className, labelClassName}:CheckboxProps) {
    const generatedID = useId();
    const inputId = id ?? generatedID;

    return (
        <div className={`${CheckboxStyles.container} ${className}`}>
            <label htmlFor={inputId} className={`${CheckboxStyles.label} ${labelClassName ?? ""} ${checkboxPosition === "end" ? CheckboxStyles.labelEnd : CheckboxStyles.labelStart}`}>
                <input id={inputId} type="checkbox" checked={checked} defaultChecked={defaultChecked} disabled={disabled} onChange={(event) => onChange?.(event.target.checked)} className={CheckboxStyles.input}/>

                <span className={`${CheckboxStyles.checkbox}`}>
                    {checked &&
                        <CheckIcon className={`${CheckboxStyles.icon}`}/>
                    }
                </span>

                <span className={CheckboxStyles.text}>{label}</span>
            </label>

            {error &&  
                <span className={CheckboxStyles.error}>{error}</span>
            }
        </div>
    )
}