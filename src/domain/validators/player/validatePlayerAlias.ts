import type { ValidationResult } from "../shared/types/ValidationResult";

const MIN_ALIAS_LENGTH = 5;
const MAX_ALIAS_LENGTH = 15;

export function validatePlayerAlias(alias: string): ValidationResult {
    const errors: string[] = [];
    alias = alias.trim();

    // Validamos que tenga un alias el jugador
    if (!alias) {
        errors.push("Alias is required");
        return {isValid: false, errors};
    }

    // Validamos que el alias tenga un minimo de letras
    if(alias.length < MIN_ALIAS_LENGTH) {
        errors.push(`Alias is too short (>${MIN_ALIAS_LENGTH})`);
    }
    
    // Validamos que el alias no exceda el maximo de letras
    if(alias.length > MAX_ALIAS_LENGTH) {
        errors.push(`Alias is too long (<${MAX_ALIAS_LENGTH})`);
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};