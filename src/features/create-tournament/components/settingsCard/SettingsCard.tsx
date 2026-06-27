import { BaseInput } from "../../../../components/ui/input";
import { InfoIcon } from "../../../../assets/icons";
import { SettingsCadrStyles } from "./SettingsCard.styles";
import type { SettingsCardProps } from "./SettingsCard.types";

export function SettingsCard({tournamentName, onTournamentNameChange, tableSize, onTableSizeChange, rounds, onRoundsChange}:SettingsCardProps) {
    // ? TODO Luego se agregan los controles para el tipo de torneo y sistema de puntos

    return (
        <div id="mainContainer" className={SettingsCadrStyles.mainContainer}>
            <h2 className="text-body-large font-bold">Detalles del torneo</h2>

            <BaseInput label="Nombre del torneo *" placeholder="Ej. Torneo Pitero" onChange={onTournamentNameChange} value={tournamentName}></BaseInput>

            <div className={SettingsCadrStyles.inputsContainer}>
                <div className={SettingsCadrStyles.inputNumber}>
                    <BaseInput variant="number" label="Jugadores / Mesa" onChange={onTableSizeChange} value={tableSize}></BaseInput>
                </div>
                <div className={SettingsCadrStyles.inputNumber}>
                    <BaseInput variant="number" label="Rondas" onChange={onRoundsChange} value={rounds}></BaseInput>
                </div>
            </div>

            {/* TODO Agregar los select con los distintos tipos de torneo y sistema de puntuacion */}
            <div className={SettingsCadrStyles.containerInfo}>
                <div>
                    <InfoIcon className="h-5 w-4 text-info"/>
                </div>
                <div className="flex flex-col">
                    <span className={SettingsCadrStyles.infoTitle} title="Unicos modos por ahora">Round Robin • Position Points</span>
                    <span className="text-caption">Los jugadores obtienen puntos igual a su posición en la mesa (1st = 1pt, 2nd = 2pt, etc.). El menor puntaje gana.</span>
                </div>
            </div>
        </div>
    )
}