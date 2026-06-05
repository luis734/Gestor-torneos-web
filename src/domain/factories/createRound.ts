import type { Round } from "../models/Round";
import type { CreateRoundInput } from "../types/inputs/CreateRoundInput";
import { createId } from "../utils/createId";

export const createRound = (
    input: CreateRoundInput
): Round => {
    return {
        id: createId(),
        roundNumber: input.roundNumber,
        tables: input.tables,
        status: "pending",
    };
};