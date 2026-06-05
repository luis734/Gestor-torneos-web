# Gestión de Torneos

Sistema para administrar torneos con soporte para:

- múltiples tipos de torneo (en progreso)
- generación de rondas
- gestión de mesas
- registro de resultados
- cálculo de puntuaciones

---

# Objetivo

Crear una aplicación simple, clara y escalable para gestionar torneos.

El enfoque principal del proyecto es:

- simplicidad
- mantenimiento fácil
- modelos claros
- lógica desacoplada de la UI

---

# Stack

- React 19
- TypeScript
- Vite
- Vitest
- Arquitectura por capas (`domain` + `features`)

---

# Estructura General

```text
src/
├── domain/                    # Lógica de negocio pura
│   ├── factories/
│   ├── models/
│   ├── services/
│   │   ├── rounds/
│   │   ├── scheduler/
│   │   ├── standings/
│   │   └── tournament/
│   ├── types/
│   │   └── inputs/
│   ├── utils/
│   └── validators/
│       ├── player/
│       ├── rounds/
│       ├── shared/
│       ├── table/
│       └── tournament/
│
├── features/                  # Casos de uso de UI
│   └── create-tournament/
│       └── types/
│
├── store/
│   └── tournamentStore.ts
│
├── test/
│   ├── helpers/
│   ├── services/
│   └── validators/
│
├── assets/
├── App.tsx
└── main.tsx

docs/
├── README.md
├── architecture.md
├── models.md
└── validators.md
```

---

# Documentación

| Archivo | Contenido |
|---------|-----------|
| [architecture.md](./architecture.md) | Capas, responsabilidades y flujo de datos |
| [models.md](./models.md) | Entidades del dominio y sus relaciones |
| [validators.md](./validators.md) | Validadores disponibles y sus reglas |

---

# Convenciones de nombres

- **`domain/`**: código sin dependencias de React. Contiene toda la lógica reutilizable del torneo.
- **`features/`**: módulos de UI organizados por caso de uso (ej. `create-tournament`).
- **`store/`**: estado global de la aplicación.
- **`test/`**: pruebas unitarias del dominio, organizadas en paralelo a `domain/services` y `domain/validators`.

Los archivos dentro de `domain/` usan nombres en inglés y convención camelCase para funciones (`calculateStandings`, `validatePlayerAlias`).
