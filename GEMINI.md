# Guía para Gemini

Esta guía resume cómo usar Gemini con el estándar **agents-first** de este repositorio sin depender de tecnologías o estructuras específicas.

## Uso Recomendado

1. Copia el prompt maestro desde `prompts/agents-first-documentation-review.prompt.md`.
2. Entrégalo a Gemini junto con acceso al repositorio objetivo.
3. Pide que use su ventana de contexto para leer la documentación existente antes de proponer cambios.
4. Solicita un plan explícito antes de modificar o eliminar archivos.

## Instrucciones Útiles

- Pide que separe evidencia local de inferencias.
- Solicita tablas de clasificación documental cuando el repositorio tenga muchos archivos Markdown.
- Para monorepos, pide que detecte servicios, paquetes o módulos antes de escribir documentos globales.
- Si existen diagramas o contratos, puede proponer Mermaid o tablas, pero solo con información verificable.

## Buenas Prácticas

- No uses plantillas de stack antes de que Gemini detecte el stack real.
- Mantén los documentos generados breves en la entrada y detallados en `docs/agent/`.
- Revisa manualmente cualquier propuesta de eliminación o reestructuración sensible.

## Resultado Esperado

Gemini debería producir una estructura documental navegable, segura y mantenible, con comandos reales y pendientes explícitos cuando falte información.
