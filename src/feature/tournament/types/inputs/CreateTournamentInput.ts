import { Player } from "../../models/Player";
import { TournamentSettings } from "../../models/TournamentSettings";

export interface CreateTournamentInput {
    name: string;
    players: Player[];
    settings: TournamentSettings;
};