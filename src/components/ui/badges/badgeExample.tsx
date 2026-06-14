import { Badge } from "./Badge";
import { PositionBadge } from "./PositionBadge";

export function BadgeExample() {
    return (
        <div className="flex flex-col gap-2 bg-background p-8 min-h-dvh text-foreground">
            === BADGES ===
            <div className="flex gap-2 text-foreground">
                Pill
                <Badge variant="default" appearance="pill">
                    ronda 2 de 5
                </Badge>
                <Badge variant="progress" appearance="pill">
                    en progreso
                </Badge>
                <Badge variant="pending" appearance="pill">
                    pendiente
                </Badge>
                <Badge variant="completed" appearance="pill">
                    completado
                </Badge>
            </div>
            
            <div className="flex gap-2 text-foreground">
                Chip
                <Badge variant="default" appearance="chip">
                    General
                </Badge>
                <Badge variant="progress" appearance="chip">
                    en progreso
                </Badge>
                <Badge variant="pending" appearance="chip">
                    pendiente
                </Badge>
                <Badge variant="completed" appearance="chip">
                    completado
                </Badge>
            </div>

            <div className="flex gap-2 text-foreground">
                Inline
                <Badge variant="default" appearance="inline">
                    General
                </Badge>
                <Badge variant="pending" appearance="inline">
                    pendiente
                </Badge>
                <Badge variant="progress" appearance="inline">
                    en progreso
                </Badge>
                <Badge variant="completed" appearance="inline">
                    completado
                </Badge>
            </div>

            === POSITION BADGE ===
            <div className="flex gap-2">
                <PositionBadge shape="square" variant="progress">1</PositionBadge>
                
                <PositionBadge shape="square" variant="pending">2</PositionBadge>
                
                <PositionBadge shape="square" variant="completed">3</PositionBadge>
                
                <PositionBadge shape="square" variant="default">4</PositionBadge>
            </div>

            <div className="flex gap-2">
                <PositionBadge shape="round" variant="progress">1</PositionBadge>
                
                <PositionBadge shape="round" variant="pending">2</PositionBadge>
                
                <PositionBadge shape="round" variant="completed">3</PositionBadge>
                
                <PositionBadge shape="round" variant="default">4</PositionBadge>
            </div>
        </div>
    );
}