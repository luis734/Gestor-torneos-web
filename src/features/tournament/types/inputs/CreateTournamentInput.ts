import type { Player } from "../../models/Player";
import type { TournamentSettings } from "../../models/TournamentSettings";

export interface CreateTournamentInput {
    name: string;
    players: Player[];
    settings: TournamentSettings;
};