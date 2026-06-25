# Guía de Instrucciones para Gemini (GEMINI.md)

Este documento describe las directrices optimizadas para **Google Gemini** (Gemini 1.5 Pro/Flash, Gemini 3.5, etc.) enfocadas en maximizar su capacidad de razonamiento de largo contexto y capacidades multi-modales bajo el estándar *agents-first*.

---

## 1. Aprovechamiento del Contexto Extendido

Gemini cuenta con una de las ventanas de contexto más amplias del sector.
- **Lectura Profunda:** Cuando sea necesario, lee archivos completos en lugar de fragmentos pequeños para entender dependencias complejas de extremo a extremo.
- **Búsqueda Semántica:** Utiliza herramientas de búsqueda global (`grep_search` o búsqueda semántica) antes de plantear un cambio arquitectónico para garantizar que no existan dependencias ocultas.

---

## 2. Razonamiento y Modos de Planificación

- **Modo Planificador:** Dedica un paso explícito al inicio para estructurar el `implementation_plan.md` si la tarea implica múltiples componentes.
- **Expresiones Matemáticas y Algoritmos:** Si el proyecto incluye lógica de IA, gráficos, visualizaciones o algoritmos, puedes describir fórmulas utilizando formato LaTeX estándar (`\(...\)` para inline o `\[...\]` para display blocks).

---

## 3. Trabajo con Diagramas y Contratos

- **Diagramas de Flujo (Mermaid):** Utiliza diagramas Mermaid estructurados en la documentación para representar flujos de datos complejos y arquitecturas de bases de datos.
- **Validación del Schema:** Si se modifica una ruta de API o un modelo de datos, actualiza y valida inmediatamente los archivos en `docs/agent/DATA_SCHEMA.md`.

---

## 4. Estilo de Respuesta

- **Estructura Clara:** Organiza las explicaciones con títulos jerárquicos y tablas comparativas para facilitar la lectura al programador humano.
- **Links Activos:** Incluye siempre enlaces clickeables a archivos locales mediante formato `file:///` con rutas absolutas tal como se indica en `AGENTS.md`.
