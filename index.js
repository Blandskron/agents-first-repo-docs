// Interactive Logic - Agents First Repo Docs

const docsDatabase = {
    "agents-md": {
        title: "AGENTS.md",
        status: "Requerido",
        description: "Entrada principal para agentes autónomos. Debe ser breve, operativa y enlazada.",
        code: `# Instrucciones de Agente (AGENTS.md)

Este repositorio contiene [descripción breve del proyecto].

## Stack Detectado
- **Tipo:** [app, biblioteca, monorepo, infraestructura, documentación]
- **Lenguaje/Runtime:** [detectado desde el repositorio]
- **Framework:** [si aplica]

## Lectura Prioritaria
1. [README.md](README.md)
2. [docs/agent/PERMISSIONS.md](docs/agent/PERMISSIONS.md)
3. [docs/agent/TESTS.md](docs/agent/TESTS.md)

## Reglas Operativas
- No inventes comandos ni arquitectura.
- No expongas secretos.
- Pide aprobación para eliminaciones o cambios sensibles.
- Ejecuta las validaciones reales disponibles antes de cerrar.`
    },
    "permissions-md": {
        title: "PERMISSIONS.md",
        status: "Requerido",
        description: "Define qué puede modificar el agente, qué está protegido y cuándo debe pedir aprobación humana.",
        code: `# Permisos del Agente

## Puede Modificar
- [Rutas editables confirmadas]

## Requiere Aprobación
- Cambios en credenciales, licencias, infraestructura o datos productivos.
- Eliminación de documentación antigua sin migración previa.

## Prohibido
- Exponer secretos.
- Inventar comandos o contratos.
- Relajar pruebas para hacer pasar la suite.`
    },
    "runbook-md": {
        title: "RUNBOOK.md",
        status: "Opcional",
        description: "Procedimientos reales para levantar, operar, reiniciar o depurar el proyecto.",
        code: `# Runbook Operativo

> Pendiente de confirmar: comandos reales de ejecución local.

## Levantamiento Local
- [Comando real detectado]

## Validación de Salud
- [Comando o endpoint real detectado]

## Problemas Frecuentes
- [Fallo común y resolución verificable]`
    },
    "tests-md": {
        title: "TESTS.md",
        status: "Recomendado",
        description: "Estrategia de pruebas y validaciones según comandos reales del repositorio.",
        code: `# Pruebas y Validación

## Comandos Reales
- [Comando de test detectado]
- [Comando de lint detectado]
- [Comando de build detectado]

## Reglas
- No elimines pruebas para hacer pasar la suite.
- Si no hay suite automatizada, documenta la validación manual realizada.`
    },
    "security-md": {
        title: "SECURITY.md",
        status: "Opcional",
        description: "Políticas de secretos, archivos sensibles, autenticación, autorización y operaciones peligrosas.",
        code: `# Seguridad

## Secretos
- No imprimir ni copiar valores reales de variables de entorno.
- Usar archivos de ejemplo sin credenciales reales.

## Cambios Sensibles
- Requieren aprobación humana: producción, permisos, infraestructura, autenticación y datos sensibles.`
    },
    "config-md": {
        title: "CONFIG.md",
        status: "Requerido en el ejemplo",
        description: "Documenta configuración, variables, servicios externos y qué no aplica en este repositorio.",
        code: `# Configuración

## Configuración Requerida
No hay configuración obligatoria.

## GitHub Pages
- Servir desde la raíz del repositorio.
- No requiere build system.

## Variables de Entorno
No aplica.`
    },
    "data-schema-md": {
        title: "DATA_SCHEMA.md",
        status: "Requerido en el ejemplo",
        description: "Documenta entidades conceptuales del producto aunque no exista base de datos.",
        code: `# Esquema de Datos y Contratos

## Entidades Conceptuales
- Prompt maestro
- Documento de agente
- Skill
- Página estática

## Regla
No inventar modelos ni APIs inexistentes.`
    },
    "readme-md": {
        title: "README.md",
        status: "Obligatorio",
        description: "Entrada para humanos: qué es el proyecto, cómo empezar y dónde está la documentación importante.",
        code: `# Nombre del Proyecto

Descripción clara para humanos.

## Inicio Rápido
1. [Paso real confirmado]
2. [Comando real confirmado]

> [!NOTE]
> Los agentes deben leer [AGENTS.md](AGENTS.md) antes de trabajar.`
    },
    "skill-prompt-update-md": {
        title: "skills/prompt-update/SKILL.md",
        status: "Especializado",
        description: "Skill para actualizar el prompt maestro, aplicar SemVer y registrar cambios.",
        code: `# Skill: Actualización del Prompt

## Flujo
1. Modificar prompts/agents-first-documentation-review.prompt.md.
2. Clasificar el cambio según PROMPT_VERSIONING.md.
3. Registrar la nueva versión en docs/CHANGELOG.md.
4. Validar enlaces, Markdown y consistencia del sitio.`
    },
    "skill-documentation-audit-md": {
        title: "skills/documentation-audit/SKILL.md",
        status: "Ejemplo",
        description: "Skill de ejemplo para revisar consistencia documental antes de cerrar cambios.",
        code: `# Skill: Documentation Audit

## Flujo
1. Revisar AGENTS.md y README.md.
2. Validar enlaces Markdown.
3. Buscar secretos.
4. Confirmar que docs/CHANGELOG.md registre cambios relevantes.`
    },
    "claude-md": {
        title: "CLAUDE.md",
        status: "Opcional en raíz",
        description: "Guía raíz para usar Claude con este estándar sin acoplar el prompt a un stack.",
        code: `# Guía para Claude

Usa el prompt maestro sin acoplarlo a un stack específico.

1. Copia prompts/agents-first-documentation-review.prompt.md.
2. Pégalo en Claude dentro del contexto del repositorio objetivo.
3. Pide primero una auditoría de solo lectura.
4. Revisa el plan antes de autorizar eliminaciones o cambios sensibles.`
    },
    "gemini-md": {
        title: "GEMINI.md",
        status: "Opcional en raíz",
        description: "Guía raíz para usar Gemini con este estándar sin asumir tecnologías.",
        code: `# Guía para Gemini

Usa el prompt maestro aprovechando lectura amplia del repositorio objetivo.

1. Copia prompts/agents-first-documentation-review.prompt.md.
2. Pide clasificar documentación existente antes de modificar.
3. Para monorepos, solicita detección de servicios o paquetes.
4. Revisa manualmente cambios sensibles.`
    }
};

