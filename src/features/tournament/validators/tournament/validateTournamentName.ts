import type { ValidationResult } from "../shared/types/ValidationResult";

const MAX_TOURNAMENT_NAME_LENGTH = 30;

export function validateTournamentName(name: string): ValidationResult {
    const errors: string[] = [];
    name = name.trim();

    // Si no hay nombre del torneo devuelve rápido el error
    if (!name) return {isValid: false,errors: ["Name is required"]};

    // Validamos que no sea un nombre tan largo
    if (name.length > MAX_TOURNAMENT_NAME_LENGTH) {
        errors.push(`Name is too long (<${MAX_TOURNAMENT_NAME_LENGTH})`);
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};