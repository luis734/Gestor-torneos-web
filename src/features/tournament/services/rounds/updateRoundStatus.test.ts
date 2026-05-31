import { describe, it, expect } from "vitest";
import { createRound } from "../../factories/createRound";
import { createTable } from "../../factories/createTable";
import { updateRoundStatus } from "./updateRoundStatus";

function createTestRound() {
    return createRound({
        roundNumber: 1,
        tables: [
            createTable({
                tableNumber: 1,
                playerIds: ["p1", "p2"]
            }),
            createTable({
                tableNumber: 2,
                playerIds: ["p3", "p4"]
            })
        ]
    });
}

describe("updateRoundStatus", () => {
    it ("returns pending when no tables are completed", () => {
        const round = createTestRound();

        const result = updateRoundStatus(round);

        expect(result.status).toBe("pending");
    });

    it ("returns in_progress when some tables are completed", () => {
        const round = createTestRound();
        round.tables[0].status = "completed";

        const result = updateRoundStatus(round);

        expect(result.status).toBe("in_progress");
    });

    it ("returns completed when all tables are completed", () => {
        const round = createTestRound();
        round.tables[0].status = "completed";
        round.tables[1].status = "completed";

        const result = updateRoundStatus(round);

        expect(result.status).toBe("completed");
    });

    it ("does not mutate original round object", () => {
        const round = createTestRound();
        round.tables[0].status = "completed";
        round.tables[1].status = "completed";

        const result = updateRoundStatus(round);
        
        expect(result.status).toBe("completed");
        expect(round.status).toBe("pending");
        expect(result).not.toBe(round);
    });
});