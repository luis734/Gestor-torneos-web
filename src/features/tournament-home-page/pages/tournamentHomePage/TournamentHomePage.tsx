import { ListTodoIcon, LockIcon, PlusIcon } from "../../../../assets/icons";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { EmptyState } from "../../components/emptyState/EmptyState";
import { TournamentCard } from "../../components/tournamentCards";
import { TournamentStyles } from "./TournamentHomePage.style";
import { TournamentStorageService } from "../../../../services/tournament-storage/TournamentStorageService";
import type { Tournament } from "../../../../domain/models/Tournament";
import { useTournamentStore } from "../../../../store/tournamentStore";
import { TournamentManager } from "../../../../services/tournament-manager/TournamentManager";

export function TournamentHomePage() {
    // Definimos el lo necesario para poder manejar los datos del storage
    const storageService = new TournamentStorageService();
    const setTournament = useTournamentStore(
        state => state.setTournament
    );
    const manager = new TournamentManager(storageService, setTournament);

    // Obtenemos la lista de elementos guardados desde el storage
    const tournaments: Tournament[] = storageService.getAll();

    function createNewTournament(): void {
        console.log("Crear nuevo torneo");
    }

    function obtenerTorneo(id: string) : void {
        console.log("Abrir torneo");
        const result = manager.openTournament(id);
        console.log("Result: ",result);
    }

    // localStorage.setItem("tournament:v1", JSON.stringify({version: 1, tournaments:[{id: "123", status: "progress", tournamentName: "Torneo Pitero", playersCount: 6, roundsCount: 10, lastSync: "2026-06-17T14:30:00Z"}], lastOpenedTournamentId: null}))
    

    return (
        <div className={TournamentStyles.mainContainer}>
            {
                tournaments.length === 0 ? <EmptyState onClick={createNewTournament}></EmptyState> :
                <div id="listaTorneos" className={TournamentStyles.listConainer}>
                    <section className={TournamentStyles.listContainer}>
                        <div className={TournamentStyles.listInfo}>
                            <div className={TournamentStyles.listText}>
                                <span className={TournamentStyles.listTitle}>Mis Torneos</span>
                                <span className={TournamentStyles.listMessage}>Selecciona un torneo para continuar</span>
                            </div>

                            <div>
                                <Badge>
                                    <div className={TournamentStyles.listBadge}>
                                        <ListTodoIcon className="h-3 w-3" />
                                        <span className="text-caption">{tournaments.length}/3</span>
                                    </div>
                                </Badge>
                            </div>
                        </div>

                        {
                            tournaments.map((tournament) =>
                                <TournamentCard
                                    key={tournament.id}
                                    tournament={tournament}
                                    onClick={obtenerTorneo}>
                                </TournamentCard>
                            )
                        }
                    </section>

                    <section className={TournamentStyles.buttonSection}>
                        {
                            tournaments.length >= 3 ?
                                <div className={TournamentStyles.buttonLimited}>
                                    <Button variant="ghost" disabled>
                                        <div className={TournamentStyles.buttonLimitedContent}>
                                            <LockIcon className="h-3 w-3" />
                                            <span className={TournamentStyles.buttonLimitedSpan}>Limite alcanzado - 3 torneos max.</span>
                                        </div>
                                    </Button>
                                </div>
                            :
                                <Button variant="primary" onClick={createNewTournament}>
                                    <div className={TournamentStyles.buttonNewTournament}>
                                        <PlusIcon className="h-3 w-3" />
                                        <span>Crear torneo</span>
                                    </div>
                                </Button>
                        }
                    </section>
                </div>
            }
        </div>
    );
}