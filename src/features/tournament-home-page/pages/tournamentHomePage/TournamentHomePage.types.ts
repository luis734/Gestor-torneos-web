import type { ScoringSystem } from "../../../../domain/types/ScoringSystem";
import type { TournamentType } from "../../../../domain/types/TournamentType";

export type TorunamentProps = {
    tournamentName: string;
    players: string[];
    roundsCount: number;
    tournamentType: TournamentType;
    scoringSystem: ScoringSystem;
};

export function getLastSync(isoString: string) {
    const date = new Date(isoString);
    const now = new Date();
    
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
  
    const pad = (n: number) => n.toString().padStart(2, "0");
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
  
    // Hoy y Ayer con hora
    if (diffDays === 0) {
      return `Hoy, ${hours}:${minutes}`;
    }
    
    if (diffDays === 1) {
      return `Ayer, ${hours}:${minutes}`;
    }
  
    // Resto de casos
    if (diffDays < 7) {
      return `Hace ${diffDays} día${diffDays > 1 ? "s" : ""}`;
    }
    
    if (diffWeeks < 4) {
      return `Hace ${diffWeeks} semana${diffWeeks > 1 ? "s" : ""}`;
    }
    
    if (diffMonths < 12) {
      return `Hace ${diffMonths} mes${diffMonths > 1 ? "es" : ""}`;
    }
  
    return `Hace ${diffYears} año${diffYears > 1 ? "s" : ""}`;
}