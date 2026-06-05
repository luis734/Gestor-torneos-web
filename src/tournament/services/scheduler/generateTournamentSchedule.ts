export function generateTournamentSchedule(playerIds: string[], playersPerTable: number, roundsCount: number):string[][][] {
    const matchupCounts = new Map<string, number>();

    function createMatchupKey(A: string, B: string): string {
        if (A < B) return A + '-' + B;
        return B + '-' + A;
    }

    function getMatchupCount(key:string): number {
        const counts = matchupCounts.get(key);
        return counts != undefined ? counts : 0;
    }

    function incrementMatchUpKey(A: string, B: string): void {
        const key = createMatchupKey(A, B);
        matchupCounts.set(key, getMatchupCount(key) + 1);
    }

    function calculateTableCost(partialTable: string[], candidate: string): number {
        return partialTable.reduce((cost, player) => {
            return cost + getMatchupCount(createMatchupKey(player, candidate));
        }, 0);
    }

    function selectBestCanidadte(partialTable: string[], listCandidates: string[]): string {
        // Verificar el coste de cada candidato
        const candidateCosts = listCandidates.map((candidate) => ({
            candidate,
            cost: calculateTableCost(partialTable, candidate)
        }));

        // Encontrar el de menor costo
        const minimumCost = Math.min(...candidateCosts.map((candidate) => candidate.cost));
        const tiedCandidates = candidateCosts.filter((candidate) => candidate.cost == minimumCost);

        // En caso de empate seleccionar al azar entre los minimos
        if (tiedCandidates.length > 1) {
            const randomIndex = Math.floor(Math.random() * tiedCandidates.length);
            return tiedCandidates[randomIndex].candidate;
        }

        return tiedCandidates[0].candidate;
    }

    function updateTableMatchup(table:string[]) {
        for (let i=0; i < table.length; i++) {
            for (let j=i+1; j < table.length; j++) {
                incrementMatchUpKey(table[i], table[j]);
            }
        }
    }

    const roundsList:string[][][] = [];
    for (let round = 0; round < roundsCount; round++) {
        const tables:string[][] = [[]];
        let tableNum = 0;
        const availablePlayers: string[] = [...playerIds];

        while (availablePlayers.length > 0) {
            // Para la primera mesa de la primera ronda se selecciona uno al azar porque da igual cual se tome
            if (tables[tableNum].length == 0) {
                const randomIndex = Math.floor(Math.random() * availablePlayers.length);
                tables[tableNum].push(availablePlayers[randomIndex]);
                availablePlayers.splice(randomIndex, 1);
                continue;
            }

            const bestCandidate = selectBestCanidadte(tables[tableNum], availablePlayers)
            tables[tableNum].push(bestCandidate);
            availablePlayers.splice(availablePlayers.indexOf(bestCandidate), 1);

            // Si la mesa aun no se lleno volvemos a seleccionar jugadores
            if (tables[tableNum].length < playersPerTable){
                continue;
            }  
            
            // Actualizamos matchupCounts de la mesa completada
            updateTableMatchup(tables[tableNum]);

            if (availablePlayers.length > 0) {
                tables.push([]);
                tableNum++;
            }
        }

        roundsList.push(tables);
    }

    return roundsList;
}