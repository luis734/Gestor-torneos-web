import type { Player } from "../../tournament/models/Player";

export function createTestPlayer(
    overrides: Partial<Player> = {}
): Player {
    return {
        id: "player-1",
        alias: "Player 1",
        ...overrides,
    };
}