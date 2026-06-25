# Configuración

Este repositorio no requiere variables de entorno, instalación de dependencias ni servicios externos para funcionar.

## Configuración Requerida

No hay configuración obligatoria.

## GitHub Pages

Configuración esperada en GitHub:

- Source: branch principal del repositorio.
- Path: raíz del repositorio (`/`).
- Archivos servidos:
  - `index.html`
  - `index.css`
  - `index.js`
  - `prompts/agents-first-documentation-review.prompt.md`
  - documentación Markdown enlazada.

## Desarrollo Local

El sitio puede abrirse mediante servidor estático local. Consulta `docs/agent/RUNBOOK.md`.

## Dependencias Externas del Sitio

El HTML carga recursos públicos de CDN:

- Google Fonts.
- Font Awesome.

> [!IMPORTANT]
> Si el proyecto necesita funcionar completamente offline, reemplaza esas dependencias por assets locales y actualiza este documento.

## Variables de Entorno

No aplica.

> Pendiente de confirmar: si en el futuro se agrega automatización de publicación, documentar aquí las variables requeridas sin exponer valores reales.
