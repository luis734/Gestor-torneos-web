import { RoundsMode } from "../types/RoundsMode";
import { ScoringSystem } from "../types/ScoringSystem";
import { TournamentType } from "../types/TournamentType";

export interface TournamentSettings {
    tournamentType: TournamentType;
    scoringSystem: ScoringSystem;
    tablesCount?: number;
    playersPerTable?: number;
    roundsMode: RoundsMode;
    roundsCount?: number;
};