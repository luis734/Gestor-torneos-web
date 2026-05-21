import { TournamentSettings } from "../../models/TournamentSettings";
import { ValidationResult } from "../shared/types/ValidationResult";

export function validateTournamentSettings(settings: TournamentSettings): ValidationResult {
    const errors: string[] = [];

    // Validamos que existan las variables principales
    if (!settings.tournamentType) {   
        errors.push("Tournament type is required");
    }
    
    if (!settings.scoringSystem) {
        errors.push("Scoring system is required");
    }
    
    if (!settings.roundsMode) {
        errors.push("Rounds mode is required");
    }

    // Validaciones sobre las rondas
    if (settings.roundsCount !== undefined && settings.roundsCount <= 0) {
        errors.push("Round number must be more than 0");
    }

    if (settings.roundsMode === "manual" && (settings.roundsCount === undefined || settings.roundsCount <= 0)) {
        errors.push("Rounds in manual mode needs to define Rounds number");
    }

    // Validaciones sobre las mesas
    if (settings.tablesCount !== undefined && settings.tablesCount <= 0) {
        errors.push("Table count must be more than 0");
    }

    if (settings.playersPerTable !== undefined && settings.playersPerTable <= 1) {
        errors.push("Players per table must be more than 1");
    }

    return {
        isValid: errors.length === 0,
        errors,
    }
};