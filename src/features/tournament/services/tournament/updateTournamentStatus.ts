import type { Tournament } from "../../models/Tournament";

export function updateTournamentStatus(tournament: Tournament): Tournament {
    if (tournament.status === "paused") {
        return tournament;
    }

    const counts = tournament.rounds.reduce(
        (acc, round) => {
            acc[round.status] = (acc[round.status] ?? 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );

    // Todas las rondas pending
    if (counts["pending"] === tournament.rounds.length) {
        return {
            ...tournament,
            status: "draft"
        };
    }

    // Todas las rondas completadas
    if (counts["completed"] === tournament.rounds.length) {
        return {
            ...tournament,
            status: "completed"
        };
    }

    // Alguna ronda iniciada o completada
    if ((counts["in_progress"] ?? 0) >= 1 || (counts["completed"] ?? 0) >= 1) {
        return {
            ...tournament,
            status: "active"
        };
    }

    return tournament;
}