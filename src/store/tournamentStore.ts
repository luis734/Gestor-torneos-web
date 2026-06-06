import { create } from "zustand";
import type { Tournament } from "../domain/models/Tournament";

export type TournamentStore = {
    tournament: Tournament | null;
    savedPlayers: string[];

    setTournament(tournament: Tournament): void;
    addSavedPlayer(alias: string): void;
    removeSavedPlayer(alias: string): void;
};

export const useTournamentStore = create<TournamentStore>((set, get) => ({
    tournament: null,
    savedPlayers: [],

    setTournament: (newTournament) => {
        set({
            tournament: newTournament
        });
    },

    addSavedPlayer: (alias) => {
        const players = get().savedPlayers;

        set({
            savedPlayers: [...players, alias],
        });
    },

    removeSavedPlayer: (alias) => {
        const players = get().savedPlayers;
        const listWithoutPlayer = players.filter(name => name !== alias);

        set({
            savedPlayers: listWithoutPlayer,
        });
    }
}));