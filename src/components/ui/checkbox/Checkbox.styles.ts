export const CheckboxStyles = {
    container: "flex flex-col",
    label: "flex w-full",
    labelEnd: "flex-row-reverse justify-between",
    labelStart: "flex-row",
    input: "peer opacity-0 absolute pointer-events-none",
    checkbox: "flex bg-foreground/80 h-6 w-6 border border-border rounded-[4px] shrink-0 transition-all duration-200 justify-center items-center peer-checked:bg-brand",
    icon: "h-4 w-4 text-foreground stroke-5",
    text: "text-body text-foreground",
    error: "text-danger text-caption"
}