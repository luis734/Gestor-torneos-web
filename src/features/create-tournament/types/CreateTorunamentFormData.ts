import type { ScoringSystem } from "../../../tournament/types/ScoringSystem";
import type { TournamentType } from "../../../tournament/types/TournamentType";

export type CreateTournamentFormData = {
    tournamentName: string;
    players: string[];
    roundsCount: number;
    tournamentType: TournamentType;
    scoringSystem: ScoringSystem;
};