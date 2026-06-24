import type { Tournament } from "../../domain/models/Tournament";
import type { TournamentStorageService } from "../tournament-storage/TournamentStorageService";

export class TournamentManager {
    // TODO Cambiar el tipo de storageService por una interfaza cuando se requiera cambiar a API
    private storageService: TournamentStorageService;
    private setTournament: (tournament: Tournament) => void;

    constructor(
        storageService: TournamentStorageService,
        setTournament: (tournament: Tournament) => void
    ) {
        this.storageService = storageService;
        this.setTournament = setTournament;
    }

    openTournament(id: string) : boolean {
        const tournament = this.storageService.getById(id);

        // Validamos que el torneo exista, si no existe terminamos aqui
        if (tournament === null) return false;

        // Guardamos en zustand (estado global) el torneo actual
        this.setTournament(tournament);

        // Guardamos en el storageService id del utlimo torneo abierto para continuidad
        this.storageService.setLastOpenedTournamentId(id);

        return true;
    }

    // TODO Posibles funciones a implementar
    // createTournament(payload);
    // saveTournament();
    // closeTournament();
    // restoreLastTournament();
}