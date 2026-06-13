import { useState } from "react";
import { defaultStyles, disabledStyle, errorStyles } from "./BaseInput.styles";
import type { BaseInputProps } from "./BaseInput.types";
import { EyeIcon, EyeOffIcon } from "../../../assets/icons";

export function PasswordInput({id, value, placeholder, disabled, error={hasError: false, msg: ""}, onChange}:BaseInputProps) {
    const [isVisible, setIsVisible] = useState(false);
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''} pr-11 ${!isVisible || value === "" ? "tracking-[0.2em]":""}`;

    function changeVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex items-center relative">
            <input id={id} type={isVisible ? "text" : "password"} value={value} className={inputClasses} placeholder={placeholder} onChange={(e) => onChange?.(e.target.value)}/>
            <div className="flex absolute right-2 h-[80%] aspect-square">
                <button className="flex flex-1 hover:bg-surface-raised rounded-[4px] items-center justify-center" onClick={changeVisibility}>
                    {
                        isVisible ?
                        <EyeOffIcon className="text-brand"></EyeOffIcon> :
                        <EyeIcon className="text-brand"></EyeIcon>
                    }
                </button>
            </div>
        </div>
    )
};