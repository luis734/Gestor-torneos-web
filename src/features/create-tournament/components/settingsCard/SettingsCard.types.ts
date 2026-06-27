export type SettingsCardProps = {
    tournamentName: string;
    onTournamentNameChange: (name: string) => void;

    tableSize: string;
    onTableSizeChange: (value: string) => void;

    rounds: string;
    onRoundsChange: (value: string) => void;
}