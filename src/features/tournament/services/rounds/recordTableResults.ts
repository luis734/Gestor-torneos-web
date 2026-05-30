import type { Table } from "../../models/Table";
import type { TableResult } from "../../models/TableResult";

export function recordTableResults(table: Table, results: TableResult[]): Table {
    return {
        ...table,
        results,
        status: "completed"
    };
}