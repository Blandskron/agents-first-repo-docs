# Instrucciones de Agente (AGENTS.md)

Este repositorio contiene un conjunto de prompts profesionales reutilizables para auditar, limpiar y reconstruir la documentación de cualquier proyecto de software con un enfoque *agents-first* y *human-friendly*.

## Propósito del Repositorio
Servir como biblioteca y estándar de prompts y ejemplos para la reestructuración documental de repositorios de software, asegurando que estén listos para interactuar con agentes de IA autónomos.

## Stack Tecnológico Detectado
- **Tipo de Repositorio:** Solo documentación y prompts (Markdown).
- **Control de Versiones:** Git.
- **Formato principal:** Markdown (`.prompt.md`, `.md`).

## Rutas Prioritarias de Lectura
1. **Instrucciones de Lectura y Uso:** [README.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/README.md)
2. **Prompt Principal:** [agents-first-documentation-review.prompt.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/prompts/agents-first-documentation-review.prompt.md)
3. **Estrategia de Versionado:** [prompt-versioning.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/prompt-versioning.md)
4. **Ejemplo de Uso:** [usage-example.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/examples/usage-example.md)

## Archivos de Guía del Agente
- **Permisos del Agente:** [PERMISSIONS.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/agent/PERMISSIONS.md)
- **Validación y Pruebas:** [TESTS.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/agent/TESTS.md)
- **Guía de Claude:** [CLAUDE.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/agent/CLAUDE.md)
- **Guía de Gemini:** [GEMINI.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/docs/agent/GEMINI.md)
- **GitHub Copilot:** [copilot-instructions.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/.github/copilot-instructions.md)

## Habilidades Disponibles (Skills)
- **Actualización del Prompt:** [SKILL.md](file:///c:/Users/BlandskronNotebook/Documents/blandskron/prompt/agents-first-repo-docs/skills/prompt-update/SKILL.md)

## Reglas Operativas
1. **Sin Stack Asumido en el Prompt:** El prompt principal debe ser completamente agnóstico en cuanto a frameworks o lenguajes al inicio de su ejecución.
2. **Sin referencias a GPT.md:** Nunca menciones ni asumas la existencia del archivo `GPT.md`.
3. **Registro de Cambios:** Cualquier modificación a los prompts o la documentación debe quedar registrada de forma semántica en `CHANGELOG.md` siguiendo las reglas en `prompt-versioning.md`.

## Validación antes de cerrar una tarea
Antes de finalizar tu trabajo en este repositorio, debes:
1. Verificar que todos los enlaces internos de Markdown funcionen correctamente.
2. Comprobar que no existan errores de renderizado de Markdown.
3. Asegurar que las modificaciones cumplan con el versionado semántico indicado en `CHANGELOG.md`.
