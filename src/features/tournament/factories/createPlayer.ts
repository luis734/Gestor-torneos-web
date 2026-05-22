import type { Player } from "../models/Player";
import type { CreatePlayerInput } from "../types/inputs/CreatePlayerInput";
import { createId } from "../utils/createId";

export const createPlayer = (
    input: CreatePlayerInput
): Player => {
    return {
        id: createId(),
        alias: input.alias,
    };
};