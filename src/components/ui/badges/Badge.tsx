import { CheckIcon, CircleIcon } from "../../../assets/icons";
import { BadgeAppearance, BadgeVariant } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

export function Badge({children, variant, appearance}:BadgeProps) {
    const variantStyles = BadgeVariant[variant];
    const appearanceStyles = BadgeAppearance[appearance];

    const badgeStyles = `${appearanceStyles.layout} ${appearanceStyles.useBackground ? appearance === "chip" ? variantStyles.background.soft : variantStyles.background.solid :''} ${appearanceStyles.useBorder ? variantStyles.border : ''}`;

    const textColor = `${variantStyles.text}`;
    
    return (
        <div className={badgeStyles+" "+textColor}>
            {appearanceStyles.useDot ? variant === "completed" ? 
                <CheckIcon className={variantStyles.text+" w-[14px] h-[14px]"}></CheckIcon>
            :
                <CircleIcon className={variantStyles.text+" w-[8px] h-[8px]"}></CircleIcon>
            : ''}
            {children}
        </div>
    )
}