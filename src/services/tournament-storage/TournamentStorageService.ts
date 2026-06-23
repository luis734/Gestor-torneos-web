import type { Tournament } from "../../domain/models/Tournament";
import type { TournamentStorageSchema } from "./types";

export class TournamentStorageService {
    private static KEY = "tournaments:v1";
    private createDefaultSchema(): TournamentStorageSchema {
        return {
            version: 1,
            tournaments: [],
            lastOpenedTournamentId: null
        }
    }

    private read(): TournamentStorageSchema {
        const data = localStorage.getItem(TournamentStorageService.KEY);
        
        // Caso 1: Null check
        if (data === null) return this.createDefaultSchema();

        // Caso 2: Json corrupto o incompleto
        try {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            return parsedData;
        } catch (error) {
            console.error(error);
            return this.createDefaultSchema();
        }

    }

    private write(data: TournamentStorageSchema): void {
        const payload = JSON.stringify(data);

        localStorage.setItem(TournamentStorageService.KEY, payload);
    }

    getAll() : Tournament[] {
        const data = this.read();

        return data.tournaments;
    }

    getById(id:string) : Tournament | null {
        const data = this.read();

        return data.tournaments.find((t) => t.id === id) ?? null;
    }

    create(tournament: Tournament): void {
        const data = this.read();

        data.tournaments.push(tournament);

        this.write(data);
    }

    update(tournament: Tournament) : void {
        const data = this.read();

        const index = data.tournaments.findIndex((t) => t.id === tournament.id);

        if (index === -1) {
            console.warn("Tournament not found during update");
            return;
        }

        data.tournaments[index] = tournament;

        this.write(data);
    }

    delete(id: string) : void {
        const data = this.read();

        data.tournaments = data.tournaments.filter((t) => t.id !== id);

        this.write(data);
    }

    getLastOpenedTournamentId(): string | null {
        const data = this.read();

        return data.lastOpenedTournamentId ?? null;
    }

    setLastOpenedTournamentId(lastId: string) {
        const data = this.read();

        data.lastOpenedTournamentId = lastId;

        this.write(data);
    }
}