const fallbacks = {
    prompt: `Actúa como un agente senior de documentación técnica, arquitectura de repositorios y preparación de proyectos para agentes de IA.

Tu misión es convertir el repositorio actual en un proyecto **agents-first** y **human-friendly**.

Este prompt es universal. No asumas lenguaje, framework, gestor de paquetes, arquitectura, proveedor cloud, base de datos ni herramienta de IA. Primero lee el repositorio, detecta la realidad del proyecto y documenta solo lo que puedas sostener con evidencia local.

Flujo obligatorio:
1. Realiza una auditoría inicial de solo lectura.
2. Presenta diagnóstico, riesgos y plan antes de cambiar archivos.
3. Crea o actualiza AGENTS.md, README.md y docs/agent/* solo cuando aporten valor verificable.
4. Migra información útil antes de eliminar documentación antigua.
5. No inventes comandos, arquitectura, dependencias, servicios ni variables.
6. Si falta información, escribe: > Pendiente de confirmar: ...
7. Valida enlaces Markdown, bloques de código, secretos y comandos reales antes de cerrar.

Para la versión completa, abre prompts/agents-first-documentation-review.prompt.md desde GitHub Pages o el repositorio.`,
    claude: `# Guía para Claude

Usa el prompt maestro sin acoplarlo a un stack específico.

1. Copia prompts/agents-first-documentation-review.prompt.md.
2. Pégalo en Claude dentro del contexto del repositorio objetivo.
3. Pide primero una auditoría de solo lectura.
4. Revisa el plan antes de autorizar eliminaciones o cambios sensibles.`,
    gemini: `# Guía para Gemini

Usa el prompt maestro aprovechando lectura amplia del repositorio objetivo.

1. Copia prompts/agents-first-documentation-review.prompt.md.
2. Pide a Gemini clasificar documentación existente antes de modificar.
3. Para monorepos, solicita detección de servicios o paquetes antes de crear documentos globales.
4. Revisa manualmente eliminaciones o reestructuraciones sensibles.`,
    copilot: `# GitHub Copilot Instructions

Este repositorio contiene un prompt maestro, documentación Markdown y una página estática sin build system.

- No asumas frameworks, paquetes ni comandos inexistentes.
- Mantén el prompt universal y agnóstico.
- Si actualizas el prompt, actualiza docs/CHANGELOG.md.`,
    usage: `# Ejemplo de Uso

1. Copia el prompt maestro.
2. Pégalo en tu agente.
3. Ejecuta la auditoría desde la raíz del repositorio objetivo.
4. Revisa el plan antes de aprobar cambios sensibles.`,
    versioning: `# Versionado del Prompt

Los cambios del prompt se versionan con SemVer:

- MAJOR: cambios incompatibles en estructura o reglas.
- MINOR: nuevas capacidades compatibles.
- PATCH: correcciones de redacción, formato o precisión.`
};

