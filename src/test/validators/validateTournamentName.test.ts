import { describe, expect, it } from "vitest";
import { validateTournamentName } from "../../domain/validators/tournament/validateTournamentName";

describe("validateTournamentName", () => {
    it("returns valida for a correct tournament name", () => {
        const name = "Torneo pitero";

        const result = validateTournamentName(name);

        expect(result.isValid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    it("returns error when name is empty", () => {
        const name = "";

        const result = validateTournamentName(name);

        expect(result.errors).toEqual(["Name is required"]);
    });

    it("returns error when name contains only spaces", () => {
        const name = "     ";

        const result = validateTournamentName(name);

        expect(result.errors).toEqual(["Name is required"]);
    });

    it("returns error when name exceeds maximum length", () => {
        const name = "a".repeat(31);

        const result = validateTournamentName(name);

        expect(result.errors).toEqual(["Name is too long (<30)"]);
    });
});