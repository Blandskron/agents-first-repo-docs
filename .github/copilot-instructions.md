# GitHub Copilot Instructions

Este repositorio contiene un prompt maestro, documentación Markdown y una página estática sin build system.

## Contexto del Proyecto

- El producto principal es `prompts/agents-first-documentation-review.prompt.md`.
- El README está orientado a humanos.
- `AGENTS.md` está orientado a agentes.
- `index.html`, `index.css` e `index.js` presentan el proyecto en GitHub Pages.

## Reglas de Generación

- No asumas frameworks, paquetes ni comandos que no existan en este repositorio.
- Mantén el prompt maestro universal y agnóstico.
- Evita duplicar grandes bloques de contenido entre Markdown y JavaScript.
- Si actualizas el prompt o reglas del estándar, actualiza también `CHANGELOG.md`.
- Conserva HTML, CSS y JS como archivos estáticos simples.

## Validación

- Revisa enlaces Markdown internos.
- Comprueba que no haya rutas a archivos inexistentes.
- Mantén los bloques de código Markdown correctamente cerrados.
- No sugieras cambios en licencia, historial Git o estructura mayor sin aprobación humana.
