import { PlusIcon, TrophyIcon } from "../../../../assets/icons";
import { Button } from "../../../../components/ui/button";

export function EmptyState() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center w-sm tex-center">
            <div className="flex items-center justify-center rounded-full bg-brand/20 h-15 w-15 border-2 border-dashed border-brand">
                <TrophyIcon className="text-brand/80"/>
            </div>

            <div id="textContent">
                <h1 className="flex justify-center text-h2 text-foreground font-bold">Sin torneos activos</h1>
                <p className="text-center text-body text-foreground-muted">Empieza tu noche de juego. Crea un torneo Round Robin, agrega jugadores y registra puntos en segundos.</p>
            </div>

            <Button>
                <div className="flex gap-2 justify-center items-center">
                    <PlusIcon className="h-4 w-4"/> Crear torneo
                </div>
            </Button>
            
            {/* TODO Tarjetas de torneos recientes */}
            <div id="recientes">
            </div>
        </div>
    );
}