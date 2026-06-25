# Versionado del Prompt

Este documento describe la estrategia de control de versiones y el ciclo de vida del prompt principal `prompts/agents-first-documentation-review.prompt.md`.

---

## Estrategia de Versionado Semántico (SemVer)

Dado que este repositorio provee un prompt como "producto", cualquier cambio o mejora en sus instrucciones se versiona bajo el estándar de **Versionado Semántico (vMAJOR.MINOR.PATCH)**:

### 1. MAJOR (`vX.0.0`)
Cambios significativos o estructurales que alteran de forma drástica el comportamiento esperado de la IA o la estructura final requerida.
* **Ejemplos:**
  * Modificación obligatoria del nombre del archivo raíz (ej. cambiar `AGENTS.md` por otro).
  * Reestructuración obligatoria de la carpeta `docs/agent/` agregando o quitando archivos requeridos por defecto.
  * Cambios drásticos en las reglas de seguridad o permisos del agente.

### 2. MINOR (`v0.Y.0`)
Adición de nuevas funcionalidades, directrices opcionales o compatibilidades de stacks sin alterar la estructura obligatoria base.
* **Ejemplos:**
  * Añadir instrucciones específicas opcionales para un nuevo framework o tipo de repositorio (ej. microservicios frontend).
  * Agregar una nueva plantilla opcional de skill bajo `skills/`.
  * Incorporar un nuevo archivo de instrucciones específicas como `GEMINI.md` o `.github/copilot-instructions.md` dentro de la lista de opcionales.

### 3. PATCH (`v0.0.Z`)
Mejoras menores de legibilidad, correcciones de traducción, orden de palabras, formato Markdown o correcciones ortográficas que no cambian las reglas lógicas del prompt.
* **Ejemplos:**
  * Corregir errores tipográficos en las instrucciones.
  * Mejorar la sintaxis de los bloques de código o de las listas para que los parsers de Markdown los interpreten mejor.
  * Ajustes de redacción para mejorar la precisión del entendimiento por parte de modelos específicos de LLM.

---

## Proceso para Registrar Cambios

Cada vez que realices una modificación al prompt principal:

1. **Actualiza el prompt:** Aplica los cambios directamente en `prompts/agents-first-documentation-review.prompt.md`.
2. **Incrementa la versión:** De acuerdo con la guía SemVer de arriba, determina el nuevo número de versión.
3. **Registra en el CHANGELOG:** Abre `docs/CHANGELOG.md` y documenta los cambios de la nueva versión.
4. **Crea un Tag en Git (Opcional):** Si el repositorio está alojado en GitHub/GitLab, se recomienda crear un tag de git que coincida con la versión (ej. `git tag -a v1.0.0 -m "Versión 1.0.0"`).
