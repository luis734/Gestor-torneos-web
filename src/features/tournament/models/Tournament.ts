import type { TournamentStatus } from "../types/TournamentStatus";
import type { Player } from "./Player";
import type { Round } from "./Round";
import type { TournamentSettings } from "./TournamentSettings";

export interface Tournament {
    readonly id: string;
    name: string;
    status: TournamentStatus;
    currentRound: number;
    players: Player[]; // Falta definir el modelo de player
    rounds: Round[]; // Falta definir el modelo de rondas
    settings: TournamentSettings; // Falta definir el modelo de settings
    createdAt: string;
    updatedAt: string;
};