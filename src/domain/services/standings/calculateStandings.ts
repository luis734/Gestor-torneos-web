import type { Round } from "../../models/Round";
import type { PlayerStanding } from "../../types/PlayerStandings";

export function calculateStandings(rounds: Round[], maxPlayerPerTable: number): PlayerStanding[] {
    // 1 Filtrar rounds validas
    const validRounds = rounds.filter((round) => round.status === "completed");
    
    // 2 Acumular estadisticas
    const standingsMap = new Map<string, PlayerStanding>();

    for (const round of validRounds) {
        for (const table of round.tables) {
            for (const result of table.results) {
                const playerId = result.playerId;
                
                let standings = standingsMap.get(playerId);

                if (!standings) {
                    standings = {
                        playerId,
                        totalPoints: 0,
                        placements: [],
                        rank: 0
                    };

                    standingsMap.set(playerId, standings);
                }

                standings.placements.push(result.position);
                standings.totalPoints += result.position;
            }
        }
    }

    const standings = Array.from(standingsMap.values());

    // Cuantas veces aparece una posicion
    function countPlacement(placements: number[], target: number): number {
        return placements.filter(placement => placement == target).length;
    }

    // Comparador reutilizabel
    function compareStandings(a: PlayerStanding, b: PlayerStanding): number {
        // 1. Orden por puntos
        const pointsDifference = a.totalPoints - b.totalPoints;

        if (pointsDifference !== 0) {
            return pointsDifference;
        }

        // 2. Tiebreak por placements
        for (let position = 1; position <= maxPlayerPerTable; position++) {
            const aCount = countPlacement(a.placements, position);

            const bCount = countPlacement(b.placements, position);

            const placementDifference = bCount - aCount;

            if (placementDifference !== 0) {
                return placementDifference;
            }
        }

        // Empate real
        return 0;
    }

    // 3 Ordenar jugadores
    standings.sort(compareStandings);

    // 4 Asignar ranks con empates
    if (standings.length > 0) {
        standings[0].rank = 1;

        for(let index = 1; index < standings.length; index++) {
            const currentStanding = standings[index];

            const previousStanding = standings[index - 1];

            const tied = compareStandings(currentStanding, previousStanding) === 0;

            currentStanding.rank = tied ? previousStanding.rank : index + 1;
        }
    }

    return standings;
}