export type TableRow = {
    id: string;
}

export type TableAlign =
| "left"
| "center"
| "right";

export type TableColumn<T> = {
    key: keyof T;
    header: string;

    width?: string;
    align?: TableAlign;

    render?: (row: T) => React.ReactNode;
}

export type TableProps<T extends TableRow> = {
    columns: TableColumn<T>[];
    rows: T[];
}