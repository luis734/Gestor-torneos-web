import { describe, expect, it } from "vitest";
import { validateTournamentPlayers } from "../../domain/validators/tournament/validateTournamentPlayers";

describe("validateTournamentPlayers", () => {
    // * 1
    it("returns valid when all players are correct", () => {
        const players = [
            { id: "p1", alias: "Player1" },
            { id: "p2", alias: "Player2" },
            { id: "p3", alias: "Player3" },
            { id: "p4", alias: "Player4" },
        ];
        const playersPerTable = 4;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.isValid).toBe(true);
    });

    // * 2
    it("returns error when players list is empty", () => {
        const players = [];
        const playersPerTable = 4;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.errors).toEqual(["Players can not be empty"]);
    });

    // * 3
    it("returns error when there is fewer players than expected", () => {
        const players = [
            { id: "p1", alias: "Player1" }
        ];
        const playersPerTable = 4;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.errors).toEqual(["Must be at least 2 players"]);
    });

    // * 4
    it("returns error when there is duplicated IDs", () => {
        const players = [
            { id: "p1", alias: "Player1" },
            { id: "p1", alias: "Player2" }
        ];
        const playersPerTable = 2;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.errors).toEqual(["Duplicated player ID detected"]);
    });

    // * 5
    it("returns error when there is duplicated alias", () => {
        const players = [
            { id: "p1", alias: "Player1" },
            { id: "p2", alias: "Player1" }
        ];
        const playersPerTable = 2;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.errors).toEqual(["Player1 is duplicated"]);
    });

    // * 6
    it("returns error when players cannot distribute evenly", () => {
        const players = [
            { id: "p1", alias: "Player1" },
            { id: "p2", alias: "Player2" },
            { id: "p3", alias: "Player3" },
            { id: "p4", alias: "Player4" }
        ];
        const playersPerTable = 3;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.errors).toEqual(["This amount of players cannot be evenly distributed across tables"]);
    });

    // * 7
    it("accumulated multiple errors", () => {
        const players = [
            { id: "p1", alias: "Player1" },
            { id: "p1", alias: "Player1" }
        ];
        const playersPerTable = 3;

        const result = validateTournamentPlayers(players, playersPerTable);

        expect(result.errors).toContain("Duplicated player ID detected");
        expect(result.errors).toContain("Player1 is duplicated");
        expect(result.errors).not.toContain("This amount of players cannot be evenly distributed across tables");
    });
});