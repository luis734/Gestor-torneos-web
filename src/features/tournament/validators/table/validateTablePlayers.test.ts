import { describe, expect, it } from "vitest";
import { validateTablePlayers } from "./validateTablePlayers";

describe("validateTablePlayers", () => {
    it("returns valid for correct table players", () => {
        const playerIds = ["p1", "p2", "p3"];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.isValid).toBe(true);
    });

    it("returns error when a table has no players", () => {
        const playerIds = [];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toEqual(["Players are required"]);
    });

    it("returns error when player id is empty", () => {
        const playerIds = ["p1", "", "p3"];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toEqual(["Player ID cannot be empty"]);
    });

    it("returns error when player id contains only spaces", () => {
        const playerIds = ["p1", "   ", "p3"];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toEqual(["Player ID cannot be empty"]);
    });

    it("returns error when player ids are duplicated", () => {
        const playerIds = ["p1", "p1", "p3"];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toEqual(["Duplicated player ID: p1"]);
    });

    it("returns error when table has fewer players than required", () => {
        const playerIds = ["p1", "p2"];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toEqual([`Table must contain exactly ${playersPerTable} players`]);
    });

    it("returns error when table has more players than required", () => {
        const playerIds = ["p1", "p2", "p3", "p4"];
        const playersPerTable = 3;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toEqual([`Table must contain exactly ${playersPerTable} players`]);
    });

    it("accumulates multiple validation errors", () => {
        const playerIds = ["p1", "", "p1"];
        const playersPerTable = 4;

        const result = validateTablePlayers(playerIds, playersPerTable);

        expect(result.errors).toHaveLength(3);
        expect(result.errors).toContain("Player ID cannot be empty");
        expect(result.errors).toContain("Duplicated player ID: p1");
        expect(result.errors).toContain("Table must contain exactly 4 players");
    });
});