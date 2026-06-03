import type { TournamentSettings } from "../../features/tournament/models/TournamentSettings";

export function createTestSettings(): TournamentSettings {
    return {
        tournamentType: "round_robin",
        scoringSystem: "position_based",
        roundsMode: "automatic",
    }
}