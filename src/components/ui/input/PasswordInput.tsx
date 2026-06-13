import { useState } from "react";
import { defaultStyles, disabledStyle, errorStyles } from "./BaseInput.styles";
import type { BaseInputProps } from "./BaseInput.types";
import { EyeIcon, EyeOffIcon } from "../../../assets/icons";

export function PasswordInput({id, placeholder, disabled, error={hasError: false, msg: ""}, value, onChange}:BaseInputProps) {
    const [isVisible, setIsVisible] = useState(false);
    const inputClasses = `${defaultStyles} ${error.hasError ? errorStyles : disabled ? disabledStyle : ''} pr-10 ${!isVisible || value != undefined ? "tracking-[0.2em]":""}`;

    function changeVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex items-center relative">
            <input id={id} type={isVisible ? "text" : "password"} className={inputClasses} placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)}/>
            <div className="flex absolute right-2">
                <button  onClick={changeVisibility}>
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