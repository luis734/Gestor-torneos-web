import type { Player } from "../../../domain/models/Player";

export function createTestPlayer(
    overrides: Partial<Player> = {}
): Player {
    return {
        id: "player-1",
        alias: "Player 1",
        ...overrides,
    };
}