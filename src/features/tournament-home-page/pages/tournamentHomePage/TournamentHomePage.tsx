import { ListTodoIcon, LockIcon, PlusIcon } from "../../../../assets/icons";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { EmptyState } from "../../components/emptyState/EmptyState";
import { TournamentCard } from "../../components/tournamentCards";
import type { CardProp } from "../../components/tournamentCards/TournamentCard.type";
import { getLastSync } from "./TournamentHomePage.types";
import { TournamentStyles } from "./TournamentHomePage.style";
import { createId } from "../../../../domain/utils/createId";

export function TournamentHomePage() {
    // TODO Cambiar la lista por elementos guardados
    const tournaments: CardProp[] = [
        {
            id: createId(),
            status: "progress",
            tournamentName: "Copa Mundial de Fútbol 2026",
            playersCount: 832,
            roundsCount: 7,
            lastSync: "2026-06-17T14:30:00Z"
        },
        {
            id: createId(),
            status: "pending",
            tournamentName: "Torneo de Ajedrez Regional",
            playersCount: 64,
            roundsCount: 6,
            lastSync: "2026-06-16T09:15:00Z"
        },
        {
            id: createId(),
            status: "completed",
            tournamentName: "Liga de Verano - Padel",
            playersCount: 128,
            roundsCount: 5,
            lastSync: "2026-06-10T18:45:00Z"
        }
    ];

    return (
        <div className={TournamentStyles.mainContainer}>
            {
                tournaments.length === 0 ? <EmptyState></EmptyState> :
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
                                    status={tournament.status}
                                    tournamentName={tournament.tournamentName}
                                    playersCount={tournament.playersCount}
                                    roundsCount={tournament.roundsCount}
                                    lastSync={getLastSync(tournament.lastSync)}>
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
                                <Button variant="primary">
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