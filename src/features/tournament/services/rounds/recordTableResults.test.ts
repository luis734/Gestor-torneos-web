import { describe, expect, it } from "vitest";
import { createTable } from "../../factories/createTable";
import { recordTableResults } from "./recordTableResults";

function createTestTable() {
    return createTable({
        tableNumber: 1,
        playerIds: ["p1", "p2", "p3"],
    });
}

function createTestTableResults() {
    return [
        {playerId: "p1", position: 1 },
        {playerId: "p2", position: 2 },
        {playerId: "p3", position: 3 },
    ];
}

describe("recordTableResults", () => {
    
    it("returns a table with recorded results", () => {
        const table = createTestTable();
        const tableResult = createTestTableResults();
        const result = recordTableResults(table, tableResult);

        expect(result.results).toEqual(tableResult);
    });

    it("marks table as completed", () => {
        const table = createTestTable();
        const tableResult = createTestTableResults();
        const result = recordTableResults(table, tableResult);

        expect(result.status).toBe("completed");
    });

    it("does not mutate original table", () => {
        const table = createTestTable();
        const tableResult = createTestTableResults();
        const result = recordTableResults(table, tableResult);

        expect(result).not.toBe(table);
        expect(table.status).toBe("pending");
        expect(table.results).toEqual([]);
    });
});