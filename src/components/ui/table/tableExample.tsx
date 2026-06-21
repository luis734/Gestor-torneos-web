import { createId } from "../../../domain/utils/createId";
import { PositionBadge } from "../badge/PositionBadge";
import { Table } from "./Table";
import type { TableColumn } from "./Table.types";

export function TableExample() {
    type PlayerRow = {
        id: string;
        name: string;
        points: string;
        position: number;
    };

    const col: TableColumn<PlayerRow>[] = [
        {
            header: "#",
            key: "position",
            render: (row) => <PositionBadge shape="round" variant={
                row.position === 1 ? "progress" :
                row.position === 2 ? "pending" :
                row.position === 3 ? "completed" : "default"
            } children={row.position} />,
            align: "center",
            width: "w-20"
        },
        {
            header: "Name",
            key: "name"
        },
        {
            header: "Points",
            key: "points",
            align: "center",
            width: "w-20"
        },
    ];

    const rows: PlayerRow[] = [
        {
            id: createId(),
            name: "Ibra",
            points: "5",
            position: 1
        },
        {
            id: createId(),
            name: "Isul",
            points: "9",
            position: 2
        },
        {
            id: createId(),
            name: "Angel",
            points: "10",
            position: 3
        },
        {
            id: createId(),
            name: "Hector",
            points: "20",
            position: 4
        },
        {
            id: createId(),
            name: "Hector",
            points: "21",
            position: 5
        },
        {
            id: createId(),
            name: "Exio",
            points: "25",
            position: 6
        },
    ]

    return (
        <div>
            <Table columns={col} rows={rows}></Table>
        </div>
    );
}