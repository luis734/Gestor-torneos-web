import { describe, it, expect } from "vitest";
import { generateTournamentRounds } from "../../../domain/services/rounds/generateTournamentRounds";

describe("generateTournamentRounds", () => {
    it("generate the correct amount of rounds", () => {
        const schedule = [[["p1","p2"]],[["p3","p4"]]];

        const result = generateTournamentRounds(schedule );

        expect(result).toHaveLength(2);
    });
    
    it("assigns correct round numbers", () => {
        const schedule = [[["p1","p2"]],[["p3","p4"]],[["p5","p6"]]];

        const result = generateTournamentRounds(schedule);

        expect(result[0].roundNumber).toBe(1);
        expect(result[1].roundNumber).toBe(2);
        expect(result[2].roundNumber).toBe(3);
    });
    
    it("creates tables with the correct players", () => {
        const schedule = [[["p1","p2"],["p3","p4"]]];

        const result = generateTournamentRounds(schedule);

        expect(result).toHaveLength(1);
        expect(result[0].tables).toHaveLength(2);
        expect(result[0].tables[0].playerIds).toEqual(["p1", "p2"]);
        expect(result[0].tables[1].playerIds).toEqual(["p3", "p4"]);
        expect(result[0].tables[0].tableNumber).toBe(1);
        expect(result[0].tables[1].tableNumber).toBe(2);
    });
});