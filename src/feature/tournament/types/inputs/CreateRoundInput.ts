import { Table } from "../../models/Table";

export interface CreateRoundInput {
    roundNumber: number;
    tables: Table[];
};