import { Table } from "../models/Table";
import { CreateTableInput } from "../types/inputs/CreateTableInput";
import { createId } from "../utils/createId";

export const createTable = (
    input: CreateTableInput
): Table => {
    return {
        id: createId(),
        playerIds: input.playerIds,
        tableNumber: input.tableNumber,
        results: [],
        status: "pending",
    };
};