# Validadores

Los validadores encapsulan las reglas de negocio para verificar que los datos sean correctos antes de ejecutar operaciones.

Todos viven en `src/domain/validators/` y retornan un `ValidationResult`:

```typescript
{ isValid: boolean; errors: string[] }
```

---

## validatePlayerAlias

Ubicación: `src/domain/validators/player/validatePlayerAlias.ts`

Valida:

* alias vacío
* longitud mínima
* longitud máxima

Input:

* `alias: string`

---

## validateTournamentName

Ubicación: `src/domain/validators/tournament/validateTournamentName.ts`

Valida:

* nombre vacío
* longitud máxima

Input:

* `name: string`

---

## validateTournamentSettings

Ubicación: `src/domain/validators/tournament/validateTournamentSettings.ts`

Valida:

* `tournamentType` requerido
* `scoringSystem` requerido
* `roundsCount` válido (si está definido)
* `tablesCount` válido (si está definido)
* `playersPerTable` válido (si está definido)

Input:

* `settings: TournamentSettings`

---

## validateTablePlayers

Ubicación: `src/domain/validators/table/validateTablePlayers.ts`

Valida:

* mesa vacía
* IDs vacíos
* jugadores duplicados
* cantidad correcta de jugadores

Input:

* `playerIds: string[]`
* `playersPerTable: number`

---

## validateTableResults

Ubicación: `src/domain/validators/table/validateTableResults.ts`

Valida:

* resultados vacíos
* cantidad correcta de resultados
* jugadores duplicados
* posiciones duplicadas
* posiciones inválidas
* posiciones consecutivas
* jugadores pertenecientes a la mesa

Input:

* `results: TableResult[]`
* `playerIds: string[]`

---

## validateTournamentPlayers

Ubicación: `src/domain/validators/tournament/validateTournamentPlayers.ts`

Valida:

* torneo vacío
* mínimo de jugadores
* IDs duplicados
* aliases duplicados
* divisibilidad de jugadores entre mesas

Input:

* `players: Player[]`
* `playersPerTable: number`

---

## validateRoundTables

Ubicación: `src/domain/validators/rounds/validateRoundTables.ts`

Valida:

* ronda vacía
* reutiliza `validateTablePlayers`
* jugadores repetidos entre mesas
* mesas duplicadas

Input:

* `tables: Table[]`
* `playersPerTable: number`
