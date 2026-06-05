# Modelos

Los modelos representan el dominio principal del sistema de torneos.

La lógica del sistema no vive en los modelos.
Los modelos únicamente representan estructura y relaciones.

Ubicación: `src/domain/models/`

---

# Relación General

```text
Tournament
 ├── players: Player[]
 ├── rounds: Round[]
 └── settings: TournamentSettings

Round
 └── tables: Table[]

Table
 ├── playerIds: string[]
 └── results: TableResult[]
```

---

# Tournament

Entidad principal del sistema, responsable de:

- Controlar el estado general del torneo
- Almacenar jugadores
- Almacenar rondas
- Contener configuración global

Es el punto central de toda la lógica del sistema.

Archivo: `src/domain/models/Tournament.ts`

---

# Player

Representa un participante del torneo. Actualmente contiene únicamente información básica del jugador.

Archivo: `src/domain/models/Player.ts`

---

# Round

Representa una ronda del torneo. Agrupa las mesas jugadas en fases específicas del torneo.

El sistema permite generación:

- Automática (vía `generateTournamentSchedule` + `generateTournamentRounds`)
- Manual

Archivo: `src/domain/models/Round.ts`

---

# Table

Representa una mesa o partida dentro de una ronda, responsable de:

- Agrupar jugadores
- Almacenar resultados
- Controlar estados de juego

Las mesas utilizan referencias por ID para evitar duplicación de datos.

Archivo: `src/domain/models/Table.ts`

---

# TableResult

Representa el resultado individual de un jugador dentro de una mesa. Solo almacena el ID del jugador y el resultado en bruto; la puntuación y el standing se calculan externamente.

Archivo: `src/domain/models/TableResult.ts`

---

# TournamentSettings

Define el comportamiento general del torneo. Controla:

- Tipo de torneo (`tournamentType`)
- Sistema de puntuación (`scoringSystem`)
- Configuración de rondas (`roundsCount`, opcional)
- Configuración de mesas (`tablesCount`, `playersPerTable`, opcionales)

Es el modelo más importante para la extensibilidad futura.

Archivo: `src/domain/models/TournamentSettings.ts`

---

# Estados y tipos

El sistema utiliza tipos simples definidos en `src/domain/types/`:

| Tipo | Valores |
|------|---------|
| `TournamentStatus` | `draft`, `active`, `completed` |
| `RoundStatus` | `pending`, `in_progress`, `completed` |
| `TableStatus` | `pending`, `completed` |
| `TournamentType` | `rotation`, `round_robin`, `single_elimination` |
| `ScoringSystem` | `position_based`, `wins`, `points` |

Los DTOs de creación de entidades viven en `src/domain/types/inputs/`.
