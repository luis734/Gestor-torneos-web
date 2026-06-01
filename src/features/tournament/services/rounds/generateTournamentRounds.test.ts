import { describe, it, expect } from "vitest";
import { generateTournamentRounds } from "./generateTournamentRounds";

describe("generateTournamentRounds", () => {
    it("generate the correct amount of rounds", () => {
        const round = [[["p1","p2"]],[["p3","p4"]]];

        const result = generateTournamentRounds(round);

        expect(result).toHaveLength(2);
    });
    
    it("all round's number are corrects", () => {
        const round = [[["p1","p2"]],[["p3","p4"]],[["p5","p6"]]];

        const result = generateTournamentRounds(round);

        expect(result[0].roundNumber).toBe(1);
        expect(result[1].roundNumber).toBe(2);
        expect(result[2].roundNumber).toBe(3);
    });
    
    it("tables are generated correctly", () => {
        const round = [[["p1","p2"],["p3","p4"]]];

        const result = generateTournamentRounds(round);

        expect(result).toHaveLength(1);
        expect(result[0].tables).toHaveLength(2);
        expect(result[0].tables[0].playerIds).toEqual(["p1", "p2"]);
        expect(result[0].tables[1].playerIds).toEqual(["p3", "p4"]);
    });
    
    it("service initilize entities using factories", () => {
        const round = [[["p1","p2"]]];

        const result = generateTournamentRounds(round);

        expect(result[0].status).toBe("pending");
        expect(result[0].tables[0].status).toBe("pending");
        expect(result[0].tables[0].results).toEqual([]);
    });
});