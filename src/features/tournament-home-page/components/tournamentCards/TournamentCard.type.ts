import type { Tournament } from "../../../../domain/models/Tournament";

export type CardProp = {
    tournament: Tournament,
    onClick: (value: string) => void,
}