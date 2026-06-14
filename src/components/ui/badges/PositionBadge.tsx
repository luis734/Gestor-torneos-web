import { BadgeVariant } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

export function PositionBadge({children, shape, variant="default"}:BadgeProps,size = 40) {
    const variantStyles = BadgeVariant[variant];

    const defaultStyles = "flex items-center justify-center text-foreground font-bold"
    const badgeStyles = `${variantStyles.dot} ${shape === "round" ? "rounded-full" : "rounded-[5px]"}`;

    return (
        <div style={{width: size, height: size}} className={defaultStyles + " " + badgeStyles}>
            {children}
        </div>
    );
}