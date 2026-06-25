// Interactive Logic - Agents First Repo Docs

// 1. Data Store containing fallback strings for offline use (double-click file://)
const docsDatabase = {
    "agents-md": {
        title: "AGENTS.md",
        status: "Requerido (Root)",
        description: "El punto de entrada principal para cualquier agente autónomo que trabaje en el repositorio. Debe ser conciso y guiar al agente a través del proyecto.",
        code: `# Instrucciones de Agente (AGENTS.md)

Este repositorio contiene [breve descripción del proyecto].

## Stack Tecnológico
- **Lenguaje/Runtime:** [ej. Node.js v18]
- **Framework:** [ej. Express / Next.js]
- **Base de Datos:** [ej. PostgreSQL]

## Rutas Prioritarias de Lectura
1. Permisos del Agente: [PERMISSIONS.md](file:///docs/agent/PERMISSIONS.md)
2. Runbook del Proyecto: [RUNBOOK.md](file:///docs/agent/RUNBOOK.md)
3. Estrategia de Pruebas: [TESTS.md](file:///docs/agent/TESTS.md)

## Reglas Operativas
1. No modifiques credenciales ni expongas secretos.
2. Ejecuta siempre la suite de tests antes de confirmar cambios.
3. Solicita aprobación humana para modificaciones de arquitectura.`
    },
    "permissions-md": {
        title: "PERMISSIONS.md",
        status: "Requerido",
        description: "Especifica qué directorios y archivos tiene permitido modificar el agente de IA de forma autónoma y cuáles requieren validación humana.",
        code: `# Permisos del Agente (PERMISSIONS.md)

## 1. Permisos de Modificación Libre
El agente puede editar de forma autónoma:
- Archivos en la carpeta \`src/\`
- Rutas públicas y controladores

## 2. Aprobación Humana Requerida
Requiere aprobación antes de confirmar:
- Archivos de configuración de CI/CD (\`.github/workflows/*\`)
- Modificaciones en la raíz del proyecto (\`package.json\`, \`tsconfig.json\`)
- Eliminación de archivos históricos o tests`
    },
    "runbook-md": {
        title: "RUNBOOK.md",
        status: "Recomendado",
        description: "Describe paso a paso los procesos operativos como levantar el entorno de desarrollo local, limpiar caché o resolver problemas típicos.",
        code: `# Runbook Operativo (RUNBOOK.md)

## Levantamiento del Entorno Local
1. Instala dependencias: \`npm install\`
2. Configura entorno: \`cp .env.example .env\`
3. Levanta base de datos en Docker: \`docker-compose up -d\`
4. Inicia servidor de desarrollo: \`npm run dev\`

## Resolución de Problemas Comunes
- **Error de Conexión a DB:** Ejecuta \`docker ps\` para verificar que el contenedor esté activo. Si no, reinícialo con \`docker restart db\`.`
    },
    "tests-md": {
        title: "TESTS.md",
        status: "Requerido",
        description: "Explica la estrategia de pruebas del proyecto, los comandos de ejecución y las reglas de aprobación de la suite.",
        code: `# Estrategia de Pruebas (TESTS.md)

## Ejecución de Tests
- Todos los tests: \`npm test\`
- Tests específicos: \`npm test -- src/user\`
- Cobertura de código: \`npm run test:coverage\`

## Criterios de Aceptación
1. Todos los tests existentes deben pasar sin excepciones.
2. Está estrictamente prohibido comentar o eliminar aserciones de prueba para pasar la suite.`
    },
    "security-md": {
        title: "SECURITY.md",
        status: "Opcional",
        description: "Detalla el tratamiento de secretos, variables de entorno, encriptación y los flujos protegidos del proyecto.",
        code: `# Políticas de Seguridad (SECURITY.md)

## Manejo de Secretos
- Los secretos de entorno NUNCA deben escribirse directamente en código. Usa siempre \`process.env\`.
- Todo valor confidencial debe agregarse al proveedor de secretos (ej. Vault, Github Secrets) en producción.`
    },
    "readme-md": {
        title: "README.md",
        status: "Obligatorio (Human-Friendly)",
        description: "La cara pública del repositorio orientada a programadores humanos. Debe enlazar al archivo AGENTS.md para redireccionar a los agentes.",
        code: `# Nombre del Proyecto

Descripción general pensada para programadores humanos.

> [!NOTE]
> **Instrucciones para Agentes de IA:** Lee [AGENTS.md](file:///AGENTS.md) antes de comenzar cualquier tarea.`
    },
    "skill-prompt-update-md": {
        title: "skills/prompt-update/SKILL.md",
        status: "Especializado (Habilidad)",
        description: "Habilidad reutilizable y especializada que define el proceso operativo para actualizar el prompt principal, aplicar versionado SemVer y documentar cambios en el changelog.",
        code: `---
name: prompt-update
description: Procedimiento paso a paso para actualizar el prompt principal, aplicar versionado SemVer y documentar los cambios en el changelog.
---

# Habilidad: Actualización y Versionado del Prompt (prompt-update)

## Paso 1: Modificación del Prompt
Realiza los cambios solicitados por el usuario directamente en el archivo prompts/agents-first-documentation-review.prompt.md.

## Paso 2: Determinación del Tipo de Versión
Consulta la política en docs/prompt-versioning.md para clasificar el cambio en una de las tres categorías de versionado semántico (PATCH, MINOR, MAJOR).

## Paso 3: Registro en el Historial
Abre CHANGELOG.md y añade una nueva sección para la versión calculada con la fecha actual y la lista de cambios.`
    }
};

