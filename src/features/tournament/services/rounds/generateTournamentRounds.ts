import { createRound } from "../../factories/createRound";
import { createTable } from "../../factories/createTable";
import type { Round } from "../../models/Round";
import type { Table } from "../../models/Table";

export function generateTournamentRounds(roundsList: string[][][]): Round[] {
    const tournamentRounds: Round[] = [];

    for (let i=0; i<roundsList.length; i++) {
        const tablesList: Table[] = [];

        for (let j=0; j < roundsList[i].length; j++) {
            const table = createTable({tableNumber: j + 1 ,playerIds: roundsList[i][j]});
            tablesList.push(table);
        }

        const ronda = createRound({roundNumber: i + 1 ,tables: tablesList});
        tournamentRounds.push(ronda);
    }

    return tournamentRounds;
}