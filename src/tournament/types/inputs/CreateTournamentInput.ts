import type { Player } from "../../models/Player";
import type { Round } from "../../models/Round";
import type { TournamentSettings } from "../../models/TournamentSettings";

export interface CreateTournamentInput {
    name: string;
    players: Player[];
    settings: TournamentSettings;
    rounds: Round[];
};