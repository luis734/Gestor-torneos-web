import type { ScoringSystem } from "../../../domain/types/ScoringSystem";
import type { TournamentType } from "../../../domain/types/TournamentType";

export type CreateTournamentFormData = {
    tournamentName: string;
    players: string[];
    roundsCount: number;
    tournamentType: TournamentType;
    scoringSystem: ScoringSystem;
};