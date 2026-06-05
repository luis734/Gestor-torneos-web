import type { Tournament } from "../models/Tournament";
import type { CreateTournamentInput } from "../types/inputs/CreateTournamentInput";
import { createId } from "../utils/createId";
import { createTimestamp } from "../utils/createTimestamp";

export const createTournament = (
    input: CreateTournamentInput
): Tournament => {
    const timestamp = createTimestamp();
    return {
        id: createId(),
        name: input.name,
        status: "draft",
        currentRound: 0,
        players: input.players,
        rounds: input.rounds,
        settings: input.settings,
        createdAt: timestamp,
        updatedAt: timestamp,
    };
};