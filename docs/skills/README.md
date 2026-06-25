# Catálogo de Skills de Ejemplo

Este directorio documenta ejemplos de skills que un repositorio agents-first profesional puede incluir cuando existen tareas repetibles.

Las skills reales viven en `skills/<nombre>/SKILL.md`. Este catálogo explica cuándo usar cada una y qué patrón representa.

## Skills Incluidas en Este Repositorio

| Skill | Ubicación | Propósito |
| --- | --- | --- |
| Prompt Update | `skills/prompt-update/SKILL.md` | Actualizar el prompt maestro con versionado SemVer. |
| Documentation Audit | `skills/documentation-audit/SKILL.md` | Auditar consistencia documental antes de cerrar cambios. |
| GitHub Pages Release | `skills/github-pages-release/SKILL.md` | Validar que la página estática esté lista para publicación. |

## Criterios para Crear una Skill

Crea una skill cuando:

- La tarea se repite con suficiente frecuencia.
- Hay un flujo claro de pasos.
- La tarea tiene validaciones propias.
- El resultado esperado puede documentarse de forma accionable.

No crees una skill cuando:

- La tarea es única.
- La documentación normal basta.
- Solo agrega una capa de abstracción sin mejorar la operación.

## Patrón Recomendado

Cada `SKILL.md` debe incluir:

- Nombre y descripción.
- Cuándo usarla.
- Entradas necesarias.
- Procedimiento paso a paso.
- Validaciones.
- Resultado esperado.