function switchTab(tabId) {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-pane').forEach((pane) => {
        pane.classList.toggle('active', pane.id === tabId);
    });

    if (window.location.hash !== `#${tabId}`) {
        window.location.hash = tabId;
    }

    closeSidebar();
}

async function loadFileContent(filePath, elementId, fallbackKey = null) {
    const target = document.getElementById(elementId);
    if (!target) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        target.innerText = await response.text();
    } catch (error) {
        console.warn(`No se pudo cargar ${filePath}. Usando fallback local.`, error);
        if (fallbackKey && docsDatabase[fallbackKey]) {
            target.innerText = docsDatabase[fallbackKey].code;
        } else if (filePath.includes('prompt')) {
            target.innerText = fallbacks.prompt;
        } else if (filePath.includes('CLAUDE')) {
            target.innerText = fallbacks.claude;
        } else if (filePath.includes('GEMINI')) {
            target.innerText = fallbacks.gemini;
        } else if (filePath.includes('copilot')) {
            target.innerText = fallbacks.copilot;
        } else if (filePath.includes('usage-example')) {
            target.innerText = fallbacks.usage;
        } else if (filePath.includes('PROMPT_VERSIONING')) {
            target.innerText = fallbacks.versioning;
        }
    }
}

function showToast(message = "Copiado al portapapeles") {
    const toast = document.getElementById('toast');
    toast.querySelector('span').innerText = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
}

function bindNavigation() {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            switchTab(item.getAttribute('data-tab'));
        });
    });
}

function openSidebar() {
    document.body.classList.remove('sidebar-collapsed');
    document.body.classList.add('sidebar-open');
    const sidebar = document.getElementById('sidebar');
    if (sidebar && isMobileLayout()) {
        sidebar.style.left = '0px';
        sidebar.style.transform = 'translateX(100%)';
    }
}

function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.left = '';
        sidebar.style.transform = '';
    }
}

function isMobileLayout() {
    return window.matchMedia('(max-width: 820px)').matches;
}

function toggleDesktopSidebar() {
    if (isMobileLayout()) {
        closeSidebar();
        return;
    }

    document.body.classList.toggle('sidebar-collapsed');
    const collapsed = document.body.classList.contains('sidebar-collapsed');
    const sidebarToggle = document.getElementById('sidebar-close');
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.marginLeft = collapsed ? '76px' : '';
        mainContent.style.position = collapsed ? 'relative' : '';
        mainContent.style.left = collapsed ? '-216px' : '';
        mainContent.style.width = collapsed ? 'calc(100% + 216px)' : '';
    }
    if (sidebarToggle) {
        sidebarToggle.setAttribute('aria-label', collapsed ? 'Expandir navegación' : 'Colapsar navegación');
        sidebarToggle.setAttribute('title', collapsed ? 'Expandir navegación' : 'Colapsar navegación');
    }
}

function bindSidebar() {
    document.getElementById('mobile-menu-btn')?.addEventListener('click', openSidebar);
    document.getElementById('sidebar-close')?.addEventListener('click', toggleDesktopSidebar);
    document.getElementById('sidebar-backdrop')?.addEventListener('click', closeSidebar);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeSidebar();
        }
    });

    window.addEventListener('resize', () => {
        const mainContent = document.querySelector('.main-content');
        if (isMobileLayout()) {
            document.body.classList.remove('sidebar-collapsed');
            if (mainContent) {
                mainContent.style.marginLeft = '';
                mainContent.style.position = '';
                mainContent.style.left = '';
                mainContent.style.width = '';
            }
        } else {
            closeSidebar();
        }
    });
}

