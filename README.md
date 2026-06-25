# Agents First Repo Docs

Repositorio profesional para convertir cualquier proyecto de software en un repositorio **agents-first** y **human-friendly**.

La idea es simple: un dev entra, copia el prompt maestro, lo pega en el agente que use y el agente queda con una misión clara para auditar, limpiar y reconstruir la documentación del repositorio objetivo sin asumir stack ni inventar arquitectura.

> [!TIP]
> **Sitio GitHub Pages:** usa la versión visual para leer, navegar y copiar el prompt desde [blandskron.github.io/agents-first-repo-docs](https://blandskron.github.io/agents-first-repo-docs/).

## Qué Entrega Este Repo

- Un prompt maestro universal en [prompts/agents-first-documentation-review.prompt.md](prompts/agents-first-documentation-review.prompt.md).
- Una estructura documental que sirve como ejemplo real del estándar agents-first.
- Guías de permisos, validación y versionado para mantener el prompt como producto.
- Un set completo de documentos `docs/agent/` como referencia profesional, incluso cuando una dimensión no aplique.
- Ejemplos de skills reutilizables para tareas repetibles.
- Un ejemplo de uso en [examples/usage-example.md](examples/usage-example.md).
- Una página estática con HTML, CSS y JS lista para GitHub Pages.

## Uso Rápido

1. Abre [prompts/agents-first-documentation-review.prompt.md](prompts/agents-first-documentation-review.prompt.md).
2. Copia todo el contenido.
3. Pégalo en tu agente de codificación o documentación.
4. Ejecuta el agente desde la raíz del repositorio que quieres convertir.
5. Revisa el plan que proponga antes de aprobar eliminaciones o cambios sensibles.

El prompt está diseñado para funcionar con cualquier agente moderno: no depende de Claude, Gemini, Copilot, ChatGPT, Codex ni de un framework específico.

## Para Qué Sirve

Este repositorio ayuda a transformar proyectos con documentación dispersa en proyectos que tienen:

- `AGENTS.md` como punto de entrada para agentes.
- `README.md` claro para humanos.
- Documentos especializados en `docs/agent/`.
- Reglas de permisos, seguridad y validación.
- Comandos reales, no inventados.
- Limpieza segura de documentación obsoleta.
- Skills solo cuando existan tareas repetibles que lo justifiquen.

## Casos de Uso

- Microservicios backend.
- Frontends.
- Aplicaciones fullstack.
- Monorepos.
- Repositorios de infraestructura.
- Bibliotecas y SDKs.
- Repositorios de agentes IA.
- Proyectos heredados con documentación contradictoria.
- Repositorios de prompts, plantillas o documentación pública.

## Estructura del Repositorio

```txt
agents-first-repo-docs/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── GEMINI.md
├── PROMPT_VERSIONING.md
├── index.html
├── index.css
├── index.js
├── prompts/
│   └── agents-first-documentation-review.prompt.md
├── examples/
│   └── usage-example.md
├── docs/
│   ├── CHANGELOG.md
│   ├── skills/
│   │   └── README.md
│   └── agent/
│       ├── PERMISSIONS.md
│       ├── RUNBOOK.md
│       ├── TESTS.md
│       ├── SECURITY.md
│       ├── CONFIG.md
│       └── DATA_SCHEMA.md
├── .github/
│   └── copilot-instructions.md
├── skills/
│   ├── prompt-update/
│   │   └── SKILL.md
│   ├── documentation-audit/
│   │   └── SKILL.md
│   └── github-pages-release/
│       └── SKILL.md
└── LICENSE
```

## Resultado Esperado en un Repo Objetivo

Después de aplicar el prompt, el repositorio auditado puede quedar con una estructura similar a:

```txt
AGENTS.md
README.md
docs/
  agent/
    PERMISSIONS.md
    RUNBOOK.md
    TESTS.md
    SECURITY.md
    CONFIG.md
    DATA_SCHEMA.md
skills/
  <tarea-repetible>/
    SKILL.md
```

No todos los archivos son obligatorios. El agente debe crear solo lo que tenga sentido según evidencia del repositorio analizado.

## Reglas del Estándar

- Leer antes de modificar.
- No asumir stack tecnológico.
- No inventar comandos.
- No inventar arquitectura.
- No eliminar documentación útil sin migrarla.
- No exponer secretos.
- No modificar credenciales.
- Mantener `AGENTS.md` breve, operativo y enlazado.
- Mantener `README.md` útil para humanos.
- Registrar cambios del prompt en [docs/CHANGELOG.md](docs/CHANGELOG.md).

## Página GitHub Pages

La página estática vive en:

- [index.html](index.html)
- [index.css](index.css)
- [index.js](index.js)

Está pensada para desplegarse directamente desde la raíz del repositorio en GitHub Pages. No requiere build system.

## Mantenimiento

Cada mejora relevante del prompt debe seguir [PROMPT_VERSIONING.md](PROMPT_VERSIONING.md) y registrarse en [docs/CHANGELOG.md](docs/CHANGELOG.md).

Para actualizar el prompt, usa la guía especializada en [skills/prompt-update/SKILL.md](skills/prompt-update/SKILL.md).

## Licencia

MIT. Consulta [LICENSE](LICENSE).
