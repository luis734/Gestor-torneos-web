# Modelos

Los modelos representan el dominio principal del sistema de torneos.

La lógica del sistema no vive en los modelos.
Los modelos únicamente representan estructura y relaciones.

---

# Relación General

```text
Tournament
 ├── players
 ├── rounds
 └── settings

Round
 └── tables

Table
 ├── playerIds
 └── results
```

---

# Tournament

Entidad principal del sistema, responsable de:

- Controlar el estado general del torneo
- Almacenar jugadores
- Almacenar rondas
- Contener configuración global

Es el punto central de toda la lógica del sistema.

---

# Player

Representa un participante del torneo, actualmente contiene únicamente información básica del jugador.

---

# Round

Representa una ronda del torneo, agrupa las mesas jugadas en gases específicas del torneo.
El sistema permite generación:

- Automática
- Manual

---

# Table

Representa una mesa o partida dentro de una ronda, responsable de:

- Agrupar jugadores
- Almacenar resultados
- Controlar estados de juego

Las mesas utilizan referencias por ID para evitar duplicación de datos.

---

# TableResult

Representa el resultado indivudual de los jugadores dentro de una mesa, solo almacena id del resultados en bruto, la puntuación y el standing se calculan externamente.

---

# TournamentSettings

Define el comportamiento general del torneo, controla:

- Tipo de torneo
- Sistema de puntuación
- Configuración de rondas
- Configuración de mesas

Es el modelo más importante para la extensibilidad futura.

---

# Estados y tipos

El sistema utiliza tipos simples para:
- Estados de torneo
- Estados de mesa
- Formatos de torneo
- Sistemas de puntuación
- Modos de rondas