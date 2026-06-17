import type { TableAlign, TableColumn } from "./Table.types";

export const TableStyles = {
    container: "overflow-hidden rounded-2xl border border-border",
    table: "w-full table-fixed bg-surface",

    header: "bg-surface-raised text-foreground-muted",
    headerRow: "border-b border-border",

    body: "text-foreground",

    row: "border-b border-border last:border-none hover:bg-background",

    cell: "h-12 px-4",
};

export const TextAlignStyles: Record<TableAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

export const ContentAlignStyles: Record<TableAlign, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};

export function getCellClasses<T>(col: TableColumn<T>) {
    const widthClass = col.width ?? "w-auto";

    const alignClass =
        TextAlignStyles[col.align ?? "left"];

    return `${widthClass} ${alignClass}`;
}

export function getContentClasses<T>(col: TableColumn<T>) {
    return ContentAlignStyles[col.align ?? "left"];
}