// 2. Navigation Tabs
function switchTab(tabId) {
    // Update Sidebar Class
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Tab Panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });

    // Sync window hash
    if (window.location.hash !== `#${tabId}`) {
        window.location.hash = tabId;
    }
}

// 3. Document Loader (Dynamic Fetch with Fallback)
async function loadFileContent(filePath, elementId, fallbackKey = null) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Network error');
        const text = await response.text();
        document.getElementById(elementId).innerText = text;
    } catch (error) {
        console.warn(`No se pudo cargar de forma dinámica ${filePath}. Usando fallback local.`);
        if (fallbackKey && docsDatabase[fallbackKey]) {
            document.getElementById(elementId).innerText = docsDatabase[fallbackKey].code;
        } else if (filePath.includes('prompt')) {
            // Load main prompt raw content (or fallback)
            document.getElementById(elementId).innerText = getDefaultPromptFallback();
        } else if (filePath.includes('CLAUDE')) {
            document.getElementById(elementId).innerText = getClaudeFallback();
        } else if (filePath.includes('GEMINI')) {
            document.getElementById(elementId).innerText = getGeminiFallback();
        } else if (filePath.includes('copilot')) {
            document.getElementById(elementId).innerText = getCopilotFallback();
        } else if (filePath.includes('usage-example')) {
            document.getElementById(elementId).innerText = getUsageExampleFallback();
        } else if (filePath.includes('prompt-versioning')) {
            document.getElementById(elementId).innerText = getVersioningFallback();
        }
    }
}

// 4. File Tree View Interactions
document.querySelectorAll('.tree-node.file').forEach(node => {
    node.addEventListener('click', () => {
        document.querySelectorAll('.tree-node.file').forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        
        const fileKey = node.getAttribute('data-file');
        const fileData = docsDatabase[fileKey];
        if (fileData) {
            document.getElementById('file-title').innerText = fileData.title;
            document.getElementById('file-status').innerText = fileData.status;
            document.getElementById('file-description').innerText = fileData.description;
            document.getElementById('file-code-preview').innerText = fileData.code;
        }
    });
});

// Expand/Collapse Folders
document.querySelectorAll('.tree-node.directory').forEach(dirNode => {
    dirNode.addEventListener('click', () => {
        dirNode.classList.toggle('expanded');
        // Toggle the visibility of the corresponding child list
        const nextSibling = dirNode.nextElementSibling;
        if (nextSibling && nextSibling.classList.contains('tree-children')) {
            if (dirNode.classList.contains('expanded')) {
                nextSibling.style.display = 'flex';
            } else {
                nextSibling.style.display = 'none';
            }
        }
    });
});

