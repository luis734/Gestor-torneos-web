import type { Player } from "../../models/Player";
import type { ValidationResult } from "../shared/types/ValidationResult";

const MIN_PLAYERS = 2;

export function validateTournamentPlayers(
    players: Player[],
    playersPerTable: number
): ValidationResult {

    const errors: string[] = [];

    // Lista vacía
    if (players.length === 0) {
        return {
            isValid: false,
            errors: ["Players can not be empty"]
        };
    }

    // Mínimo de jugadores
    if (players.length < MIN_PLAYERS) {
        errors.push("Must be at least 2 players");
    }

    const uniqueIds = new Set<string>();
    const uniqueAlias = new Set<string>();

    for (const player of players) {

        // IDs duplicados
        if (uniqueIds.has(player.id)) {
            errors.push("Duplicated player ID detected");
        } else {
            uniqueIds.add(player.id);
        }

        // Alias duplicados
        if (uniqueAlias.has(player.alias)) {
            errors.push(`${player.alias} is duplicated`);
        } else {
            uniqueAlias.add(player.alias);
        }
    }

    // Si los jugadores son inválidos, no seguimos
    if (errors.length > 0) {
        return {
            isValid: false,
            errors
        };
    }

    // Distribución de mesas
    if (players.length % playersPerTable !== 0) {
        errors.push(
            "This amount of players cannot be evenly distributed across tables"
        );
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}