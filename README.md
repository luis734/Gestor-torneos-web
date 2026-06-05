# 🏆 Tournament Manager Web

Sistema de gestión de torneos desarrollado con React + TypeScript.

> [!WARNING]
> Proyecto actualmente en construcción.

Este proyecto nació principalmente como una forma de aprender React, TypeScript y arquitectura frontend orientada a dominio, por lo que probablemente existan decisiones mejorables, refactors pendientes y funcionalidades incompletas.

Aun así, el objetivo principal es construir una base sólida, extensible y mantenible para soportar distintos tipos de torneos y sistemas de puntuación en el futuro.

---

# ✨ Objetivos del proyecto

El sistema busca soportar:

* ✅ Gestión de jugadores
* ✅ Generación de rondas
* ✅ Generación de mesas
* ✅ Cálculo de standings
* ✅ Validaciones de dominio
* 🚧 Distintos tipos de torneo
* 🚧 Distintos sistemas de puntuación
* 🚧 Persistencia de datos
* 🚧 Backend/API
* 🚧 Interfaz completa de administración
* 🚧 Historial de torneos
* 🚧 Exportación de resultados

---

# 🧠 Filosofía del proyecto

El enfoque principal es separar claramente:

* **Dominio** (`domain/`): modelos, servicios, validadores, factories y tipos
* **Features** (`features/`): módulos de UI acoplados a casos de uso concretos
* **Store** (`store/`): estado global de la aplicación
* **Tests** (`test/`): pruebas unitarias del dominio

La idea es evitar mezclar lógica compleja dentro de componentes React y mantener el dominio del torneo desacoplado de la UI.

---

# 🛠️ Stack actual

## Frontend

* React 19
* TypeScript
* Vite

## Testing

* Vitest

## Calidad de código

* ESLint

---

# 📁 Arquitectura actual

```text
src/
├── domain/                    # Lógica de negocio (independiente de React)
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
├── features/                  # Módulos de UI por caso de uso
│   └── create-tournament/
│       └── types/
│
├── store/                     # Estado global (en construcción)
│   └── tournamentStore.ts
│
├── test/                      # Pruebas unitarias
│   ├── helpers/
│   ├── services/
│   └── validators/
│
├── assets/
├── App.tsx
└── main.tsx
```

---

# 🧪 Testing

Las pruebas unitarias viven en `src/test/` y cubren servicios y validadores del dominio.

```text
src/test/
├── helpers/       # Factories de datos para tests
├── services/      # Tests de servicios (standings, rondas, torneo...)
└── validators/    # Tests de validadores
```

Ejemplo:

```text
src/test/services/calculateStandings.test.ts
```

El objetivo es validar:

* standings
* tie-breaks
* generación de rondas
* edge cases
* validaciones

---

# 🚀 Scripts disponibles

## Desarrollo

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Ejecutar tests

```bash
npm run test
```

---

## Ejecutar tests una sola vez

```bash
npm run test:run
```

---

## Linter

```bash
npm run lint
```

---

# 📚 Documentación adicional

El proyecto incluye documentación interna en `docs/`:

```text
docs/
├── README.md
├── architecture.md
├── models.md
└── validators.md
```

---

# 🧩 Estado actual

Actualmente el proyecto:

* NO utiliza base de datos
* NO tiene backend real
* se enfoca principalmente en la lógica del dominio (`src/domain/`)
* tiene una feature de UI inicial (`create-tournament`)
* el store global (`tournamentStore`) aún no está implementado
* está pensado para evolucionar gradualmente

La prioridad inicial fue aprender:

* React
* TypeScript
* arquitectura
* testing
* separación de responsabilidades

antes de intentar construir un sistema completo de producción.

---

# 🎯 Objetivos futuros

## Arquitectura

* [X] Mejorar separación de capas
* [X] Extraer lógica de negocio a `domain/`
* [ ] Implementar manejo de estado global (`store/`)
* [ ] Completar features de UI

## Torneos

* [X] Round Robin
* [ ] Swiss
* [ ] Eliminación directa
* [ ] Multiplayer formats

## Puntuación

* [ ] Sistemas configurables
* [ ] Tie-breaks avanzados
* [ ] Desempates personalizados

## Persistencia

* [ ] Backend
* [ ] API REST
* [ ] Base de datos
* [ ] Autenticación

## UX/UI

* [ ] Dashboard
* [ ] Administración de torneos
* [ ] Visualización de standings
* [ ] Gestión de rondas en tiempo real

---

# ⚠️ Disclaimer

Este proyecto forma parte de mi proceso de aprendizaje.

Seguramente existan:

* malas prácticas
* decisiones mejorables
* refactors pendientes
* edge cases sin cubrir

Pero precisamente el objetivo es aprender iterando y mejorando la arquitectura conforme el proyecto evoluciona 🚀

---

# 📄 Licencia

Proyecto personal de aprendizaje.
