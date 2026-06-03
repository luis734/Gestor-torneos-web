import type { Round } from "../../features/tournament/models/Round";

export function createTestRound(
    overrides: Partial<Round> = {}
): Round {
    return {
        id: "round-1",
        roundNumber: 1,
        status: "pending",
        tables: [],
        ...overrides,
    };
}