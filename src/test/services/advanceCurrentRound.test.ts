import { describe, expect, it } from "vitest";
import { createTestTournament } from "../helpers/createTestTournamen";
import { createTestRound } from "../helpers/createTestRound";
import { advanceCurrentRound } from "../../features/tournament/services/tournament/advanceCurrentRound";

describe("advanceCurrentRound", () => {
    it("should keep round 1 when all rounds are pending", () => {
        const tournament = createTestTournament({
            rounds: [
                createTestRound(),
                createTestRound(),
                createTestRound()
            ],
        });

        const result = advanceCurrentRound(tournament);
        
        expect(result.currentRound).toBe(1);
    });

    it("should advance to next pending round", () => {
        const tournament = createTestTournament({
            rounds: [
                createTestRound({status: "completed"}),
                createTestRound(),
                createTestRound()
            ],
        });

        const result = advanceCurrentRound(tournament);
        
        expect(result.currentRound).toBe(2);
    });

    it("should keep current in_progress round", () => {
        const tournament = createTestTournament({
            rounds: [
                createTestRound({status: "completed"}),
                createTestRound({status: "in_progress"}),
                createTestRound()
            ],
        });

        const result = advanceCurrentRound(tournament);
        
        expect(result.currentRound).toBe(2);
    });

    it("should set last round when tournament is completed", () => {
        const tournament = createTestTournament({
            rounds: [
                createTestRound({status: "completed"}),
                createTestRound({status: "completed"}),
                createTestRound({status: "completed"}),
            ],
        });

        const result = advanceCurrentRound(tournament);
        
        expect(result.currentRound).toBe(3);
    });
});