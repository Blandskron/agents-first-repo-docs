---
name: prompt-update
description: Procedimiento paso a paso para actualizar el prompt principal, aplicar versionado SemVer y documentar los cambios en el changelog.
---

# Habilidad: Actualización y Versionado del Prompt (prompt-update)

Esta habilidad debe activarse cada vez que un agente de IA necesite realizar una modificación en el prompt principal localizado en [agents-first-documentation-review.prompt.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/prompts/agents-first-documentation-review.prompt.md).

---

## 1. Disparador (Trigger)
Esta habilidad se activa cuando el usuario solicita:
- Cambiar, añadir o remover reglas en el prompt de auditoría documental.
- Corregir errores ortográficos, de redacción o formato en el prompt.
- Refinar los entregables esperados en el prompt.

---

## 2. Procedimiento de Ejecución

### Paso 1: Modificación del Prompt
Realiza los cambios solicitados por el usuario directamente en el archivo [agents-first-documentation-review.prompt.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/prompts/agents-first-documentation-review.prompt.md). 

> [!WARNING]
> No realices cambios cosméticos innecesarios. Las modificaciones deben enfocarse únicamente en corregir errores o implementar directrices explícitas del usuario.

### Paso 2: Determinación del Tipo de Versión
Consulta la política en [prompt-versioning.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/prompt-versioning.md) para clasificar el cambio en una de las tres categorías de versionado semántico:
- **PATCH (x.y.Z):** Corrección de textos, orden y formato.
- **MINOR (x.Y.0):** Adición de reglas u opciones que no rompen la compatibilidad.
- **MAJOR (X.0.0):** Cambios de estructura obligatoria o reglas restrictivas incompatibles.

### Paso 3: Registro en el Historial
Abre [CHANGELOG.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/CHANGELOG.md) y añade una nueva sección para la versión calculada:
- Inserta la fecha actual en formato `YYYY-MM-DD`.
- Divide los cambios bajo los títulos `### Añadido` o `### Modificado` según corresponda.

### Paso 4: Validación y Pruebas
Sigue los pasos de verificación especificados en [TESTS.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/agent/TESTS.md):
- Verifica que no queden referencias a archivos obsoletos (como `GPT.md`).
- Valida que todos los enlaces en Markdown sigan activos y funcionando correctamente.
- Comprueba que la visualización en el archivo `index.html` sea correcta si los cambios del prompt se leen dinámicamente.