function bindTreeView() {
    document.querySelectorAll('.tree-node.file').forEach((node) => {
        node.addEventListener('click', () => {
            document.querySelectorAll('.tree-node.file').forEach((item) => item.classList.remove('active'));
            node.classList.add('active');

            const fileData = docsDatabase[node.getAttribute('data-file')];
            if (!fileData) return;

            document.getElementById('file-title').innerText = fileData.title;
            document.getElementById('file-status').innerText = fileData.status;
            document.getElementById('file-description').innerText = fileData.description;
            document.getElementById('file-code-preview').innerText = fileData.code;
        });
    });

    document.querySelectorAll('.tree-node.directory').forEach((dirNode) => {
        dirNode.addEventListener('click', () => {
            dirNode.classList.toggle('expanded');
            const nextSibling = dirNode.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains('tree-children')) {
                nextSibling.style.display = dirNode.classList.contains('expanded') ? 'flex' : 'none';
            }
        });
    });
}

function bindModelTabs() {
    document.querySelectorAll('.tabs-control .tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tabs-control .tab-btn').forEach((item) => item.classList.remove('active'));
            btn.classList.add('active');

            const model = btn.getAttribute('data-model');
            const intro = document.getElementById('model-intro-text');
            const path = document.getElementById('model-file-path');

            const modelConfig = {
                claude: {
                    intro: "Recomendaciones para usar el prompt maestro con Claude sin acoplarlo a un stack específico.",
                    path: "CLAUDE.md",
                    file: "CLAUDE.md"
                },
                gemini: {
                    intro: "Recomendaciones para usar el prompt maestro con Gemini aprovechando lectura amplia y evidencia local.",
                    path: "GEMINI.md",
                    file: "GEMINI.md"
                },
                copilot: {
                    intro: "Instrucciones de contexto para GitHub Copilot dentro de este repositorio.",
                    path: ".github/copilot-instructions.md",
                    file: ".github/copilot-instructions.md"
                }
            }[model];

            intro.innerText = modelConfig.intro;
            path.innerText = modelConfig.path;
            loadFileContent(modelConfig.file, 'model-code-display');
        });
    });
}

function bindCopyButtons() {
    document.querySelectorAll('.copy-prompt-trigger').forEach((trigger) => {
        trigger.addEventListener('click', async () => {
            await navigator.clipboard.writeText(document.getElementById('prompt-code-display').innerText);
            showToast("Prompt copiado correctamente");
        });
    });

    document.querySelector('.copy-model-content').addEventListener('click', async () => {
        await navigator.clipboard.writeText(document.getElementById('model-code-display').innerText);
        showToast("Plantilla copiada");
    });
}

function bindThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    themeBtn.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            themeBtn.querySelector('i').className = 'fa-solid fa-moon';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeBtn.querySelector('i').className = 'fa-solid fa-sun';
        }
    });
}

function bindSearch() {
    document.getElementById('search-input').addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        if (!query) return;

        if (query.includes('prompt') || query.includes('auditor')) {
            switchTab('prompt');
        } else if (query.includes('claud') || query.includes('gemin') || query.includes('copil')) {
            switchTab('models');
        } else if (query.includes('version')) {
            switchTab('versioning');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    bindSidebar();
    bindNavigation();
    bindTreeView();
    bindModelTabs();
    bindCopyButtons();
    bindThemeToggle();
    bindSearch();

    switchTab(window.location.hash.replace('#', '') || 'welcome');
    document.querySelector('.tree-node.file')?.click();

    loadFileContent('prompts/agents-first-documentation-review.prompt.md', 'prompt-code-display');
    loadFileContent('CLAUDE.md', 'model-code-display');
    loadFileContent('examples/usage-example.md', 'example-markdown-content');
    loadFileContent('PROMPT_VERSIONING.md', 'versioning-markdown-content');
});

window.addEventListener('hashchange', () => {
    switchTab(window.location.hash.replace('#', '') || 'welcome');
});
