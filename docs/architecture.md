# Arquitectura

El proyecto utiliza una arquitectura modular orientada por capas.

El objetivo es mantener:

- separación clara de responsabilidades
- bajo acoplamiento
- escalabilidad
- facilidad de mantenimiento

---

# Estructura General

```text
src/
├── domain/       # Lógica de negocio (sin React)
├── features/     # Módulos de UI por caso de uso
├── store/        # Estado global
└── test/         # Pruebas unitarias del dominio
```

---

# Capa `domain/`

El dominio contiene todo lo necesario para funcionar de forma independiente de la interfaz.

```text
domain/
├── factories/        # Construcción de entidades
├── models/           # Entidades del sistema
├── services/         # Lógica de negocio
│   ├── rounds/       # Generación y gestión de rondas
│   ├── scheduler/    # Emparejamiento y calendario
│   ├── standings/    # Cálculo de puntuaciones
│   └── tournament/   # Ciclo de vida del torneo
├── types/            # Tipos, estados y contratos
│   └── inputs/       # DTOs de creación de entidades
├── utils/            # Utilidades puras (IDs, timestamps)
└── validators/       # Reglas de validación del dominio
    ├── player/
    ├── rounds/
    ├── shared/
    ├── table/
    └── tournament/
```

---

# Capa `features/`

Cada feature agrupa la UI y los tipos específicos de un caso de uso.

```text
features/
└── create-tournament/
    └── types/        # Tipos del formulario de creación
```

Las features consumen servicios y validadores de `domain/`, pero no contienen lógica de negocio.

---

# Capa `store/`

Estado global de la aplicación. Actualmente en construcción.

```text
store/
└── tournamentStore.ts
```

---

# Capa `test/`

Pruebas unitarias organizadas en paralelo al dominio.

```text
test/
├── helpers/          # Datos de prueba reutilizables
├── services/         # Tests de domain/services/
└── validators/       # Tests de domain/validators/
```

---

# Responsabilidades

## models/

Representa entidades y estructuras del dominio.

Ubicación: `src/domain/models/`

## types/

Tipos auxiliares, estados y contratos internos.

Ubicación: `src/domain/types/`

## factories/

Creación e inicialización de entidades. Son funciones puras encargadas únicamente de construir entidades válidas del dominio. No contienen lógica de negocio ni persistencia.

Ubicación: `src/domain/factories/`

## services/

Lógica principal del dominio.

Ubicación: `src/domain/services/`

| Subcarpeta | Responsabilidad |
|------------|-----------------|
| `rounds/` | Generación de rondas, registro de resultados, actualización de estado |
| `scheduler/` | Emparejamiento de jugadores y generación de calendario |
| `standings/` | Cálculo de puntuaciones y clasificación |
| `tournament/` | Configuración, avance de rondas y estado del torneo |

## validators/

Reglas y validaciones del dominio.

Ubicación: `src/domain/validators/`

## store/

Estado global de la aplicación.

Ubicación: `src/store/`

## features/

Renderizado e interacción UI organizados por caso de uso.

Ubicación: `src/features/`

## utils/

Funciones auxiliares puras.

Ubicación: `src/domain/utils/`

---

# Flujo general

```text
UI (features/)
 ↓
store/
 ↓
domain/services/
 ↓
domain/models/
```

La lógica de negocio debe permanecer en `domain/` y no vivir en componentes React.

Los validadores se invocan desde servicios o desde la UI antes de ejecutar operaciones.

---

# Persistencia

Actualmente el proyecto no tiene persistencia implementada. El store global (`tournamentStore`) está preparado como punto de entrada para el estado, con la intención de migrar posteriormente a Local Storage o a una API remota.
