import { getCellClasses, getContentClasses, TableStyles } from "./Table.styles";
import type { TableProps, TableRow } from "./Table.types";

export function Table<T extends TableRow>({columns, rows}:TableProps<T>) {
    return (
        <div className={TableStyles.container}>
            <table className={TableStyles.table}>
                <thead className={TableStyles.header}>
                    <tr className={TableStyles.headerRow}>
                        {
                            columns.map((col) =>
                                <th key={String(col.key)} className={`${TableStyles.cell} ${getCellClasses(col)}`}>
                                    {col.header} 
                                </th>
                            )
                        }
                    </tr>
                </thead>

                <tbody className={TableStyles.body}>
                    {
                        rows.map((row) =>
                            <tr key={row.id} className={TableStyles.row}>
                                {
                                    columns.map((col) =>
                                        <td key={String(col.key)} className={`${TableStyles.cell} ${getCellClasses(col)}`}>
                                            {
                                                col.render
                                                ? (
                                                    <div className={`flex ${getContentClasses(col)}`}>
                                                        {col.render(row)}
                                                    </div>
                                                )
                                                : (
                                                    <div className="truncate">
                                                        {String(row[col.key])}
                                                    </div>
                                                )
                                            }
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}