import { Player } from "../../models/Player";
import { ValidationResult } from "../shared/types/ValidationResult";

const MIN_PLAYERS = 2;

export function validateTournamentPlayers(players: Player[], playersPerTable: number): ValidationResult {
    const errors: string[] = [];

    // Si el torneo no tiene jugadores devolvemos rápido el error
    if (players.length === 0) return {isValid: false, errors: ["Players can not be empty"]};

    // Validamos si hay suficientes jugadores
    if (players.length < MIN_PLAYERS) {
        errors.push(`Must be at least ${MIN_PLAYERS} players`);
    }

    const uniqueIds = new Set<string>();
    const uniqueAlias = new Set<string>();

    for (const player of players) {
        // Validamos si no hay jugadores con IDs duplicados en el torneo
        if (uniqueIds.has(player.id)) {
            errors.push("Duplicated player ID detected");
        } else {
            uniqueIds.add(player.id);
        }
        
        // Validamos si no hay jugadores con alias duplicados en el torneo
        if (uniqueAlias.has(player.alias)) {
            errors.push(`${player.alias} is duplicated`);
        } else {
            uniqueAlias.add(player.alias);
        }
    }

    // Validamos que no se queden jugadores fuera de alguna mesa
    if (players.length % playersPerTable !== 0) {
        errors.push("This amout of Players cannot be evenly distributed across tables");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}