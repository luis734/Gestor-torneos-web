import type { Tournament } from "../../tournament/models/Tournament";
import { createTestSettings } from "./createTestSettings";

export function createTestTournament(
    overrides: Partial<Tournament> = {}
): Tournament {
    return {
        id: "tournament-1",
        name: "Test Tournament",
        status: "draft",
        currentRound: 1,
        players: [],
        rounds: [],
        settings: createTestSettings(),
        createdAt: "",
        updatedAt: "",
        ...overrides,
    };
}