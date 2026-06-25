# GitHub Copilot System Instructions (.github/copilot-instructions.md)

Este archivo provee directrices de contexto para **GitHub Copilot** (en VS Code, Cursor, o Copilot Chat) para optimizar la generación de código e inline suggestions dentro del repositorio.

---

## 1. Reglas Generales de Generación de Código

- **No Generar Boilerplate Innecesario:** Copilot debe enfocarse en autocompletar la función o bloque lógico actual sin crear clases, envoltorios o helpers genéricos.
- **Mantener el Estilo del Proyecto:** Observa el código circundante y adapta la indentación, uso de comillas, nombres de variables (camelCase, snake_case) y convenciones antes de sugerir código.

---

## 2. Convenciones de Codificación y Comentarios

- **Comentarios Cortos:** Evita comentarios extensos sobre lo obvio. El código autodocumentado es prioritario.
- **Evitar Código Muerto:** No sugieras bloques de código comentados o anotaciones `TODO` sin justificación.
- **Modern JavaScript:** Prefiere destructuración, arrow functions y sintaxis moderna (ES6+), manteniendo la compatibilidad con el runtime definido en `package.json`.

---

## 3. Pruebas y Validación Local

- Cuando generes un nuevo test o modifiques una función, asegúrate de que el test mantenga consistencia con los esquemas actuales definidos en `docs/agent/DATA_SCHEMA.md`.
- No alteres ni elimines aserciones existentes en los archivos de prueba para "hacer pasar" tests que fallan tras una modificación.
