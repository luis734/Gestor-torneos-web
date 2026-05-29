# 🏆 Tournament Manager Web

Sistema de gestión de torneos desarrollado con React + TypeScript.

> [!WARNING]
> Proyecto actualmente en construcción.

Este proyecto nació principalmente como una forma de aprender React, TypeScript y arquitectura frontend/backend orientada a dominio, por lo que probablemente existan decisiones mejorables, refactors pendientes y funcionalidades incompletas.

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

* Modelos
* Servicios
* Validadores
* Factories
* Tipos
* Lógica de negocio

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
└── features/
    └── tournament/
        ├── factories/
        ├── models/
        ├── services/
        ├── types/
        ├── utils/
        └── validators/
```
# 🧪 Testing

Actualmente se utilizan pruebas unitarias con Vitest.

Ejemplo:

```text
calculateStandings.test.ts
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

El proyecto ya incluye documentación interna:

```text
docs/
├── architecture.md
├── models.md
├── validators.md
└── README.md
```

---

# 🧩 Estado actual

Actualmente el proyecto:

* NO utiliza base de datos
* NO tiene backend real
* se enfoca principalmente en la lógica del dominio
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

* [ ] Mejorar separación de capas
* [ ] Introducir manejo de estado global
* [ ] Modularizar lógica de torneo

## Torneos

* [ ] Swiss
* [ ] Round Robin
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
