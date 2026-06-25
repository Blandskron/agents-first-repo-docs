---
name: documentation-audit
description: Auditar consistencia documental, enlaces, estructura agents-first y seguridad antes de cerrar cambios.
---

# Skill: Documentation Audit

Usa esta skill cuando se modifiquen documentos, prompts, ejemplos, skills o la página estática del repositorio.

## Entradas

- Archivos Markdown modificados.
- Archivos estáticos modificados.
- Objetivo del cambio.

## Procedimiento

1. Revisa que `AGENTS.md` siga siendo breve, operativo y enlazado.
2. Verifica que `README.md` siga orientado a humanos.
3. Comprueba que el prompt maestro no asuma stack ni agente específico.
4. Revisa que `docs/agent/` conserve el set documental completo del ejemplo profesional.
5. Confirma que las rutas mencionadas existan.
6. Busca secretos, tokens o datos reales en ejemplos.
7. Verifica que cualquier cambio relevante esté registrado en `docs/CHANGELOG.md`.

## Validaciones

- Ejecutar validación de enlaces Markdown.
- Revisar bloques de código Markdown.
- Ejecutar `node --check index.js` si cambió JavaScript.
- Servir el sitio por HTTP local si cambiaron `index.html`, `index.css` o `index.js`.

## Resultado Esperado

Un resumen que indique:

- Documentos revisados.
- Problemas encontrados.
- Correcciones aplicadas.
- Validaciones ejecutadas.
