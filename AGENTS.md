# Instrucciones de Agente (AGENTS.md)

Este repositorio mantiene un prompt maestro y una página estática para ayudar a devs a convertir cualquier repositorio en un proyecto **agents-first** y **human-friendly**.

## Propósito

Entregar un estándar reutilizable: el usuario copia el prompt principal, lo entrega a su agente de IA y ese agente audita, limpia y reconstruye la documentación del repositorio objetivo sin asumir tecnologías.

## Stack Detectado

- **Tipo:** repositorio de documentación, prompts y sitio estático.
- **Lenguajes:** Markdown, HTML, CSS y JavaScript vanilla.
- **Build:** no hay build system; GitHub Pages puede servir los archivos raíz directamente.
- **Control de versiones:** Git.

## Lectura Prioritaria

1. [README.md](README.md)
2. [prompts/agents-first-documentation-review.prompt.md](prompts/agents-first-documentation-review.prompt.md)
3. [docs/prompt-versioning.md](docs/prompt-versioning.md)
4. [examples/usage-example.md](examples/usage-example.md)
5. [docs/agent/PERMISSIONS.md](docs/agent/PERMISSIONS.md)
6. [docs/agent/TESTS.md](docs/agent/TESTS.md)

## Superficie Editable

Puedes modificar:

- `prompts/agents-first-documentation-review.prompt.md`
- `README.md`
- `CHANGELOG.md`
- `examples/usage-example.md`
- `docs/**/*.md`
- `skills/**/*.md`
- `index.html`, `index.css`, `index.js`

## Requiere Aprobación Humana

Pide aprobación antes de:

- Cambiar o eliminar `LICENSE`.
- Eliminar el prompt principal.
- Hacer cambios incompatibles en la estructura esperada por el prompt.
- Reescribir historial Git, tags o ramas remotas.
- Eliminar carpetas completas como `prompts/`, `docs/`, `examples/` o `skills/`.

## Reglas Operativas

- El prompt principal debe seguir siendo universal y agnóstico al stack.
- No documentes comandos que no existan en este repositorio.
- Mantén el sitio estático sin dependencias de build.
- Evita duplicar contenido extenso entre Markdown y JavaScript; si hay fallback, debe ser claramente secundario.
- Toda mejora relevante del prompt o la documentación debe registrarse en `CHANGELOG.md`.
- No agregues referencias a archivos de instrucciones específicos de una plataforma si esos archivos no existen en el repositorio.

## Validación

Antes de cerrar una tarea:

1. Verifica enlaces internos de Markdown.
2. Comprueba que los bloques de código Markdown estén cerrados.
3. Revisa que el sitio `index.html` pueda cargar el prompt y los documentos enlazados.
4. Confirma que `CHANGELOG.md` refleje cambios semánticos del prompt.
5. Revisa que no se hayan introducido referencias a archivos inexistentes.

## Definición de Terminado

Una tarea está terminada cuando:

- El prompt sigue siendo copiable y universal.
- La documentación del repo es coherente consigo misma.
- La página estática presenta el proyecto y permite copiar el prompt.
- Los cambios están registrados en `CHANGELOG.md` cuando corresponde.
- Las validaciones documentales fueron ejecutadas o se explica por qué no aplican.
