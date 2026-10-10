# Informe de separación — 10 de octubre de 2026

**Resultado: publicación independiente de Gazette verificada; cierre de migración BLOCKED por la coordinación de la tarea horaria de ChatGPT.** No se fusionó el PR #9 ni se eliminó contenido del repositorio original. Trabajo realizado por un único agente, con revisión de diff, pruebas y verificaciones públicas; sin auditor externo independiente.

## A. Estado de los proyectos

Gazette funciona desde su repositorio propio. El portafolio conserva su diseño y funciona en la raíz del dominio. Aún no se consideran totalmente separados en operación: el original conserva Gazette y sus cuatro workflows hasta comprobar el cambio de la tarea horaria y efectuar la conciliación final.

## B. Repositorios, commits e historial

- [Gazette](https://github.com/cookiecodespy/ai-race-gazette), `main`: conciliación y correcciones en [`6866299`](https://github.com/cookiecodespy/ai-race-gazette/commit/6866299ac132743ca2a10e35525475f70aa2ec9e); compilado automático en [`8e31e8b`](https://github.com/cookiecodespy/ai-race-gazette/commit/8e31e8bdb480a05f6b8414d545252ef02525c0df).
- [Portafolio](https://github.com/cookiecodespy/cookiecodespy.github.io), `main` observado: `1a723ef80459c1dca97ce20fcbe3500525b89cb3`. No se modificó su contenido.
- `archive/original-gazette-history`: 253 commits; su árbol final coincide en los 114 archivos con el subdirectorio Gazette del commit original `5298a9141a9066a814ff881b6024a62f27658906`.
- Se conservó `backup/before-gazette-separation-2026-10-09`. Se creó `backup/pre-cutover-2026-10-10` en ambos repositorios, apuntando respectivamente a `ca59c3f` en Gazette y `1a723ef` en el portafolio.
- [PR #9](https://github.com/cookiecodespy/cookiecodespy.github.io/pull/9): abierto, borrador, `DIRTY`; los cambios editoriales posteriores generan conflictos con las eliminaciones preparadas. Debe actualizarse después de coordinar la tarea. No se intentó fusionarlo.

## C. GitHub Pages

Configuración real del nuevo repositorio: `build_type=legacy`, `source.branch=main`, `source.path=/`, público, HTTPS obligatorio. URL preservada: https://cookiecodespy.github.io/ai-race-gazette/.

El [marcador público](https://cookiecodespy.github.io/ai-race-gazette/gazette-deployment.txt) devolvió HTTP 200 y la línea exacta `source_repository=cookiecodespy/ai-race-gazette`.

El [despliegue del compilado](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030424509) terminó `success`, commit `8e31e8b`. La API de Pages informó `built`, sin error. Una solicitud de despliegue redundante fue cancelada y sustituida por esta ejecución exitosa.

## D. Automatización y continuidad

Scripts, workflows y documentación operativa de Gazette apuntan al repositorio nuevo. Las referencias al repositorio original que quedan en auditorías/PRs/commits se conservan como evidencia histórica.

**No se pudo inspeccionar ni modificar la Scheduled Task de ChatGPT desde estas herramientas.** No se creó otra tarea ni se desactivó la existente. El original siguió recibiendo noticias después de la primera migración; no hay evidencia aquí de que la tarea ya haya cambiado de destino.

La instrucción exacta para ChatGPT, coordinación sin escritores simultáneos y procedimiento de cierre están en [operación y recuperación](operations-and-recovery.md#bloqueo-de-coordinación). Hasta entonces Gazette podría quedar atrasado si la tarea vuelve a escribir solamente en el original. La confirmación efectiva del prompt, ID, cadencia, próxima ejecución y única tarea activa es un gate obligatorio. Después debe repetirse la conciliación y comprobar una ejecución real o no-op válido.

## E. Integridad y validaciones

- 104 artículos iniciales preservados sin cambios; ocho incorporados desde el último `main` original: GlobalFoundries, UK ICO, China AI Plus, SemiAnalysis, Gemini Auto, Claude/evaluaciones, Firmus y Ultra.
- 112 artículos, 112 IDs únicos, 112 eventKeys únicos y 112 items RSS. `updatedAt=2026-10-10T04:21:12.000Z`, preservado de la publicación original.
- Fechas de artículos: 2026-09-01 a 2026-10-09; 23 fechas con artículos, 46 compañías. Ledger de 39 días contiguos: 23 `partial`, 16 `pending` y cero cerrados.
- Ambos JSON idénticos; ambos RSS idénticos; correspondencia semántica RSS/artículos, orden, fechas, fuentes y conteos diarios validados.
- 21 archivos binarios originales preservados byte por byte (3.696.850 bytes, contando copias fuente/publicación). Ninguna imagen o fuente perdida.
- 22 recursos públicos comparados con el checkout: HTML, marcador, ambos JSON, ambos RSS y todos los assets publicados. Todos HTTP 200 y contenido idéntico.
- `npm ci`: instalación reproducible, auditoría de dependencias sin vulnerabilidades reportadas. CI usa Node 22; la verificación local usó Node 26.
- 7 tests Node de noticias, 4 de Sites y 32 tests Python: PASS. Validators editorial, integridad, registro de fuentes, cobertura, Visual Desk estricto, backlog y checklist: PASS.
- Build de producción: PASS. Playwright/Chromium local y contra la URL pública: PASS para portada/lista, búsqueda, filtros combinados, persistencia de filtro, calendario, ediciones vacías, artículos V2, enlaces compartibles, ruta inexistente, teclado, paginación y fixture de 60 lanzamientos; reflow a 320/390/768/1280 px.
- Smoke público: origen, espejos, 112 noticias/RSS, imágenes y móvil sin errores JavaScript. Capturas revisadas de portada y artículo móvil.

Los hashes y resultados estructurados están en [evidencia JSON](cutover-evidence-2026-10-10.json). Estas comprobaciones validan preservación y estructura; no equivalen a una nueva verificación factual de las 112 noticias.

## F. Portafolio

https://cookiecodespy.github.io/ responde HTTP 200. El HTML público coincide byte por byte con `index.html` de `main`, del respaldo original y del PR #9: blob Git `4ce9eaa66cefeded9599c76aa1b27e647bdf3ed4`.

Título observado: «Tomas Sotz — AI & Automation Builder». H1: «I build AI systems that actually run.» Chromium desktop y móvil: sin errores JavaScript; desbordamiento horizontal móvil: 0 px. No se sustituyó su diseño ni se modificaron proyectos ajenos.

## G. CI/CD

| Workflow | Resultado | Evidencia |
|---|---|---|
| Build AI Race Gazette | PASS | [38030370914](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030370914) |
| Validate AI Race Gazette Content | PASS | [38030370943](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030370943) |
| Sync AI Race Gazette Visual Queue | PASS | [38030370931](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030370931) |
| Smoke Test AI Race Gazette Live | PASS | [38030370944](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030370944) |
| Verify Gazette dedicated GitHub Pages origin | PASS | [38030406804](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030406804) |
| Pages del frontend compilado | PASS | [38030424509](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38030424509) |

Los cuatro workflows de producto y el verificador permanente de origen permanecen activos. Los importadores/reparadores temporales ya estaban eliminados y no se reintrodujeron. Los cuatro workflows antiguos permanecen únicamente porque la limpieza está bloqueada.

## H. Problemas, correcciones y límites

- Pages ausente: habilitado con permisos reales y verificado por API/HTTP.
- Archivo desactualizado: recuperadas ocho noticias y sus metadatos; sin conflictos entre los 104 artículos compartidos.
- Publicador vulnerable a snapshots locales antiguos: ahora exige HEAD local igual a main remoto antes de subir blobs, valida integridad y publica también research/visual/ops; dos tests de regresión cubren el rechazo previo a escritura y el padre fijado.
- Publicación de builds de Actions: solicitud explícita de construcción Pages con `pages: write`, probada en CI sin credenciales nuevas.
- Responsive con nuevos actores: GlobalFoundries desbordaba tarjetas relacionadas. Se corrigió el ajuste de palabras sin rediseño. El test también espera que vuelva a mostrarse la portada antes de medirla.
- Un test Sites falló inicialmente por ejecutarlo antes del build; pasó en el orden correcto. El fallo móvil fue reproducido y corregido; no se omitieron checks.
- Deuda preexistente: 47 piezas legacy, 65 Reporter V2, 64 entradas P0 visuales y cobertura histórica abierta. Se mantuvo la política editorial. No se añadieron noticias inventadas ni funcionalidades.
- Sin auditor independiente: revisión y pruebas realizadas por el agente supervisor; no se afirma independencia de contexto.

## I. Checklist de cierre

| Gate | Estado |
|---|---|
| Repositorio propio, backups e historial preservado | PASS |
| Datos reconciliados al SHA original registrado | PASS |
| Pages del repositorio correcto y recursos íntegros | PASS |
| Tests, build, CI y navegador local/público | PASS |
| Portafolio original conservado y funcionando | PASS |
| Runbook de operación, recuperación y handoff | PASS |
| Tarea ChatGPT con destino exclusivo y continuidad probada | BLOCKED |
| Última conciliación después del cambio de tarea | BLOCKED |
| PR #9 actualizado/fusionado; original exclusivamente portafolio | BLOCKED |
| Ambos proyectos completamente independientes en producción | BLOCKED |

No hay fallos nuevos de migración pendientes conocidos en los checks ejecutados. El siguiente paso requiere la evidencia de la tarea desde ChatGPT, no nuevos permisos de GitHub.
