import type { TournamentSettings } from "../../domain/models/TournamentSettings";

export function createTestSettings(): TournamentSettings {
    return {
        tournamentType: "round_robin",
        scoringSystem: "position_based",
    }
}