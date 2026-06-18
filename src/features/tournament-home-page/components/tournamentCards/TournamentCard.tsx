import { ChevronRightIcon, PlayIcon, TrashIcon, UsersIcon } from "../../../../assets/icons";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import type { CardProp } from "./TournamentCard.type";

export function TournamentCard({status="pending", tournamentName, playersCount, roundsCount, lastSync}:CardProp) {
    const borderStatus = {
        progress: "border-warning/80",
        completed: "border-success/80",
        pending: "border-brand/80",
    }
    
    const buttonText = {
        progress: "Continuar",
        completed: "Ver resultados",
        pending: "Iniciar",    
    }
    
    const statusText = {
        progress: "En progreso",
        completed: "Completado",
        pending: "Pendiente",    
    }


    return (
        <div className={`flex flex-col gap-2 w-sm bg-surface p-3 rounded-[10px] border-l-[8px] ${borderStatus[status]}`}>
            <section id="status" className="flex items-center justify-between w-full">
                <div>
                    <Badge variant={status}>{statusText[status]}</Badge>
                </div>

                <Button variant="ghost" size="sm">
                    <TrashIcon className="text-danger h-4 w-4"></TrashIcon>  
                </Button>
            </section>

            <section id="title" className="flex items-center text-body text-foreground">
                {tournamentName ?? "Friday Night Championship"}
            </section>

            <section id="tournamentInfo" className="flex gap-3 text-caption text-border-strong">
                <span id="players" className="flex gap-1 items-center">
                    <UsersIcon className="w-[10px] h-[10px]" /> {playersCount ?? 6} jug.
                </span>

                <span id="rounds">
                    {roundsCount && roundsCount > 0 ? roundsCount + " rondas" : "Sin iniciar"}
                </span>

                <span id="lastUpdate">
                    {lastSync ?? "Hace 1 semana"}
                </span>
            </section>

            <Button size="sm" variant="secondary">
                <div className="flex gap-2 items-center">
                    {
                        status === "progress" && <PlayIcon className="h-4 w-4"/>
                    }
                    <span className="flex-1 text-left">
                        {buttonText[status]}
                    </span>
                    <ChevronRightIcon className="self-right h-3 w-3"/>
                </div>
            </Button>
        </div>
    );
}