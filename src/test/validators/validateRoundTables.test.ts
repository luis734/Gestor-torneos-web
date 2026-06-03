import { describe, expect, it } from "vitest";
import { validateRoundTables } from "../../features/tournament/validators/rounds/validateRoundTables";
import { createTable } from "../../features/tournament/factories/createTable";
import type { Table } from "../../features/tournament/models/Table";

const table1 = ["p1", "p2"];
const table2 = ["p3", "p4"];

function createTestTable(): Table[] {
    const t1 = createTable({tableNumber: 1, playerIds: table1});
    const t2 = createTable({tableNumber: 2, playerIds: table2});
    return [t1, t2];
}

describe("validateRoundTables", () => {
    // * 1
    it("returns valid when all round tables are correct", () => {
        const playersPerTable = 2;
        const table = createTestTable();

        const result = validateRoundTables(table, playersPerTable);

        expect(result.isValid).toBe(true);
    });
    
    // * 2
    it("returns error when round tables are empty", () => {
        const playersPerTable = 2;
        const table = [];

        const result = validateRoundTables(table, playersPerTable);

        expect(result.errors).toContain("Tables are required");
    });
    
    // * 3
    it("returns error when a table is invalid", () => {
        const playersPerTable = 2;
        const table = createTestTable();
        table[0].playerIds = [];

        const result = validateRoundTables(table, playersPerTable);

        expect(result.errors).toContain("Players are required");
    });
    
    // * 4
    it("returns error when there is a duplicated player between tables", () => {
        const playersPerTable = 2;
        const table = createTestTable();
        table[1].playerIds[0] = "p1";

        const result = validateRoundTables(table, playersPerTable);

        expect(result.errors).toContain("There's the same player on different tables");
    });
    
    // * 5
    it("returns validation errors for every invalid table", () => {
        const playersPerTable = 2;
        const table = createTestTable();
        table[0].playerIds = [];
        table[1].playerIds = [];

        const result = validateRoundTables(table, playersPerTable);

        expect(result.errors).toContain("Players are required");
        expect(result.errors).toHaveLength(2);
    });
});