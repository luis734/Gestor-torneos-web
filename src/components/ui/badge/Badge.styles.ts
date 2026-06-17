export const BadgeVariant = {
    default: {
        text: "text-foreground-muted",// Color de texto
        background: {
            solid: "bg-surface-raised",
            soft: "bg-surface-raised/50"
        },// Color de fondo
        border: "border-border-strong/50",// Color de borde
        dot: "bg-surface-raised",// Color de punto/texto
    },
    progress: {
        text: "text-warning",// Color de texto
        background: {
            solid: "bg-warning/30",
            soft: "bg-warning/15"
        },// Color de fondo
        border: "border-warning/30",// Color de borde
        dot: "bg-warning",// Color de punto
    },
    pending: {
        text: "text-brand-hover",// Color de texto
        background: {
            solid: "bg-brand/30",
            soft: "bg-brand/20"
        },// Color de fondo
        border: "border-brand/30",// Color de borde
        dot: "bg-brand-hover",// Color de punto
    },
    completed: {
        text: "text-success",// Color de texto
        background: {
            solid: "bg-success/30",
            soft: "bg-success/20"
        },// Color de fondo
        border: "border-success/30",// Color de borde
        dot: "bg-success",// Color de punto
    }
};

export const BadgeAppearance = {
    pill: {
        layout: "rounded-full px-3 py-1 uppercase text-caption font-bold",
        useBackground: true,
        useBorder: false,
        useDot: false,
    },
    chip: {
        layout: "rounded-[6px] px-[10px] py-[2px] border text-caption capitalize font-bold",
        useBackground: true,
        useBorder: true,
        useDot: false,
    },
    inline: {
        layout: "flex items-center gap-[6px] text-body-small capitalize font-semibold",
        useBackground: false,
        useBorder: false,
        useDot: true,
    }
};