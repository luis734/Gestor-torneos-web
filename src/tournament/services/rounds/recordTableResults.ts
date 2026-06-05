import type { Table } from "../../models/Table";
import type { TableResult } from "../../models/TableResult";
import { validateTableResults } from "../../validators/table/validateTableResults";

export function recordTableResults(table: Table, results: TableResult[]): Table {
    const validation = validateTableResults(results, table.playerIds);

    if (!validation.isValid) {
        throw new Error(...validation.errors);
    }
    
    return {
        ...table,
        results,
        status: "completed"
    };
}