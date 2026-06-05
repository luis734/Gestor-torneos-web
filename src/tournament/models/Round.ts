import type { RoundStatus } from "../types/RoundStatus";
import type { Table } from "./Table";

export interface Round {
    readonly id: string;
    roundNumber: number;
    tables: Table[];
    status: RoundStatus;
};