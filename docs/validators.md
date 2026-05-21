# Validators actuales

## validatePlayerAlias

Valida:

* alias vacío
* longitud mínima
* longitud máxima

Input:

* alias: string

---

## validateTournamentName

Valida:

* nombre vacío
* longitud máxima

Input:

* name: string

---

## validateTournamentSettings

Valida:

* tournamentType requerido
* scoringSystem requerido
* roundsMode requerido
* roundsCount válido
* tablesCount válido
* playersPerTable válido

Input:

* settings: TournamentSettings

---

## validateTablePlayers

Valida:

* mesa vacía
* IDs vacíos
* jugadores duplicados
* cantidad correcta de jugadores

Input:

* playerIds: string[]
* playersPerTable: number

---

## validateTableResults

Valida:

* resultados vacíos
* cantidad correcta de resultados
* jugadores duplicados
* posiciones duplicadas
* posiciones inválidas
* posiciones consecutivas
* jugadores pertenecientes a la mesa

Input:

* results: TableResult[]
* playerIds: string[]

---

## validateTournamentPlayers

Valida:

* torneo vacío
* mínimo de jugadores
* IDs duplicados
* aliases duplicados
* divisibilidad de jugadores entre mesas

Input:

* players: Player[]
* playersPerTable: number

---

## validateRoundTables

Valida:

* ronda vacía
* reutiliza validateTablePlayers
* jugadores repetidos entre mesas
* mesas duplicadas

Input:

* tables: Table[]
* playersPerTable: number
