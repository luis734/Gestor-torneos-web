import { describe, expect, it } from "vitest";
import { validateTournamentSettings } from "../../features/tournament/validators/tournament/validateTournamentSettings";
import type { TournamentSettings } from "../../features/tournament/models/TournamentSettings";

function createTestSettings(): TournamentSettings {
    return {
        tournamentType: "round_robin",
            scoringSystem: "position_based",
            playersPerTable: 3,
            roundsMode: "automatic",
            roundsCount: 10,
    }
}

describe("validateTournamentSettings", () => {
    it("returns valid for a correct tournament settings", () => {
        const settings: TournamentSettings = createTestSettings();

        const result = validateTournamentSettings(settings);

        expect(result.isValid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    it("returns error when tournament types missing", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.tournamentType = undefined;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Tournament type is required"]);
    });

    it("returns error when scoring system missing", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.scoringSystem = undefined;
        
        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Scoring system is required"]);
    });

    it("returns error when rounds mode missing", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.roundsMode = undefined;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Rounds mode is required"]);
    });

    it("returns error when roundsCount is not valid", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.roundsCount = 0;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Round number must be more than 0"]);
    });

    it("returns error when roundsMode is manual but roundsCount is not set", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.roundsMode = "manual";
        settings.roundsCount = undefined;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Rounds in manual mode requires a rounds count"]);
    });

    it("returns error when tablesCount is not valid", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.tablesCount = 0;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Table count must be more than 0"]);
    });

    it("returns error when playersPerTable is not valid", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.playersPerTable = 1;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toEqual(["Players per table must be more than 1"]);
    });

    it("returns accumulated errores", () => {
        const settings: TournamentSettings = createTestSettings();
        settings.tournamentType = undefined;
        settings.scoringSystem = undefined;
        settings.roundsMode = undefined;
        settings.tablesCount = 0;
        settings.playersPerTable = 1;

        const result = validateTournamentSettings(settings);

        expect(result.errors).toContain("Tournament type is required");
        expect(result.errors).toContain("Scoring system is required");
        expect(result.errors).toContain("Rounds mode is required");
        expect(result.errors).toContain("Table count must be more than 0");
        expect(result.errors).toContain("Players per table must be more than 1");
        expect(result.errors).toHaveLength(5);
    });
});