import type { DraftPlayer } from "../../pages/createTournament/CreateTournament.types";

export type PlayerSelectorProps = {
    playersList: DraftPlayer[],
    newPlayer: string,
    onNewPlayerChange: (alias: string) => void,
    onAddPlayer: () => void,
    onPlayerSelectionChange: (id: string, selected: boolean) => void,
}