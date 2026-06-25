# Ejemplo de Uso del Prompt de Auditoría Documental

Este ejemplo ilustra cómo aplicar el prompt de auditoría documental (`prompts/agents-first-documentation-review.prompt.md`) en un repositorio real.

---

## Escenario de Ejemplo: Proyecto "Legacy API"

Imagina que tienes un proyecto Node.js/Express heredado con la siguiente estructura de archivos desordenada y confusa:

```txt
legacy-api/
├── package.json
├── index.js
├── legacy-instructions.md  <-- (Obsoleto, contiene instrucciones viejas)
├── docs/
│   ├── old-install.txt    <-- (Instrucciones desactualizadas de 2021)
│   ├── api-endpoints.md   <-- (Documentación de API útil pero incompleta)
│   └── database-v1.png
├── README.md              <-- (README genérico creado por default)
└── .env.example
```

---

## Paso 1: Carga del Prompt

1. Abre tu agente de IA de codificación (como Claude, Gemini, ChatGPT, o tu herramienta local de CLI).
2. Copia todo el contenido del archivo `prompts/agents-first-documentation-review.prompt.md`.
3. Pégalo en el chat de inicio o como instrucción de sistema para tu agente.

---

## Paso 2: Análisis y Auditoría de la IA

Al ejecutar el prompt, la IA iniciará su proceso de análisis. El agente no realizará cambios inmediatos, sino que presentará un reporte de auditoría como el siguiente:

### Transcripción Simulada de la Auditoría

> **IA:** He analizado el repositorio `legacy-api`. A continuación presento mi reporte de auditoría:
> 
> * **Stack Tecnológico Detectado:** Node.js (v18+), Express, npm, variables de entorno en `.env.example`.
> * **Clasificación de Documentación:**
>   * **Vigente y útil:** `docs/api-endpoints.md` (contiene contratos de rutas reales).
>   * **Duplicada/Obsoleta:** `docs/old-install.txt` (los comandos de instalación actuales están en `package.json`).
>   * **Deprecada:** `legacy-instructions.md` (será eliminada, pero rescataremos las reglas de formateo de logs).
> * **Plan de Acción:**
>   1. Crear `AGENTS.md` para guiar a futuros agentes de codificación.
>   2. Migrar la información válida de `docs/api-endpoints.md` a `docs/agent/DATA_SCHEMA.md`.
>   3. Migrar las reglas de logs de `legacy-instructions.md` a `docs/agent/CONFIG.md`.
>   4. Eliminar `legacy-instructions.md` y `docs/old-install.txt`.
>   5. Actualizar `README.md` con instrucciones claras y humanas.

---

## Paso 3: Ejecución de la IA

Una vez aprobado el plan, la IA generará y reestructurará los archivos correspondientes.

### Estructura Final del Repositorio

Después de la ejecución del prompt, tu repositorio quedará limpio y ordenado de la siguiente manera:

```txt
legacy-api/
├── package.json
├── index.js
├── README.md              <-- (Actualizado y human-friendly)
├── AGENTS.md              <-- (Nuevo: Guía de navegación para IAs)
├── docs/
│   ├── agent/
│   │   ├── PERMISSIONS.md <-- (Qué puede modificar la IA y qué no)
│   │   ├── RUNBOOK.md     <-- (Cómo levantar Express localmente)
│   │   ├── TESTS.md       <-- (Comandos npm test)
│   │   ├── CONFIG.md      <-- (Configuración de .env y variables)
│   │   └── DATA_SCHEMA.md <-- (Esquema de API y base de datos)
│   └── database-v1.png
└── .env.example
```

---

## Ejemplo del Archivo `AGENTS.md` Creado

Este es un fragmento de cómo se ve el archivo de entrada para la IA que genera el prompt:

```markdown
# Instrucciones de Agente (AGENTS.md)

Este repositorio contiene un servicio API REST en Node.js.

## Stack Tecnológico
- **Runtime:** Node.js
- **Framework:** Express.js
- **Gestor de Paquetes:** npm

## Comandos Críticos
- Levantar servidor local: `npm run dev`
- Ejecutar tests unitarios: `npm test`

## Rutas Clave de Lectura
- Configuración de Variables de Entorno: [CONFIG.md](file:///docs/agent/CONFIG.md)
- Esquemas de Datos y API: [DATA_SCHEMA.md](file:///docs/agent/DATA_SCHEMA.md)
- Permisos del Agente: [PERMISSIONS.md](file:///docs/agent/PERMISSIONS.md)

## Reglas de Validación
Antes de terminar cualquier tarea de codificación, debes:
1. Ejecutar `npm run lint` y arreglar advertencias.
2. Ejecutar `npm test` y verificar que el 100% de los tests pasen.
```

---

## Beneficios Obtenidos
1. **Limpieza:** Se eliminó documentación antigua que inducía a error (`old-install.txt` y `legacy-instructions.md`).
2. **Contexto Inmediato:** El próximo agente que entre al proyecto sabrá exactamente qué comandos correr (`npm run dev`) y dónde leer las configuraciones sin perder tiempo analizando todo el código.
3. **Consistencia Humano-Máquina:** Los humanos pueden seguir utilizando el `README.md` simplificado, mientras que las herramientas automatizadas consumen la carpeta `docs/agent/`.
