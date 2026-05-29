import { createPlayer } from "../../factories/createPlayer";
import { createTournament } from "../../factories/createTournament";
import type { Player } from "../../models/Player";
import type { Tournament } from "../../models/Tournament";
import type { TournamentSettings } from "../../models/TournamentSettings";
import { generateTournamentRounds } from "../rounds/generateTournamentRounds";
import { generateTournamentSchedule } from "../scheduler/generateTournamentSchedule";

export function setupTournament(playersAlias: string[], settings: TournamentSettings, tournamentName: string): Tournament {
    
    // Crear objetos de players
    const playersList: Player[] = [];
    for (const alias of playersAlias) {
        playersList.push(createPlayer({alias}));
    }
    
    // Extraer lista de Ids
    const playerIds = playersList.map(player => player.id);

    // Generar el emparejamiento de rondas (mesas (jugadores))
    const scheduling = generateTournamentSchedule(playerIds, settings.playersPerTable, settings.roundsCount);
    
    // Crear el objeto de torneo
    const tournament = createTournament({name: tournamentName, players: playersList, settings});
    
    // Generar los objetos de rondas en base al scheduling
    const roundsList = generateTournamentRounds(scheduling);
    tournament.rounds = roundsList;

    return tournament;
}