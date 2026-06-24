import { ChevronRightIcon, PlayIcon, TrashIcon, UsersIcon } from "../../../../assets/icons";
import { Badge } from "../../../../components/ui/badge";
import type { BadgeVariant } from "../../../../components/ui/badge/Badge.types";
import { Button } from "../../../../components/ui/button";
import type { TournamentStatus } from "../../../../domain/types/TournamentStatus";
import type { CardProp } from "./TournamentCard.type";

export function TournamentCard({onClick,tournament: {id, status="draft", name, players, rounds, updatedAt}}:CardProp) {
    const borderStatus = {
        draft: "border-warning/80",
        completed: "border-success/80",
        active: "border-brand/80",
    }
    
    const buttonText = {
        draft: "Continuar",
        completed: "Ver resultados",
        active: "Iniciar",    
    }
    
    const statusText = {
        draft: "En progreso",
        completed: "Completado",
        active: "Pendiente",    
    }

    const BadgeStatus: Record<TournamentStatus,BadgeVariant> = {
        draft: "progress",
        completed: "completed",
        active: "pending"
    }

    function handleClick() {
        onClick(id);
    }


    return (
        <div className={`flex flex-col gap-2 sm:w-sm w-2xs bg-surface p-3 rounded-[10px] border-l-[8px] ${borderStatus[status]}`}>
            <section id="status" className="flex items-center justify-between w-full">
                <div>
                    <Badge variant={BadgeStatus[status]}>{statusText[status]}</Badge>
                </div>

                <Button variant="ghost" size="sm">
                    <TrashIcon className="text-danger h-4 w-4"></TrashIcon>  
                </Button>
            </section>

            <section id="title" className="flex items-center text-body text-foreground">
                {name ?? "Friday Night Championship"}
            </section>

            <section id="tournamentInfo" className="flex gap-3 text-caption text-border-strong">
                <span id="players" className="flex gap-1 items-center">
                    <UsersIcon className="w-[10px] h-[10px]" /> {players.length ?? 6} jug.
                </span>

                <span id="rounds">
                    {rounds.length && rounds.length > 0 ? rounds.length + " rondas" : "Sin iniciar"}
                </span>

                <span id="lastUpdate">
                    {updatedAt ?? "Hace 1 semana"}
                </span>
            </section>

            <Button size="sm" variant="secondary" onClick={handleClick}>
                <div className="flex gap-2 items-center">
                    {
                        status === "draft" && <PlayIcon className="h-4 w-4"/>
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