// 5. Model Templates switching
document.querySelectorAll('.tabs-control .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tabs-control .tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const model = btn.getAttribute('data-model');
        const intro = document.getElementById('model-intro-text');
        const path = document.getElementById('model-file-path');
        const display = document.getElementById('model-code-display');

        if (model === 'claude') {
            intro.innerText = "Instrucciones de configuración específicas para optimizar el análisis mental y estructuración de Anthropic Claude.";
            path.innerText = "docs/agent/CLAUDE.md";
            loadFileContent('docs/agent/CLAUDE.md', 'model-code-display', null);
        } else if (model === 'gemini') {
            intro.innerText = "Instrucciones optimizadas para Google Gemini, maximizando su ventana de contexto extendida y soporte algorítmico.";
            path.innerText = "docs/agent/GEMINI.md";
            loadFileContent('docs/agent/GEMINI.md', 'model-code-display', null);
        } else if (model === 'copilot') {
            intro.innerText = "Configuración de contexto de GitHub Copilot para autocompletar inline en tu editor de código preferido.";
            path.innerText = ".github/copilot-instructions.md";
            loadFileContent('.github/copilot-instructions.md', 'model-code-display', null);
        }
    });
});

// 6. Copy to Clipboard Utility
function showToast(message = "Copiado al portapapeles") {
    const toast = document.getElementById('toast');
    toast.querySelector('span').innerText = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}

document.querySelectorAll('.copy-prompt-trigger').forEach(trigger => {
    trigger.addEventListener('click', async () => {
        const text = document.getElementById('prompt-code-display').innerText;
        try {
            await navigator.clipboard.writeText(text);
            showToast("¡Prompt copiado correctamente!");
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    });
});

document.querySelector('.copy-model-content').addEventListener('click', async () => {
    const text = document.getElementById('model-code-display').innerText;
    try {
        await navigator.clipboard.writeText(text);
        showToast("¡Plantilla de modelo copiada!");
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
});

// 7. Dark/Light Mode Theme Toggle
const themeBtn = document.getElementById('theme-toggle-btn');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const icon = themeBtn.querySelector('i');
    
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        icon.className = 'fa-solid fa-moon';
    } else {
        document.body.setAttribute('data-theme', 'light');
        icon.className = 'fa-solid fa-sun';
    }
});

// 8. Simple Client-Side Search
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (!query) return;
    
    // Auto switch to prompt tab if searching prompt
    if (query.includes('prompt') || query.includes('auditor')) {
        switchTab('prompt');
    } else if (query.includes('claud') || query.includes('gemin') || query.includes('copil')) {
        switchTab('models');
    }
});

// 9. Initial Load on Page Boot
window.addEventListener('DOMContentLoaded', () => {
    // Read window hash if exists
    const initialTab = window.location.hash.replace('#', '') || 'welcome';
    switchTab(initialTab);

    // Initial Active Node in Tree View
    const firstNode = document.querySelector('.tree-node.file');
    if (firstNode) firstNode.click();

    // Fetch initial contents
    loadFileContent('prompts/agents-first-documentation-review.prompt.md', 'prompt-code-display');
    loadFileContent('docs/agent/CLAUDE.md', 'model-code-display');
    loadFileContent('examples/usage-example.md', 'example-markdown-content');
    loadFileContent('docs/prompt-versioning.md', 'versioning-markdown-content');
});

// Sync Tab Switches on Hash Change
window.addEventListener('hashchange', () => {
    const tabId = window.location.hash.replace('#', '') || 'welcome';
    switchTab(tabId);
});

