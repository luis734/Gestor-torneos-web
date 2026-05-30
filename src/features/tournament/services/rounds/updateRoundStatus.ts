import type { Round } from "../../models/Round";

export function updateRoundStatus(round: Round): Round {
    const completedCount = round.tables.filter( table => table.status === "completed").length;

    // Si todas las mesas estan completadas, la ronda "completed"
    const status = completedCount === round.tables.length
        ? "completed"
        // Si la ronda algunas mesas completadas, la ronda "in_progress"
        : completedCount > 0
            ? "in_progress"
            // Si la ronda tiene 0 mesas completadas, la ronda "pending"
            : "pending";

    return {
        ...round,
        status,
    }
}