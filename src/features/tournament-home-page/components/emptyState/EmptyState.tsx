import { PlusIcon, TrophyIcon } from "../../../../assets/icons";
import { Button } from "../../../../components/ui/button";
import { EmptyStateStyles } from "./EmptyState.styles";
import { type EmptyStateProps } from "./EmptyStat.type";

export function EmptyState({onClick}:EmptyStateProps) {
    return (
        <div className={EmptyStateStyles.container}>
            <div className={EmptyStateStyles.iconContainer}>
                <TrophyIcon className="text-brand/80"/>
            </div>

            <div id="textContent">
                <h1 className={EmptyStateStyles.title}>Sin torneos activos</h1>
                <p className={EmptyStateStyles.message}>Empieza tu noche de juego. Crea un torneo Round Robin, agrega jugadores y registra puntos en segundos.</p>
            </div>

            <div className="flex flex-col w-sm">
                <Button onClick={onClick}>
                    <div className={EmptyStateStyles.buttonContainer}>
                        <PlusIcon className="h-4 w-4"/> Crear torneo
                    </div>
                </Button>
            </div>
            
            {/* TODO Tarjetas de torneos recientes */}
            <div id="recientes">
            </div>
        </div>
    );
}