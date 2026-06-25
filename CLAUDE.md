# Guía para Claude

Esta guía resume cómo usar Claude con el estándar **agents-first** de este repositorio sin acoplar el prompt a un stack específico.

## Uso Recomendado

1. Copia el contenido completo de `prompts/agents-first-documentation-review.prompt.md`.
2. Pégalo en Claude dentro del contexto del repositorio objetivo.
3. Pide primero una auditoría de solo lectura.
4. Revisa el plan de cambios antes de autorizar eliminaciones o cambios sensibles.

## Instrucciones Útiles

- Pide respuestas estructuradas por fases: auditoría, plan, implementación, validación y resumen.
- Solicita que cite archivos y rutas concretas cuando justifique cambios.
- Indica que no debe asumir stack, comandos ni arquitectura sin evidencia local.
- Para tareas grandes, pide que divida el trabajo en lotes verificables.

## Buenas Prácticas

- Mantén el prompt maestro intacto y agrega contexto específico del repo objetivo después del prompt.
- Si Claude propone una eliminación documental, exige que explique qué información se migró antes.
- Si no hay comandos reales de test o build, debe declararlo en vez de inventarlos.

## Resultado Esperado

Claude debería entregar una documentación con `AGENTS.md` como entrada para agentes, `README.md` para humanos y documentos especializados solo cuando aporten valor real.
