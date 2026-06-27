import { useMediaQuery } from "react-responsive";
import { PlusIcon, UsersIcon } from "../../../../assets/icons";
import { BaseInput } from "../../../../components/ui/input";
import { Checkbox } from "../../../../components/ui/checkbox";
import type { PlayerSelectorProps } from "./PlayerSelector.types";
import { PlayerSelectorStyles } from "./PlayerSelector.styles";

export function PlayerSelector({playersList, newPlayer, onNewPlayerChange, onAddPlayer, onPlayerSelectionChange}:PlayerSelectorProps) {
    const isDesktop = useMediaQuery({minWidth: 640});
    const selectedPlayersCount = playersList.reduce((count, player) => count + Number(player.selected), 0);

    return (
        <>
            {isDesktop ? (
                <div id="desktopVersion" className="flex bg-surface flex-1 border border-border m-4 rounded-[12px]">

                </div>
            ) : (
                <div id="mobileVersion" className={PlayerSelectorStyles.mMainContainer}>
                    <div id="title" className={PlayerSelectorStyles.mTitle}>
                        <span className={PlayerSelectorStyles.mIconContainer}>
                            <UsersIcon className="h-6 w-6"/>
                            Jugadores
                        </span>
                        <span className={PlayerSelectorStyles.mPlayerCount}>{selectedPlayersCount} seleccionado{selectedPlayersCount == 1 ? "" : "s"}</span>
                    </div>

                    <div className={PlayerSelectorStyles.mInputWrapper}>
                        <div className="flex-1">
                            <BaseInput placeholder="Agrega un nuevo jugador..." value={newPlayer} onChange={onNewPlayerChange}
                                // Funcion para agregar players con enter
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        onAddPlayer();
                                    }
                                }}
                            />
                        </div>

                        <div>
                            <button className={PlayerSelectorStyles.mButtonAddPlayer} onClick={onAddPlayer}>
                                <PlusIcon className="h-6 w-6 text-foreground" />
                            </button>
                        </div>
                    </div>

                    {
                        // TODO Hace falta agregar un boton para editar el nombre
                        // TODO Como posible mejor se podrian hacer los elementos arrastrables para reordenar la lista
                        playersList.length > 0 ?
                            <div className={PlayerSelectorStyles.mPlayerListContainer}>
                                {
                                    playersList.map((player) =>
                                        <Checkbox labelClassName="p-4" key={player.tempId} id={player.tempId} label={player.alias} checkboxPosition="end" checked={player.selected} onChange={(selected)=>onPlayerSelectionChange(player.tempId, selected)}></Checkbox>
                                    )
                                }
                            </div>
                        :
                            // Mensaje para cuando no hay players agreados
                            <div className={PlayerSelectorStyles.mEmptyPlayerList}>
                                <h1>No hay players aun</h1>
                                <span>Agrega algunos para comenzar el torneo</span>
                            </div>
                    }
                </div>
            )}
        </>
    );
}