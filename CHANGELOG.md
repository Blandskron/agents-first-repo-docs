# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo. El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-06-25

### Añadido
- **Plantillas Específicas de Modelo:** Creación de `docs/agent/CLAUDE.md`, `docs/agent/GEMINI.md` y `.github/copilot-instructions.md` como guías y estándares para integraciones de modelos.
- **Portal Web Interactivo:** Implementación de `index.html`, `index.css` e `index.js` en la raíz para servir la documentación mediante GitHub Pages con diseño premium, responsivo y Glassmorphism.
- **Auto-Documentación de Agentes:** Creación de `AGENTS.md`, `docs/agent/PERMISSIONS.md` y `docs/agent/TESTS.md` para auto-auditar este repositorio con el estándar.
- **Habilidad de Actualización (Skills):** Creación del primer skill especializado `skills/prompt-update/SKILL.md` para automatizar las actualizaciones seguras y versionamiento del prompt.

### Modificado
- **Limpieza de Referencias Obsoletas:** Eliminadas de forma completa y segura todas las referencias implícitas al archivo deprecado `GPT.md`.

## [1.0.0] - 2026-06-25

### Añadido
- **Prompt Base (`prompts/agents-first-documentation-review.prompt.md`):** Primera versión estable del prompt con enfoque *agents-first* y *human-friendly*.
- **Instrucciones Obligatorias:** Estructura guiada para auditar, clasificar y limpiar archivos de documentación obsoleta (archivos de instrucciones antiguos, etc.).
- **Esquema de Documentación Generada:** Definición de plantillas y contenidos mínimos para `AGENTS.md` y la carpeta `docs/agent/` (`PERMISSIONS.md`, `RUNBOOK.md`, `TESTS.md`, `SECURITY.md`, `DATA_SCHEMA.md`, `CONFIG.md`).
- **Uso de Skills:** Soporte inicial para archivos en `skills/*/SKILL.md`.
- **Ejemplo de Uso (`examples/usage-example.md`):** Ejemplo paso a paso de auditoría y reestructuración en un proyecto Node.js/Express.
- **Políticas de Versionado (`docs/prompt-versioning.md`):** Reglas para cambios de versión SemVer aplicadas al prompt.
- **Licencia:** Archivo de licencia MIT.
