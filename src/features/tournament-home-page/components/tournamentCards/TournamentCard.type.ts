import type { BadgeVariant } from "../../../../components/ui/badge/Badge.types"

export type CardProp = {
    status: BadgeVariant;
    tournamentName: string;
    playersCount: number;
    roundsCount: number;
    lastSync: string;
}