# Agents First Repo Docs

Repositorio de prompts profesionales para auditar, limpiar y reconstruir la documentación de proyectos de software con enfoque **agents-first** y **human-friendly**.

El objetivo de este repositorio es mantener un prompt reutilizable que pueda ejecutarse sobre distintos microservicios, frameworks, lenguajes o arquitecturas, sin asumir tecnología al inicio. El agente primero debe leer el repositorio, entender su contexto real y luego crear documentación útil para agentes de IA y humanos.

## Objetivo

Este repositorio contiene un prompt diseñado para pedirle a un agente de IA que:

* Revise completamente un repositorio.
* Detecte documentación antigua, duplicada, incompleta u obsoleta.
* Migre información útil antes de eliminar archivos antiguos.
* Cree una nueva documentación basada en `AGENTS.md`.
* Genere documentación operativa para agentes autónomos.
* Mantenga el repositorio entendible para humanos.
* Evite crear documentación falsa o inventar arquitectura.
* No considere `GPT.md`, ya que está deprecado.

## Prompt principal

El prompt principal se encuentra en:

```txt
prompts/agents-first-documentation-review.prompt.md
```

Este archivo debe usarse como prompt base para cualquier repositorio que necesite una auditoría y reconstrucción documental.

## Casos de uso

Este prompt puede utilizarse en:

* Microservicios backend.
* Frontends.
* Aplicaciones fullstack.
* Repositorios de infraestructura.
* Repositorios de agentes IA.
* Repositorios de automatización.
* Proyectos monolíticos.
* Proyectos con múltiples servicios.
* Repositorios heredados con documentación desordenada.

## Estructura del repositorio

```txt
agents-first-repo-docs/
├── README.md
├── prompts/
│   └── agents-first-documentation-review.prompt.md
├── examples/
│   └── usage-example.md
├── docs/
│   └── prompt-versioning.md
├── CHANGELOG.md
└── LICENSE
```

## Formato del prompt

El prompt debe guardarse en formato Markdown:

```txt
.prompt.md
```

Se recomienda este formato porque permite:

* Mantener secciones claras.
* Usar listas ordenadas.
* Incluir árboles de carpetas.
* Documentar instrucciones técnicas.
* Versionar cambios fácilmente en Git.
* Reutilizar el prompt en distintos agentes IA.

## Uso recomendado

1. Copiar el contenido de:

```txt
prompts/agents-first-documentation-review.prompt.md
```

2. Pegarlo en el agente de IA que trabajará sobre el repositorio.

3. Ejecutarlo desde la raíz del proyecto que se quiere auditar.

4. Revisar los cambios propuestos por el agente antes de aprobar eliminaciones.

5. Confirmar que la nueva documentación creada sea coherente con el proyecto real.

## Resultado esperado en los repositorios auditados

Después de usar este prompt, el repositorio objetivo debería quedar con una estructura documental similar a:

```txt
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
README.md
```

No todos los archivos son obligatorios. El agente debe crear solo los documentos que tengan sentido según el repositorio analizado.

## Reglas importantes

El agente que use este prompt debe:

* Leer antes de modificar.
* No asumir el stack tecnológico.
* No inventar comandos.
* No inventar arquitectura.
* No eliminar documentación útil sin migrarla.
* No exponer secretos.
* No modificar credenciales.
* No crear `GPT.md`.
* Crear `AGENTS.md` como archivo principal para agentes.
* Mantener el README útil para humanos.

## Versionado del prompt

Cada cambio importante al prompt debe registrarse en `CHANGELOG.md`.

Se recomienda versionar el prompt de forma semántica:

```txt
v1.0.0
v1.1.0
v1.2.0
```

Ejemplo:

```txt
v1.0.0 - Primera versión estable del prompt agents-first.
v1.1.0 - Mejora en reglas de eliminación de documentación obsoleta.
v1.2.0 - Ajustes para proyectos multi-stack y microservicios.
```

## Licencia

Este repositorio puede usar una licencia abierta si el objetivo es compartir el prompt públicamente.

Licencia recomendada:

```txt
MIT
```

## Estado del proyecto

Este repositorio funciona como base reusable para estandarizar documentación técnica preparada para agentes de IA y equipos humanos.
