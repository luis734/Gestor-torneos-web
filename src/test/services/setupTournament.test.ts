import { describe, expect, it } from "vitest";
import type { TournamentSettings } from "../../features/tournament/models/TournamentSettings";
import { setupTournament } from "../../features/tournament/services/tournament/setupTournament";

const playersAlias = ["p1", "p2", "p3", "p4", "p5", "p6"];
const settings: TournamentSettings = {
    tournamentType: "round_robin",
    scoringSystem: "position_based",
    tablesCount: 2,
    playersPerTable: 3,
    roundsMode: "automatic",
    roundsCount: 10,
};
const tournamentName = "Torneo pitero";

function createTournament() {
    return setupTournament(
        playersAlias,
        settings,
        tournamentName
    );
}

describe("setupTournament", () => {
    it("creates a tournament with the provided name", () => {
        const result = createTournament();

        expect(result.name).toBe(tournamentName);
    });

    it("creates the correct amount of players", () => {
        const result = createTournament();

        expect(result.players).toHaveLength(playersAlias.length);
    });

    it("preserves player alias", () => {
        const result = createTournament();

        expect(
            result.players.map(player => player.alias)
        ).toEqual(playersAlias);
    });

    it("generates tournament rounds", () => {
        const result = createTournament();

        expect(result.rounds.length).toBe(settings.roundsCount);
    });

    it("stores tournament settings", () => {
        const result = createTournament();

        expect(result.settings).toEqual(settings);
    });

    it("creates players with unique ids", () => {
        const result = createTournament();
    
        const ids = result.players.map(player => player.id);
    
        expect(new Set(ids).size).toBe(ids.length);
    });
});