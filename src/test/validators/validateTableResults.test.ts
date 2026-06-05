import { describe, expect, it } from "vitest";
import { validateTableResults } from "../../domain/validators/table/validateTableResults";

describe("validateTableResults", () => {
    // 1
    it("returns valid when results are correct", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p1", position: 1},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.isValid).toBe(true);
    });

    // 2
    it("returns error when recibe no table results", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Results are required"]);
    });

    // 3
    it("returns error when missing results", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p1", position: 1},
            {playerId: "p2", position: 2}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Each player must have a result"]);
    });

    // 4
    it("returns error when a result has no ID", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "", position: 1},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Player ID cannot be empty"]);
    });

    // 5
    it("returns error when a result has an ID only with spaces", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "   ", position: 1},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Player ID cannot be empty"]);
    });

    // 6
    it("returns error when there is duplicated players", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p2", position: 1},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Duplicated player result: p2"]);
    });
    
    // 7
    it("returns error when a player does not belong to a table", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p4", position: 1},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Player does not belong to table: p4"]);
    });
    
    // 8
    it("returns error when a position is invalid", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p1", position: 0},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Invalid position: 0"]);
    });
    
    // 9
    it("returns error when a position is negative", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p1", position: -1},
            {playerId: "p2", position: 2},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Invalid position: -1"]);
    });
    
    // 10
    it("returns error when a position is duplicated", () => {
        const playerIds = ["p1", "p2", "p3"];
        const tableResults = [
            {playerId: "p1", position: 1},
            {playerId: "p2", position: 1},
            {playerId: "p3", position: 3}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Duplicated position: 1"]);
    });
    
    // 11
    it("returns error when there is non consecutive positions", () => {
        const playerIds = ["p1", "p2", "p3", "p4"];
        const tableResults = [
            {playerId: "p1", position: 1},
            {playerId: "p2", position: 3},
            {playerId: "p3", position: 2},
            {playerId: "p4", position: 5}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toEqual(["Positions must be consecutive starting from 1"]);
    });
    
    // 12
    it("accumulation of multiple errors", () => {
        const playerIds = ["p1", "p2"];
        const tableResults = [
            {playerId: "p1", position: 1},
            {playerId: "p1", position: 1}
        ];

        const result = validateTableResults(tableResults, playerIds);

        expect(result.errors).toContain("Duplicated player result: p1");
        expect(result.errors).toContain("Duplicated position: 1");
    });
});