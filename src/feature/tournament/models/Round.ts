import { Table } from "./Table";

export interface Round {
    readonly id: string;
    roundNumber: number;
    tables: Table[];
};