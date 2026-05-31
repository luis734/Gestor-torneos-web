import type { Table } from "../../models/Table";
import type { ValidationResult } from "../shared/types/ValidationResult";
import { validateTablePlayers } from "../table/validateTablePlayers";

export function validateRoundTables(tables: Table[], playersPerTable: number): ValidationResult {
    const errors: string[] = [];

    // Si la ronda no tiene mesas devolvemos rapido el error
    if (tables.length === 0) return {isValid: false, errors: ["Tables are required"]};

    const uniqueRoundPlayers = new Set<string>();
    const uniqueTableIds = new Set<string>();

    // Validamos las mesas de la ronda
    for (const table of tables) {
        // Validamos los jugadores de la mesa
        const results: ValidationResult = validateTablePlayers(table.playerIds, playersPerTable);
        if (!results.isValid) {
            errors.push(...results.errors);
            // continue; // En caso de no querer errores secundarios se descomenta esta linea.
        }

        // Validamos si los jugadores no se repiten en distintas mesas de la ronda
        for (const player of table.playerIds) {
            if (uniqueRoundPlayers.has(player)) {
                errors.push("There's the same player on different tables");
            } else {
                uniqueRoundPlayers.add(player);
            }
        }
        
        // Validación defensivo en caso de que haya mesas con la misma ID
        if (uniqueTableIds.has(table.id)) {
            errors.push("Duplicated tables on the round");
        } else {
            uniqueTableIds.add(table.id);
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}