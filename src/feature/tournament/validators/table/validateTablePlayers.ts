import { ValidationResult } from "../shared/types/ValidationResult";

export function validateTablePlayers(playerIds: string[], playersPerTable: number): ValidationResult {
    const errors: string[] = [];

    // Si la mesa no tiene jugadores devolvemos rápido el error
    if (playerIds.length === 0) return {isValid: false, errors: ["Players are required"]};

    const uniquePlayers = new Set<string>();

    for (const player of playerIds) {
        // Validamos que no vengan ids vacias
        if (player.trim() === "") {
            errors.push("Player ID cannot be empty");
        }

        // Validamos que sean ids unicas
        if (uniquePlayers.has(player)) {
            errors.push(`Duplicated player ID: ${player}`);
        }
        
        uniquePlayers.add(player);
    }
    
    // Validamos que haya exactamente los players necesarios para la mesa
    if (playerIds.length !== playersPerTable) {
        errors.push(`Table must contain exactly ${playersPerTable} players`);
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};