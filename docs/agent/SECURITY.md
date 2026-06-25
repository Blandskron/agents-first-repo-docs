# Seguridad

Este repositorio es público por diseño y no debe contener secretos. Su principal riesgo no está en ejecución de código productivo, sino en publicar instrucciones inseguras o ejemplos que otros devs copien a sus proyectos.

## Secretos

Prohibido:

- Agregar `.env` con valores reales.
- Incluir tokens, API keys, certificados, contraseñas o credenciales en ejemplos.
- Copiar secretos desde repositorios auditados al prompt, README o docs.

Permitido:

- Usar nombres de variables sin valores reales.
- Usar placeholders como `<API_KEY>` o `PENDIENTE_DE_CONFIGURAR`.
- Documentar reglas de manejo de secretos.

## Superficie Sensible

Requiere aprobación humana:

- Cambios en `LICENSE`.
- Cambios en reglas de seguridad del prompt maestro.
- Cambios que permitan eliminar documentación, tests o configuración sin revisión.
- Cambios en instrucciones de publicación de GitHub Pages.

## Seguridad del Prompt

El prompt maestro debe mantener estas reglas:

- No inventar arquitectura ni comandos.
- No imprimir secretos.
- No modificar credenciales.
- No cambiar configuración productiva sin aprobación.
- No eliminar documentación útil antes de migrarla.

## Datos Personales

No agregues ejemplos con datos personales reales. Usa datos ficticios claramente marcados.

## Revisión Antes de Publicar

Antes de cerrar una tarea:

1. Buscar patrones sensibles: `api_key`, `secret`, `token`, `password`, `private_key`.
2. Confirmar que los ejemplos no contengan valores reales.
3. Confirmar que el prompt mantenga límites explícitos para agentes.
