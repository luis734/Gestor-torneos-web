import { TournamentStatus } from "../types/TournamentStatus";
import { Player } from "./Player";
import { Round } from "./Round";
import { TournamentSettings } from "./TournamentSettings";

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