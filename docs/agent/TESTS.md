# Pruebas y Validación (TESTS.md)

Al ser este un repositorio únicamente de documentación y prompts, no cuenta con un motor de ejecución de código o suites de pruebas automatizadas (como Jest, PyTest, etc.). Sin embargo, cada cambio debe validarse mediante los siguientes pasos de análisis estático y lógica.

---

## 1. Verificación de Enlaces e Integridad de Archivos

Cualquier cambio en la estructura documental de este repositorio debe validar que todos los enlaces internos funcionen correctamente:
- Comprueba que todos los enlaces en Markdown que utilizan el esquema `file://` o rutas relativas apunten a archivos existentes.
- **Ruta de verificación crítica:**
  - Los enlaces desde `AGENTS.md` a `docs/agent/*` y `README.md`.
  - Los enlaces desde `README.md` a `prompts/agents-first-documentation-review.prompt.md`, `examples/usage-example.md`, `docs/prompt-versioning.md` y `CHANGELOG.md`.

---

## 2. Validación de Formato Markdown

Asegúrate de que el formato Markdown esté limpio y sea compatible con cualquier parser estándar:
- Revisa que todos los bloques de código (triple backtick) estén cerrados correctamente.
- Comprueba la jerarquía de títulos (`#`, `##`, `###`).
- Verifica que no existan listas ordenadas o desordenadas con niveles de indentación inconsistentes que rompan la visualización.

---

## 3. Consistencia Semántica y de Versión

Antes de dar por concluido un cambio en los prompts:
- Comprueba que la versión del prompt descrita en `CHANGELOG.md` coincide con las reglas de versionado de `docs/prompt-versioning.md`.
- Asegura que no se hayan introducido referencias prohibidas al archivo `GPT.md`.
