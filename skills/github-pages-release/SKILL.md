---
name: github-pages-release
description: Validar que el sitio estático del repositorio esté listo para publicarse en GitHub Pages.
---

# Skill: GitHub Pages Release

Usa esta skill cuando cambien `index.html`, `index.css`, `index.js` o documentos cargados por la página.

## Procedimiento

1. Confirma que la página no requiera build system.
2. Sirve la raíz del repositorio con un servidor HTTP local.
3. Abre `index.html`.
4. Verifica que el prompt principal cargue desde `prompts/agents-first-documentation-review.prompt.md`.
5. Verifica que las secciones de ejemplo y versionado carguen correctamente.
6. Prueba navegación por hash.
7. Comprueba que el botón de copiar use el texto visible.

## Comando Local Sugerido

```powershell
python -m http.server 8026 --bind 127.0.0.1
```

## Criterios de Aceptación

- `index.html` responde `200`.
- `index.css` responde `200`.
- `index.js` responde `200`.
- No hay errores de sintaxis en `index.js`.
- El contenido público describe el estándar actual.

## Resultado Esperado

Reportar estado de publicación listo o pendientes concretos antes de publicar.
