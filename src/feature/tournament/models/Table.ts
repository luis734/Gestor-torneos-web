import { TableStatus } from "../types/TableStatus";
import { TableResult } from "./TableResult";

export interface Table {
    readonly id: string;
    tableNumber: number;
    playerIds: string[]; // Solo strings porque guardaran la referencia a los jugadores
    results: TableResult[];
    status: TableStatus;
};