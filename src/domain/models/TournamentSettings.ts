import type { ScoringSystem } from "../types/ScoringSystem";
import type { TournamentType } from "../types/TournamentType";

export interface TournamentSettings {
    tournamentType: TournamentType;
    scoringSystem: ScoringSystem;
    tablesCount?: number;
    playersPerTable: number;
    roundsCount?: number;
};