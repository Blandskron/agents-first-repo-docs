# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo. El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

---

## [1.3.0] - 2026-06-25

### Añadido
- **Set Agents-First Completo:** Creación de `docs/agent/RUNBOOK.md`, `docs/agent/SECURITY.md`, `docs/agent/CONFIG.md` y `docs/agent/DATA_SCHEMA.md` para que este repositorio funcione como ejemplo profesional completo.
- **Catálogo de Skills:** Creación de `docs/skills/README.md` y nuevas skills de ejemplo en `skills/documentation-audit/` y `skills/github-pages-release/`.

### Modificado
- **Arquitectura Documental Modelo:** Movimiento de `CLAUDE.md`, `GEMINI.md` y `PROMPT_VERSIONING.md` a la raíz para reflejar mejor archivos de entrada y políticas principales del estándar.
- **Historial Documental:** Movimiento del changelog a `docs/CHANGELOG.md` y actualización de enlaces internos.
- **Sitio GitHub Pages:** Actualización del árbol interactivo y rutas cargadas por la página para reflejar la nueva estructura.

## [1.2.0] - 2026-06-25

### Añadido
- **Prompt Universal Reforzado:** Reestructuración del prompt maestro en fases claras de auditoría, plan, implementación, limpieza segura, página documental opcional y validación final.
- **Orientación GitHub Pages:** Mejora del README y del sitio estático para presentar el repositorio como producto copiable y desplegable.

### Modificado
- **Agnosticismo Multi-Agente:** Ajuste de guías para Claude, Gemini y Copilot para evitar supuestos de stack, versiones de modelos o comandos no verificados.
- **Documentación Interna:** Actualización de `AGENTS.md`, `README.md`, `docs/agent/TESTS.md` y `skills/prompt-update/SKILL.md` para alinear el repositorio con su propio estándar.
- **Página Estática:** Corrección de textos principales, versión visible y enlace del repositorio en GitHub.

## [1.1.0] - 2026-06-25

### Añadido
- **Plantillas Específicas de Modelo:** Creación de `docs/agent/CLAUDE.md`, `docs/agent/GEMINI.md` y `.github/copilot-instructions.md` como guías y estándares para integraciones de modelos.
- **Portal Web Interactivo:** Implementación de `index.html`, `index.css` e `index.js` en la raíz para servir la documentación mediante GitHub Pages con diseño premium, responsivo y Glassmorphism.
- **Auto-Documentación de Agentes:** Creación de `AGENTS.md`, `docs/agent/PERMISSIONS.md` y `docs/agent/TESTS.md` para auto-auditar este repositorio con el estándar.
- **Habilidad de Actualización (Skills):** Creación del primer skill especializado `skills/prompt-update/SKILL.md` para automatizar las actualizaciones seguras y versionamiento del prompt.

### Modificado
- **Limpieza de Referencias Obsoletas:** Eliminadas referencias a instrucciones antiguas y no presentes en la estructura actual.

## [1.0.0] - 2026-06-25

### Añadido
- **Prompt Base (`prompts/agents-first-documentation-review.prompt.md`):** Primera versión estable del prompt con enfoque *agents-first* y *human-friendly*.
- **Instrucciones Obligatorias:** Estructura guiada para auditar, clasificar y limpiar archivos de documentación obsoleta (archivos de instrucciones antiguos, etc.).
- **Esquema de Documentación Generada:** Definición de plantillas y contenidos mínimos para `AGENTS.md` y la carpeta `docs/agent/` (`PERMISSIONS.md`, `RUNBOOK.md`, `TESTS.md`, `SECURITY.md`, `DATA_SCHEMA.md`, `CONFIG.md`).
- **Uso de Skills:** Soporte inicial para archivos en `skills/*/SKILL.md`.
- **Ejemplo de Uso (`examples/usage-example.md`):** Ejemplo paso a paso de auditoría y reestructuración en un proyecto Node.js/Express.
- **Políticas de Versionado (`docs/prompt-versioning.md`):** Reglas para cambios de versión SemVer aplicadas al prompt.
- **Licencia:** Archivo de licencia MIT.
