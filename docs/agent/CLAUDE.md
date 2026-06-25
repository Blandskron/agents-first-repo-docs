# Guía de Instrucciones para Claude (CLAUDE.md)

Este documento contiene un conjunto de directrices optimizadas para **Anthropic Claude** (Claude 3, 3.5 Sonnet, etc.) en tareas de desarrollo y mantenimiento dentro del estándar *agents-first*.

---

## 1. Uso de Bloques XML para Razonamiento

Claude responde excepcionalmente bien a etiquetas estructuradas tipo XML. Utiliza siempre la siguiente estructura al planificar y razonar tareas complejas:

```xml
<thinking>
1. Analizar el código existente para X.
2. Identificar posibles efectos secundarios.
3. Planificar la modificación de forma segura.
</thinking>
```

- **Paso de Razonamiento:** Describe tu análisis mental antes de escribir o modificar archivos.
- **Paso de Validación:** Coloca tus planes y pruebas preliminares dentro de bloques XML específicos si la tarea es compleja.

---

## 2. Reglas de Codificación y TypeScript/JS

Si el repositorio utiliza JavaScript o TypeScript:
- **Estilo de Importación:** Prefiere importaciones de ES modules (`import ... from '...'`) sobre CommonJS (`require`) a menos que el proyecto use este último de forma estricta.
- **Tipado:** No uses `any` en TypeScript. Define interfaces claras para todas las respuestas de API y estados.
- **Formateo:** Respeta la configuración local del formateador del proyecto (Prettier, ESLint). Ejecuta siempre `npm run lint` o `eslint .` antes de concluir.

---

## 3. Comandos de Utilidad

Siempre que trabajes en un entorno Node:
- **Instalación:** `npm install`
- **Iniciar servidor dev:** `npm run dev` o `npm start`
- **Correr Tests:** `npm test` o `npm run test`
- **Correr Linter:** `npm run lint`

---

## 4. Formato de Respuestas

- **Concisión:** Evita introducciones largas o explicaciones repetitivas del código. Ve directo a la solución.
- **Markdown:** Utiliza enlaces a archivos en formato absoluto/relativo tal como se describe en `AGENTS.md`.
- **Explicación de Cambios:** En tu resumen final, lista los archivos modificados con una breve justificación técnica.
