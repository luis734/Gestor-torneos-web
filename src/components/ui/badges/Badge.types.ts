export type BadgeVariant = 
| "default" // Sin podio
| "progress" // Primeros lugares
| "pending" // Segundos lugares
| "completed";  // Terceros lugares

export type BadgeShape = 
| "round"
| "square";

export type BadgeAppearance = 
| "pill"
| "chip"
| "inline";

export type BadgeProps = {
    children?: React.ReactNode;
    variant?: BadgeVariant;
    appearance?: BadgeAppearance;
    shape?: BadgeShape;
};