import { describe, expect, it } from "vitest";
import { createTestTournament } from "../helpers/createTestTournamen";
import { updateTournamentStatus } from "../../features/tournament/services/tournament/updateTournamentStatus";
import { createTestRound } from "../helpers/createTestRound";


describe("updateTournamentStatus", () => {
    // * 1
    it("should keep paused status", () => {
        const torneo = createTestTournament({status: "paused"});

        const result = updateTournamentStatus(torneo);

        expect(result.status).toBe("paused");
    });

    // * 2
    it("should set draft when all rounds are pending", () => {
        const torneo = createTestTournament({
            rounds: [
                createTestRound(),
                createTestRound(),
            ],
        });

        const result = updateTournamentStatus(torneo);

        expect(result.status).toBe("draft");
    });

    // * 3
    it("should set completed when all rounds are completed", () => {
        const torneo = createTestTournament({
            rounds: [
                createTestRound({
                    status: "completed",
                }),
                createTestRound({
                    status: "completed",
                }),
            ],
        });

        const result = updateTournamentStatus(torneo);

        expect(result.status).toBe("completed");
    });

    // * 4
    it("should set active when tournament has started", () => {
        const torneo = createTestTournament({
            rounds: [
                createTestRound({
                    status: "completed",
                }),
                createTestRound({
                    status: "pending",
                }),
            ],
        });

        const result = updateTournamentStatus(torneo);

        expect(result.status).toBe("active");
    });

    // * 5
    it("should set active when a round is in progress", () => {
        const torneo = createTestTournament({
            rounds: [
                createTestRound({
                    status: "in_progress",
                }),
                createTestRound({
                    status: "pending",
                }),
            ],
        });

        const result = updateTournamentStatus(torneo);

        expect(result.status).toBe("active");
    });

    // * 6
    it("returns draft when the tournament has no rounds", () => {
        const torneo = createTestTournament();

        const result = updateTournamentStatus(torneo);

        expect(result.status).toBe("draft");
    });
});