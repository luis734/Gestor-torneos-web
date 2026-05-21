import { TableResult } from "../../models/TableResult";
import { ValidationResult } from "../shared/types/ValidationResult";

export function validateTableResults(results: TableResult[], playerIds: string[]): ValidationResult {
    const errors: string[] = [];

    // Si no hay resultados de la mesa devolvemos rápido el error
    if (results.length === 0) return {isValid: false, errors: ["Results are required"]};

    // Validamos que haya resultados para todos los jugadores
    if (results.length !== playerIds.length) {
        errors.push("Each player must have a result");
    }

    const uniquePlayer = new Set<string>();
    const uniquePositions = new Set<number>();

    for (const result of results) {
        // Player ID vacío
        if (result.playerId.trim() === "") {
            errors.push("Player ID cannot be empty");
        }

        // Jugador repetido
        if (uniquePlayer.has(result.playerId)) {
            errors.push(`Duplicated player result: ${result.playerId}`);
        } else {
            uniquePlayer.add(result.playerId);
        }

        // Jugador no pertenece a la mesa
        if (playerIds.includes(result.playerId)) {
            errors.push(`Player does not belong to table: ${result.playerId}`);
        }

        // Posiciónes fuera del rango
        if (result.position <= 0) {
            errors.push(`Invalid position: ${result.position}`);
        }

        // Posiciones repetidas (NO CONSIDERA EMAPTES)
        if (uniquePositions.has(result.position)) {
            errors.push(`Duplicated position: ${result.position}`);
        } else {
            uniquePositions.add(result.position);
        }
    }

    // Validar posiciones consecutivas
    const sortedPositions = [...uniquePositions].sort((a,b) => a - b);

    // Validamos que no haya posiciones consecutivas
    for (let i = 0; i < sortedPositions.length; i++) {
        const expectedPosition = i + 1;
        
        if (sortedPositions[i] !== expectedPosition) {
            errors.push("Positions must be consecutive starting from 1");
            break;
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};