import type { Tournament } from "../../models/Tournament";

export function advanceCurrentRound(tournament: Tournament) : Tournament {
    for (let i=0; i<tournament.rounds.length; i++) {
        const roundStatus = tournament.rounds[i].status;

        if (roundStatus === "in_progress" || roundStatus === "pending") {
            return {
                ...tournament,
                currentRound: i + 1
            }
        }
    }

    return {
        ...tournament,
        currentRound: tournament.rounds.length,
    }
}