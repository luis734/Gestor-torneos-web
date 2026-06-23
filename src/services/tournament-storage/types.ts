import type { Tournament } from "../../domain/models/Tournament";

export type TournamentStorageSchema = {
    version: number;
    tournaments: Tournament[];
    lastOpenedTournamentId: string | null;
};