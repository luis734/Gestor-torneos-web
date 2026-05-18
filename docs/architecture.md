# Arquitectura

El proyecto utiliza una arquitectura modular orientada por features.

El objetivo es mantener:

- separación clara de responsabilidades
- bajo acoplamiento
- escalabilidad
- facilidad de mantenimiento

---

# Estructura General

```text
src/
├── app/
├── features/
└── shared/
```

---

# Organización por Features

Cada feature contiene todo lo necesario para funcionar de forma independiente.

```text
feature/
├── models/
├── types/
├── factories/
├── services/
├── validators/
├── store/
├── hooks/
├── components/
└── utils/
```

---

# Responsabilidades

## models/

Representa entidades y estructuras del dominio.

## types/

Tipos auxiliares, estados y contratos internos.

## factories/

Creación e inicialización de entidades.

## services/

Lógica principal del dominio.

## validators/

Reglas y validaciones del dominio.

## store/

Estado global de la feature

## hooks

Lógica reutilizable basada en React.

## components/

Renderizado e interacción UI.

## utils/

Funciones auxiliares puras.

---

# Flujo general

```text
UI
 ↓
hooks
 ↓
store
 ↓
services
 ↓
models
```

La lógica de negocio debe permanecer fuera de los componentes.

---

# Persistencia

Actualmente la persistencia se realiza mediante Local Storage, la arquitecutra está preparada para migrar posteriormente a persistencia remota.