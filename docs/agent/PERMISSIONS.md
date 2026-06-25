# Permisos del Agente (PERMISSIONS.md)

Este documento especifica qué acciones puede realizar un agente de IA en este repositorio y cuáles requieren aprobación humana explícita.

---

## 1. Permisos de Modificación (Escritura Libre)

El agente tiene permiso para modificar o crear los siguientes archivos como parte de tareas ordinarias (ej. corrección de estilo, adición de ejemplos, actualización de documentación):

- **Prompts:** `prompts/agents-first-documentation-review.prompt.md`
- **Ejemplos:** `examples/usage-example.md`
- **Sitio GitHub Pages:** `index.html`, `index.css`, `index.js`
- **Historial de Cambios:** `docs/CHANGELOG.md`
- **Instrucciones del Agente:** `AGENTS.md` y `docs/agent/*`
- **Guías de Agente:** `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`
- **Políticas y Directrices:** `PROMPT_VERSIONING.md`

*Nota: Cualquier modificación a estos archivos debe registrarse con su respectivo cambio de versión en `CHANGELOG.md`.*

---

## 2. Acciones que Requieren Aprobación Humana

Las siguientes acciones son de alta sensibilidad y **nunca** deben realizarse sin la confirmación explícita del usuario:

- **Modificación de Licencia:** Cambiar, renombrar o eliminar el archivo `LICENSE`.
- **Incremento de Versión Mayor (Breaking Change):** Modificar el prompt de forma que rompa la compatibilidad con la estructura documental actual (requiere aprobación del usuario para la nueva estructura propuesta).
- **Eliminación de Archivos Core:** Eliminar carpetas principales como `prompts/`, `examples/` o `docs/`.
- **Modificación de Tags o Commits:** Ejecutar comandos de Git destructivos como `git push --force` o borrar tags de versiones en el repositorio remoto.
