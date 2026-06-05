import { describe, expect, it } from "vitest";
import { generateTournamentSchedule } from "../../domain/services/scheduler/generateTournamentSchedule";

const playerIds = ["p1","p2","p3","p4"];
const playersPerTable = 2;
const roundsCount = 3;

describe("generateTournamentSchedule", () => {
    it("generates the correct amount of rounds", () => {
        const result = generateTournamentSchedule(playerIds, playersPerTable, roundsCount);

        expect(result).toHaveLength(roundsCount);
    });

    it("generate tables with the right size", () => {
        const result = generateTournamentSchedule(playerIds, playersPerTable, roundsCount);

        for (const round of result) {
            for (const table of round) {
                expect(table).toHaveLength(playersPerTable);
            }
        }
    });

    it("includes every player exactly once per round", () => {
        const result = generateTournamentSchedule(playerIds, playersPerTable, roundsCount);

        for (const round of result) {
            const flattened = round.flat(2).slice().sort();
            expect(flattened).toEqual([...playerIds].sort());
        }
    });
});