// Fallback generators in case server fetch is unavailable (offline mode)
function getDefaultPromptFallback() {
    return `Actúa como un agente senior de documentación técnica, arquitectura de repositorios y preparación de proyectos para agentes de IA.

Tu tarea es revisar este repositorio completo, detectar documentación antigua, duplicada, incoherente u obsoleta, eliminarla o reemplazarla de forma segura, y crear una nueva documentación profesional con enfoque **agents-first y human-friendly**.

No debes asumir el stack tecnológico al inicio. Primero debes leer el repositorio de forma agnóstica, entender su estructura real, propósito, arquitectura, comandos, dependencias, flujos, convenciones y estado actual. Solo después de esa lectura puedes adaptar la documentación al framework, lenguaje o herramientas detectadas.

Objetivo principal:
Convertir este repositorio en un repositorio preparado para trabajar correctamente con agentes autónomos de codificación y, al mismo tiempo, mantener documentación clara para humanos.

Instrucciones obligatorias:

1. Lectura inicial del repositorio
   * Analiza la estructura completa del proyecto.
   * Identifica el propósito real del repositorio.
   * Detecta lenguaje, framework, runtime, gestor de paquetes, comandos, servicios, carpetas críticas y archivos sensibles.
   * Revisa README, docs, archivos Markdown, comentarios de configuración, scripts y cualquier documentación existente.
   * No modifiques nada antes de entender el contexto general.

2. Auditoría de documentación existente
   Clasifica la documentación actual en:
   * Vigente y útil.
   * Duplicada.
   * Desactualizada.
   * Incompleta.
   * Contradictoria.
   * Generada automáticamente.
   * Obsoleta y eliminable.

   No elimines documentación útil. Si una documentación antigua contiene información todavía válida, debes migrarla a la nueva estructura antes de eliminarla.

3. Limpieza de documentación obsoleta
   * Elimina archivos Markdown antiguos solo si son claramente obsoletos, redundantes o contradictorios.
   * No elimines documentación legal, contractual, histórica importante, licencias, changelogs o políticas sin justificación clara.
   * Si tienes dudas sobre si un archivo debe eliminarse, conserva su contenido o muévelo a una sección de referencia.
   * Al final, informa qué archivos fueron eliminados, reemplazados o conservados.

4. Nueva documentación agents-first
   Crea una estructura documental profesional enfocada en agentes de IA, usando como base este enfoque:
   * AGENTS.md como archivo raíz principal para agentes.
   * AGENTS.md debe ser corto, operativo, accionable y enlazado.
   * No debe convertirse en una enciclopedia.
   * Debe indicar qué leer primero, qué puede modificar el agente, qué no puede modificar, qué comandos usar, cómo validar cambios y cuándo pedir aprobación humana.
   * El detalle profundo debe vivir en documentos especializados.

   Crea, si aplica al repositorio, esta estructura:
   \`\`\`txt
   AGENTS.md
   docs/
     agent/
       PERMISSIONS.md
       RUNBOOK.md
       TESTS.md
       SECURITY.md
       DATA_SCHEMA.md
       CONFIG.md
   skills/
     <habilidad-especifica>/
       SKILL.md
   \`\`\`

   También puedes crear documentación humana complementaria si el repositorio la necesita, por ejemplo:
   \`\`\`txt
   README.md
   docs/
     architecture/
       overview.md
     development/
       setup.md
     operations/
       deployment.md
   \`\`\`

5. Archivos permitidos y no permitidos
   * Debes crear AGENTS.md.
   * Puedes crear CLAUDE.md, GEMINI.md o .github/copilot-instructions.md solo si el repositorio lo justifica.
   * Si existen archivos de instrucciones de agente antiguos u obsoletos, evalúa si su contenido todavía sirve. Si sirve, migra la información útil a AGENTS.md o docs/agent/. Luego elimínalos o márcalos como obsoletos según corresponda.

6. Contenido mínimo esperado de AGENTS.md
   El archivo AGENTS.md debe incluir como mínimo:
   * Propósito del repositorio.
   * Alcance permitido para agentes.
   * Acciones prohibidas sin aprobación humana.
   * Rutas prioritarias de lectura.
   * Rutas protegidas o sensibles.
   * Stack detectado.
   * Comandos reales del proyecto.
   * Reglas operativas.
   * Reglas de seguridad.
   * Validación antes de cerrar una tarea.
   * Definición de terminado.
   * Enlaces a documentos especializados.

7. Documentos especializados esperados
   Crea estos documentos solo si tienen sentido para el repositorio:

   * docs/agent/PERMISSIONS.md: Debe explicar qué puede modificar el agente, qué no puede modificar, qué requiere aprobación humana y qué carpetas o archivos están protegidos.
   * docs/agent/RUNBOOK.md: Debe explicar cómo levantar el proyecto, cómo ejecutar servicios locales, cómo depurar errores comunes, cómo reiniciar o validar componentes, y procedimientos operativos reales del repositorio.
   * docs/agent/TESTS.md: Debe explicar la estrategia de pruebas, comandos reales de test, qué pruebas ejecutar según el tipo de cambio, qué hacer si una prueba falla, y la prohibición de eliminar pruebas para hacer pasar la suite.
   * docs/agent/SECURITY.md: Debe explicar el manejo de secretos, archivos sensibles, reglas de autenticación/autorización si aplica, datos sensibles, operaciones peligrosas, y acciones que requieren aprobación humana.
   * docs/agent/DATA_SCHEMA.md: Debe explicar las entidades principales, modelos, contratos de API, payloads relevantes, relaciones de datos, migraciones si aplica, y reglas de compatibilidad.
   * docs/agent/CONFIG.md: Debe explicar las variables de entorno, archivos de configuración, servicios externos, perfiles local/dev/prod si existen, y la configuración necesaria para ejecutar el proyecto sin exponer secretos.
   * skills/*/SKILL.md: Debe usarse solo para tareas repetibles y especializadas, por ejemplo:
     * release
     * database-migration
     * deployment
     * incident-response
     * api-contract-update
     * frontend-component
     * testing
     * documentation-update

     No crees skills genéricos innecesarios.

8. Enfoque human-friendly
   Además de preparar el repositorio para agentes, asegúrate de que un humano pueda entender:
   * Qué es el proyecto.
   * Cómo instalarlo.
   * Cómo ejecutarlo.
   * Cómo probarlo.
   * Cómo contribuir.
   * Dónde está la documentación importante.

   Si el README actual está obsoleto, actualízalo. Si no existe, créalo.

9. Reglas de seguridad
   Nunca:
   * Imprimas secretos.
   * Copies valores reales de .env.
   * Modifiques credenciales.
   * Elimines archivos sensibles sin aprobación.
   * Cambies configuración productiva sin justificación.
   * Inventes comandos que no existen.
   * Inventes arquitectura que el repositorio no tiene.
   * Crees documentación falsa solo para completar estructura.

   Si falta información, deja un marcador claro:
   \`\`\`md
   > Pendiente de confirmar: ...
   \`\`\`

10. Criterio de calidad y formato
    La documentación final debe ser:
    * **Clara y Directa:** Breve donde corresponda, operativa y accionable.
    * **Fácil de mantener y agnóstica:** Adaptada al stack real solo después de analizarlo.
    * **Enlaces Absolutos Clickeables:** Utiliza la sintaxis de links estándar con el esquema file:// y rutas absolutas (ej. [README.md](file:///c:/Users/name/project/README.md)). En sistemas Windows, usa siempre barras inclinadas hacia adelante (/) y la letra de la unidad en minúscula.
    * **Uso de Alertas de GitHub:** Utiliza bloques de alerta de Markdown de estilo GitHub para destacar información crítica:
      * > [!NOTE] para explicaciones o contexto de fondo.
      * > [!IMPORTANT] para requisitos esenciales y pasos críticos.
      * > [!WARNING] para cambios disruptivos y problemas de compatibilidad.

11. Proceso de trabajo esperado
    Sigue este orden estricto:
    1. **Plan de Implementación:** Antes de realizar cualquier cambio o eliminación, propone un plan detallado de qué archivos se crearán, modificarán o eliminarán, y solicita la aprobación del usuario.
    2. **Leer estructura del repositorio.**
    3. **Identificar stack y propósito.**
    4. **Auditar documentación existente.**
    5. **Decidir qué conservar, migrar, reemplazar o eliminar.**
    6. **Crear nueva estructura documental.**
    7. **Actualizar README si corresponde.**
    8. **Crear AGENTS.md.**
    9. **Crear documentos especializados en docs/agent/.**
    10. **Crear skills/*/SKILL.md solo si aplica.**
    11. **Eliminar documentación obsoleta solo después de migrar contenido útil.**
    12. **Validar que los enlaces internos funcionen.**
    13. **Entregar resumen final.**

12. Resultado final esperado
    Al terminar, entrega un resumen con:
    * Documentos creados.
    * Documentos actualizados.
    * Documentos eliminados.
    * Información migrada desde documentación antigua.
    * Stack detectado.
    * Comandos documentados.
    * Riesgos o pendientes encontrados.
    * Recomendaciones para mantener esta documentación actualizada.

Ejecuta esta tarea con criterio profesional. No hagas cambios cosméticos innecesarios. Prioriza una documentación útil, segura, mantenible y preparada para agentes de IA.`;
}
function getClaudeFallback() {
    return `# Guía de Instrucciones para Claude (CLAUDE.md)

Este documento contiene un conjunto de directrices optimizadas para **Anthropic Claude** (Claude 3, 3.5 Sonnet, etc.) en tareas de desarrollo y mantenimiento dentro del estándar *agents-first*.

---

## 1. Uso de Bloques XML para Razonamiento

Claude responde excepcionalmente bien a etiquetas estructuradas tipo XML. Utiliza siempre la siguiente estructura al planificar y razonar tareas complejas:

\`\`\`xml
<thinking>
1. Analizar el código existente para X.
2. Identificar posibles efectos secundarios.
3. Planificar la modificación de forma segura.
</thinking>
\`\`\`

- **Paso de Razonamiento:** Describe tu análisis mental antes de escribir o modificar archivos.
- **Paso de Validación:** Coloca tus planes y pruebas preliminares dentro de bloques XML específicos si la tarea es compleja.

---

## 2. Reglas de Codificación y TypeScript/JS

Si el repositorio utiliza JavaScript o TypeScript:
- **Estilo de Importación:** Prefiere importaciones de ES modules (\`import ... from '...'\`) sobre CommonJS (\`require\`) a menos que el proyecto use este último de forma estricta.
- **Tipado:** No uses \`any\` en TypeScript. Define interfaces claras para todas las respuestas de API y estados.
- **Formateo:** Respeta la configuración local del formateador del proyecto (Prettier, ESLint). Ejecuta siempre \`npm run lint\` o \`eslint .\` antes de concluir.

---

## 3. Comandos de Utilidad

Siempre que trabajes en un entorno Node:
- **Instalación:** \`npm install\`
- **Iniciar servidor dev:** \`npm run dev\` o \`npm start\`
- **Correr Tests:** \`npm test\` o \`npm run test\`
- **Correr Linter:** \`npm run lint\`

---

## 4. Formato de Respuestas

- **Concisión:** Evita introducciones largas o explicaciones repetitivas del código. Ve directo a la solución.
- **Markdown:** Utiliza enlaces a archivos en formato absoluto/relativo tal como se describe en \`AGENTS.md\`.
- **Explicación de Cambios:** En tu resumen final, lista los archivos modificados con una breve justificación técnica.`;
}
function getGeminiFallback() {
    return `# Guía de Instrucciones para Gemini (GEMINI.md)

Este documento describe las directrices optimizadas para **Google Gemini** (Gemini 1.5 Pro/Flash, Gemini 3.5, etc.) enfocadas en maximizar su capacidad de razonamiento de largo contexto y capacidades multi-modales bajo el estándar *agents-first*.

---

## 1. Aprovechamiento del Contexto Extendido

Gemini cuenta con una de las ventanas de contexto más amplias del sector.
- **Lectura Profunda:** Cuando sea necesario, lee archivos completos en lugar de fragmentos pequeños para entender dependencias complejas de extremo a extremo.
- **Búsqueda Semántica:** Utiliza herramientas de búsqueda global (\`grep_search\` o búsqueda semántica) antes de plantear un cambio arquitectónico para garantizar que no existan dependencias ocultas.

---

## 2. Razonamiento y Modos de Planificación

- **Modo Planificador:** Dedica un paso explícito al inicio para estructurar el \`implementation_plan.md\` si la tarea implica múltiples componentes.
- **Expresiones Matemáticas y Algoritmos:** Si el proyecto incluye lógica de IA, gráficos, visualizaciones o algoritmos, puedes describir fórmulas utilizando formato LaTeX estándar (\`\\(...\\)\` para inline o \`\\[...\\]\` para display blocks).

---

## 3. Trabajo con Diagramas y Contratos

- **Diagramas de Flujo (Mermaid):** Utiliza diagramas Mermaid estructurados en la documentación para representar flujos de datos complejos y arquitecturas de bases de datos.
- **Validación del Schema:** Si se modifica una ruta de API o un modelo de datos, actualiza y valida inmediatamente los archivos en \`docs/agent/DATA_SCHEMA.md\`.

---

## 4. Estilo de Respuesta

- **Estructura Clara:** Organiza las explicaciones con títulos jerárquicos y tablas comparativas para facilitar la lectura al programador humano.
- **Links Activos:** Incluye siempre enlaces clickeables a archivos locales mediante formato \`file:///\` con rutas absolutas tal como se indica en \`AGENTS.md\`.`;
}
function getCopilotFallback() {
    return `# GitHub Copilot System Instructions (.github/copilot-instructions.md)

Este archivo provee directrices de contexto para **GitHub Copilot** (en VS Code, Cursor, o Copilot Chat) para optimizar la generación de código e inline suggestions dentro del repositorio.

---

## 1. Reglas Generales de Generación de Código

- **No Generar Boilerplate Innecesario:** Copilot debe enfocarse en autocompletar la función o bloque lógico actual sin crear clases, envoltorios o helpers genéricos.
- **Mantener el Estilo del Proyecto:** Observa el código circundante y adapta la indentación, uso de comillas, nombres de variables (camelCase, snake_case) y convenciones antes de sugerir código.

---

## 2. Convenciones de Codificación y Comentarios

- **Comentarios Cortos:** Evita comentarios extensos sobre lo obvio. El código autodocumentado es prioritario.
- **Evitar Código Muerto:** No sugieras bloques de código comentados o anotaciones \`TODO\` sin justificación.
- **Modern JavaScript:** Prefiere destructuración, arrow functions y sintaxis moderna (ES6+), manteniendo la compatibilidad con el runtime definido en \`package.json\`.

---

## 3. Pruebas y Validación Local

- Cuando generes un nuevo test o modifiques una función, asegúrate de que el test mantenga consistencia con los esquemas actuales definidos en \`docs/agent/DATA_SCHEMA.md\`.
- No alteres ni elimines aserciones existentes en los archivos de prueba para "hacer pasar" tests que fallan tras una modificación.`;
}
function getUsageExampleFallback() {
    return `# Ejemplo de Uso del Prompt de Auditoría Documental

Este ejemplo ilustra cómo aplicar el prompt de auditoría documental (\`prompts/agents-first-documentation-review.prompt.md\`) en un repositorio real.

---

## Escenario de Ejemplo: Proyecto "Legacy API"

Imagina que tienes un proyecto Node.js/Express heredado con la siguiente estructura de archivos desordenada y confusa:

\`\`\`txt
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
\`\`\`

---

## Paso 1: Carga del Prompt

1. Abre tu agente de IA de codificación (como Claude, Gemini, ChatGPT, o tu herramienta local de CLI).
2. Copia todo el contenido del archivo \`prompts/agents-first-documentation-review.prompt.md\`.
3. Pégalo en el chat de inicio o como instrucción de sistema para tu agente.

---

## Paso 2: Análisis y Auditoría de la IA

Al ejecutar el prompt, la IA iniciará su proceso de análisis. El agente no realizará cambios inmediatos, sino que presentará un reporte de auditoría como el siguiente:

### Transcripción Simulada de la Auditoría

> **IA:** He analizado el repositorio \`legacy-api\`. A continuación presento mi reporte de auditoría:
> 
> * **Stack Tecnológico Detectado:** Node.js (v18+), Express, npm, variables de entorno en \`.env.example\`.
> * **Clasificación de Documentación:**
>   * **Vigente y útil:** \`docs/api-endpoints.md\` (contiene contratos de rutas reales).
>   * **Duplicada/Obsoleta:** \`docs/old-install.txt\` (los comandos de instalación actuales están en \`package.json\`).
>   * **Deprecada:** \`legacy-instructions.md\` (será eliminada, pero rescataremos las reglas de formateo de logs).
> * **Plan de Acción:**
>   1. Crear \`AGENTS.md\` para guiar a futuros agentes de codificación.
>   2. Migrar la información válida de \`docs/api-endpoints.md\` a \`docs/agent/DATA_SCHEMA.md\`.
>   3. Migrar las reglas de logs de \`legacy-instructions.md\` a \`docs/agent/CONFIG.md\`.
>   4. Eliminar \`legacy-instructions.md\` y \`docs/old-install.txt\`.
>   5. Actualizar \`README.md\` con instrucciones claras y humanas.

---

## Paso 3: Ejecución de la IA

Una vez aprobado el plan, la IA generará y reestructurará los archivos correspondientes.

### Estructura Final del Repositorio

Después de la ejecución del prompt, tu repositorio quedará limpio y ordenado de la siguiente manera:

\`\`\`txt
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
\`\`\`

---

## Ejemplo del Archivo \`AGENTS.md\` Creado

Este es un fragmento de cómo se ve el archivo de entrada para la IA que genera el prompt:

\`\`\`markdown
# Instrucciones de Agente (AGENTS.md)

Este repositorio contiene un servicio API REST en Node.js.

## Stack Tecnológico
- **Runtime:** Node.js
- **Framework:** Express.js
- **Gestor de Paquetes:** npm

## Comandos Críticos
- Levantar servidor local: \`npm run dev\`
- Ejecutar tests unitarios: \`npm test\`

## Rutas Clave de Lectura
- Configuración de Variables de Entorno: [CONFIG.md](file:///docs/agent/CONFIG.md)
- Esquemas de Datos y API: [DATA_SCHEMA.md](file:///docs/agent/DATA_SCHEMA.md)
- Permisos del Agente: [PERMISSIONS.md](file:///docs/agent/PERMISSIONS.md)

## Reglas de Validación
Antes de terminar cualquier tarea de codificación, debes:
1. Ejecutar \`npm run lint\` y arreglar advertencias.
2. Ejecutar \`npm test\` y verificar que el 100% de los tests pasen.
\`\`\`

---

## Beneficios Obtenidos
1. **Limpieza:** Se eliminó documentación antigua que inducía a error (\`old-install.txt\` y \`legacy-instructions.md\`).
2. **Contexto Inmediato:** El próximo agente que entre al proyecto sabrá exactamente qué comandos correr (\`npm run dev\`) y dónde leer las configuraciones sin perder tiempo analizando todo el código.
3. **Consistencia Humano-Máquina:** Los humanos pueden seguir utilizando el \`README.md\` simplificado, mientras que las herramientas automatizadas consumen la carpeta \`docs/agent/\`.`;
}
function getVersioningFallback() {
    return `# Versionado del Prompt

Este documento describe la estrategia de control de versiones y el ciclo de vida del prompt principal \`prompts/agents-first-documentation-review.prompt.md\`.

---

## Estrategia de Versionado Semántico (SemVer)

Dado que este repositorio provee un prompt como "producto", cualquier cambio o mejora en sus instrucciones se versiona bajo el estándar de **Versionado Semántico (vMAJOR.MINOR.PATCH)**:

### 1. MAJOR (\`vX.0.0\`)
Cambios significativos o estructurales que alteran de forma drástica el comportamiento esperado de la IA o la estructura final requerida.
- **Ejemplos:**
  - Modificación obligatoria del nombre del archivo raíz (ej. cambiar \`AGENTS.md\` por otro).
  - Reestructuración obligatoria de la carpeta \`docs/agent/\` agregando o quitando archivos requeridos por defecto.
  - Cambios drásticos en las reglas de seguridad o permisos del agente.

### 2. MINOR (\`v0.Y.0\`)
Adición de nuevas funcionalidades, directrices opcionales o compatibilidades de stacks sin alterar la estructura obligatoria base.
- **Ejemplos:**
  - Añadir instrucciones específicas opcionales para un nuevo framework o tipo de repositorio (ej. microservicios frontend).
  - Agregar una nueva plantilla opcional de skill bajo \`skills/\`.
  - Incorporar un nuevo archivo de instrucciones específicas como \`GEMINI.md\` o \`.github/copilot-instructions.md\` dentro de la lista de opcionales.

### 3. PATCH (\`v0.0.Z\`)
Mejoras menores de legibilidad, correcciones de traducción, orden de palabras, formato Markdown o correcciones ortográficas que no cambian las reglas lógicas del prompt.
- **Ejemplos:**
  - Corregir errores tipográficos en las instrucciones.
  - Mejorar la sintaxis de los bloques de código o de las listas para que los parsers de Markdown los interpreten mejor.
  - Ajustes de redacción para mejorar la precisión del entendimiento por parte de modelos específicos de LLM.

---

## Proceso para Registrar Cambios

Cada vez que realices una modificación al prompt principal:

1. **Actualiza el prompt:** Aplica los cambios directamente en \`prompts/agents-first-documentation-review.prompt.md\`.
2. **Incrementa la versión:** De acuerdo con la guía SemVer de arriba, determina el nuevo número de versión.
3. **Registra en el CHANGELOG:** Abre \`CHANGELOG.md\` en la raíz del proyecto y documenta los cambios de la nueva versión.
4. **Crea un Tag en Git (Opcional):** Si el repositorio está alojado en GitHub/GitLab, se recomienda crear un tag de git que coincida con la versión (ej. \`git tag -a v1.0.0 -m "Versión 1.0.0"\`).`;
}
