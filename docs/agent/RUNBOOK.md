# Runbook Operativo

Este repositorio no tiene backend, base de datos ni servicios persistentes. Su operación consiste en mantener un sitio estático para GitHub Pages y una biblioteca de prompts Markdown.

## Operación Local

Para revisar el sitio como lo servirá GitHub Pages:

```powershell
python -m http.server 8026 --bind 127.0.0.1
```

Luego abre:

```txt
http://127.0.0.1:8026/index.html
```

> [!NOTE]
> Si `python` no está en `PATH`, usa cualquier servidor estático equivalente. No hay build ni instalación de dependencias.

## Archivos de Entrada del Sitio

- `index.html`: estructura de la página.
- `index.css`: diseño visual responsive.
- `index.js`: navegación, carga de documentos y acciones de copiado.

## Validación Operativa

Antes de publicar cambios:

1. Servir la raíz del repositorio por HTTP local.
2. Confirmar que `index.html`, `index.css` e `index.js` respondan `200`.
3. Verificar que la pestaña del prompt cargue `prompts/agents-first-documentation-review.prompt.md`.
4. Verificar que el botón de copiar use el contenido visible del prompt.
5. Confirmar navegación por hash: `#prompt`, `#structure`, `#models`, `#example`, `#versioning`.

## Problemas Frecuentes

### El prompt no carga en navegador local con doble clic

Los navegadores suelen bloquear `fetch()` sobre archivos locales por políticas CORS.

Solución:

- Servir con HTTP local como se indica arriba.
- En GitHub Pages, `fetch()` funciona con rutas relativas.

### El sitio muestra contenido fallback

El fallback de `index.js` es secundario. Si aparece en GitHub Pages, revisa:

- Ruta del archivo Markdown.
- Mayúsculas/minúsculas del path.
- Que el archivo exista en el branch publicado.

### Enlaces internos rotos

Ejecuta la validación indicada en `docs/agent/TESTS.md` y corrige rutas relativas antes de cerrar.
