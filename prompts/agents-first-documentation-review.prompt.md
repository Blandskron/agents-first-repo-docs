Actúa como un agente senior de documentación técnica, arquitectura de repositorios y preparación de proyectos para agentes de IA.

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
   * `AGENTS.md` como archivo raíz principal para agentes.
   * `AGENTS.md` debe ser corto, operativo, accionable y enlazado.
   * No debe convertirse en una enciclopedia.
   * Debe indicar qué leer primero, qué puede modificar el agente, qué no puede modificar, qué comandos usar, cómo validar cambios y cuándo pedir aprobación humana.
   * El detalle profundo debe vivir en documentos especializados.

   Crea, si aplica al repositorio, esta estructura:
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
   ```

   También puedes crear documentación humana complementaria si el repositorio la necesita, por ejemplo:
   ```txt
   README.md
   docs/
     architecture/
       overview.md
     development/
       setup.md
     operations/
       deployment.md
   ```

5. Archivos permitidos y no permitidos
   * Debes crear `AGENTS.md`.
   * Puedes crear `CLAUDE.md`, `GEMINI.md` o `.github/copilot-instructions.md` solo si el repositorio lo justifica.
   * Si existen archivos de instrucciones de agente antiguos u obsoletos, evalúa si su contenido todavía sirve. Si sirve, migra la información útil a `AGENTS.md` o `docs/agent/`. Luego elimínalos o márcalos como obsoletos según corresponda.

6. Contenido mínimo esperado de `AGENTS.md`
   El archivo `AGENTS.md` debe incluir como mínimo:
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

   * `docs/agent/PERMISSIONS.md`: Debe explicar qué puede modificar el agente, qué no puede modificar, qué requiere aprobación humana y qué carpetas o archivos están protegidos.
   * `docs/agent/RUNBOOK.md`: Debe explicar cómo levantar el proyecto, cómo ejecutar servicios locales, cómo depurar errores comunes, cómo reiniciar o validar componentes, y procedimientos operativos reales del repositorio.
   * `docs/agent/TESTS.md`: Debe explicar la estrategia de pruebas, comandos reales de test, qué pruebas ejecutar según el tipo de cambio, qué hacer si una prueba falla, y la prohibición de eliminar pruebas para hacer pasar la suite.
   * `docs/agent/SECURITY.md`: Debe explicar el manejo de secretos, archivos sensibles, reglas de autenticación/autorización si aplica, datos sensibles, operaciones peligrosas, y acciones que requieren aprobación humana.
   * `docs/agent/DATA_SCHEMA.md`: Debe explicar las entidades principales, modelos, contratos de API, payloads relevantes, relaciones de datos, migraciones si aplica, y reglas de compatibilidad.
   * `docs/agent/CONFIG.md`: Debe explicar las variables de entorno, archivos de configuración, servicios externos, perfiles local/dev/prod si existen, y la configuración necesaria para ejecutar el proyecto sin exponer secretos.
   * `skills/*/SKILL.md`: Debe usarse solo para tareas repetibles y especializadas, por ejemplo:
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
   * Copies valores reales de `.env`.
   * Modifiques credenciales.
   * Elimines archivos sensibles sin aprobación.
   * Cambies configuración productiva sin justificación.
   * Inventes comandos que no existen.
   * Inventes arquitectura que el repositorio no tiene.
   * Crees documentación falsa solo para completar estructura.

   Si falta información, deja un marcador claro:
   ```md
   > Pendiente de confirmar: ...
   ```

10. Criterio de calidad y formato
    La documentación final debe ser:
    * **Clara y Directa:** Breve donde corresponda, operativa y accionable.
    * **Fácil de mantener y agnóstica:** Adaptada al stack real solo después de analizarlo.
    * **Enlaces Absolutos Clickeables:** Utiliza la sintaxis de links estándar con el esquema `file://` y rutas absolutas (ej. `[README.md](file:///c:/Users/name/project/README.md)`). En sistemas Windows, usa siempre barras inclinadas hacia adelante (`/`) y la letra de la unidad en minúscula.
    * **Uso de Alertas de GitHub:** Utiliza bloques de alerta de Markdown de estilo GitHub para destacar información crítica:
      * `> [!NOTE]` para explicaciones o contexto de fondo.
      * `> [!IMPORTANT]` para requisitos esenciales y pasos críticos.
      * `> [!WARNING]` para cambios disruptivos y problemas de compatibilidad.

11. Proceso de trabajo esperado
    Sigue este orden estricto:
    1. **Plan de Implementación:** Antes de realizar cualquier cambio o eliminación, propone un plan detallado de qué archivos se crearán, modificarán o eliminarán, y solicita la aprobación del usuario.
    2. **Leer estructura del repositorio.**
    3. **Identificar stack y propósito.**
    4. **Auditar documentación existente.**
    5. **Decidir qué conservar, migrar, reemplazar o eliminar.**
    6. **Crear nueva estructura documental.**
    7. **Actualizar README si corresponde.**
    8. **Crear `AGENTS.md`.**
    9. **Crear documentos especializados en `docs/agent/`.**
    10. **Crear `skills/*/SKILL.md` solo si aplica.**
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

Ejecuta esta tarea con criterio profesional. No hagas cambios cosméticos innecesarios. Prioriza una documentación útil, segura, mantenible y preparada para agentes de IA.
