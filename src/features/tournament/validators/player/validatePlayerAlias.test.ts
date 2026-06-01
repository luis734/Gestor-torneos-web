import { describe, expect, it } from "vitest";
import { validatePlayerAlias } from "./validatePlayerAlias";

describe("validatePlayerAlias", () => {
    it("return valid for a correct alias", () => {
        const alias = "Player1";

        const result = validatePlayerAlias(alias);

        expect(result.isValid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    it("return error when alias is empty", () => {
        const alias = "";

        const result = validatePlayerAlias(alias);

        expect(result.errors).toEqual(["Alias is required"]);
    });

    it("return error when alias contais only spaces", () => {
        const alias = "     ";

        const result = validatePlayerAlias(alias);

        expect(result.errors).toEqual(["Alias is required"]);
    });

    it("return error when alias is shorter than minimum length", () => {
        const alias = "abc";

        const result = validatePlayerAlias(alias);

        expect(result.errors).toEqual(["Alias is too short (>5)"]);
    });

    it("returns error when alias exceeds maximum length", () => {
        const alias = "abcdefghijklmnop";

        const result = validatePlayerAlias(alias);

        expect(result.errors).toEqual(["Alias is too long (<15)"]);
    });
});