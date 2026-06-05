import type { TableResult } from "../../models/TableResult";
import type { ValidationResult } from "../shared/types/ValidationResult";

export function validateTableResults(results: TableResult[], playerIds: string[]): ValidationResult {
    const errors: string[] = [];

    // Si no hay resultados de la mesa devolvemos rápido el error
    if (results.length === 0) {
        return {
            isValid: false,
            errors: ["Results are required"],
        };
    }

    // Validamos que exista exactamente un resultado por jugador
    if (results.length !== playerIds.length) {
        errors.push("Each player must have a result");
    }

    validatePlayers(results, playerIds, errors);
    validatePositions(results, errors);

    return {
        isValid: errors.length === 0,
        errors,
    };
}

function validatePlayers(results: TableResult[], playerIds: string[], errors: string[]): void {
    const uniquePlayers = new Set<string>();

    for (const result of results) {
        const playerId = result.playerId.trim();

        // ID vacío
        if (!playerId) {
            errors.push("Player ID cannot be empty");
            continue;
        }

        // Jugador repetido
        if (uniquePlayers.has(playerId)) {
            errors.push(`Duplicated player result: ${playerId}`);
        } else {
            uniquePlayers.add(playerId);
        }

        // Jugador no pertenece a la mesa
        if (!playerIds.includes(playerId)) {
            errors.push(`Player does not belong to table: ${playerId}`);
        }
    }
}

function validatePositions(results: TableResult[],errors: string[]): void {
    const uniquePositions = new Set<number>();
    let hasPositionErrors = false;

    for (const result of results) {
        const position = result.position;

        // Posiciones inválidas
        if (position <= 0) {
            errors.push(`Invalid position: ${position}`);
            hasPositionErrors = true;
            continue;
        }

        // Posiciones repetidas
        if (uniquePositions.has(position)) {
            errors.push(`Duplicated position: ${position}`);
            hasPositionErrors = true;
        } else {
            uniquePositions.add(position);
        }
    }

    // IMPORTANTE:
    // Sólo validamos consecutividad si las posiciones ya son válidas.
    // Si existe un 0, -1 o duplicados, el error real ya fue reportado.
    if (hasPositionErrors) {
        return;
    }

    const sortedPositions = [...uniquePositions].sort((a, b) => a - b);

    for (let i = 0; i < sortedPositions.length; i++) {
        const expectedPosition = i + 1;

        if (sortedPositions[i] !== expectedPosition) {
            errors.push("Positions must be consecutive starting from 1");
            break;
        }
    }
}