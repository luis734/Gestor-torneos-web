# Gestión de Torneos

Sistema para administrar torneos con soporte para:

- múltiples tipos de torneo (PROXIMAMENTE)
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
- lógica desacoplada

---

# Stack

- React
- TypeScript
- Arquitectura modular

---

# Estructura General

```text
src/
├── feature/
│   └── tournament/
│       ├── models/
│       ├── types/
│       ├── factories/
│       ├── services/
│       ├── validators/
│       ├── hooks/
│       ├── components/
│       ├── utils/
│       ├── store/
│       └── pages/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── constants/
│
├── app/
│   ├── router/
│   ├── providers/
│   └── layouts/
│
├── main.tsx
└── vite-env.d.ts
docs/
├── README.md
├── architecture.md
├── validators.md
├── models.md
├── flows.md
└── setup.md
```