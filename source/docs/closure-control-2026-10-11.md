# AI Race Gazette — control maestro de cierre (11 octubre 2026)

> Documento de recuperación y decisión, NO marcador en tiempo real. Auditoría sobre `main` `7524f98258744900a478ccaceeee2578834c98ef`, 2026-10-11 18:21:55 UTC. La próxima sesión debe recalcular los indicadores desde el repositorio, no repetir estas cifras como actuales.
>
> Las fuentes operativas siguen siendo `source/docs/gazette-v1-standard.md`, `source/ops/backlog.json`, `source/docs/history-coverage.json`, `source/research/coverage-audit.json`, `source/visual/image-queue.json` y `data/news.json`.

## Dictamen del corte

**Operación técnica: funcional y con CI/Pages comprobados. Producto editorial v1.0: NO aprobado.**

| Subsistema | Resultado contrastado |
|---|---|
| Repo canónico | `cookiecodespy/ai-race-gazette` / `main`, portafolio excluido |
| Datos | 159 publicaciones según sumatoria de `verifiedArticles` del calendario editorial |
| Cobertura diaria | 41 fechas (1 septiembre–11 octubre); 38 `partial`, 3 `pending`, 0 `complete`, 0 `reviewed-no-material-news` |
| Fechas pendientes | 2026-09-26, 2026-10-03, 2026-10-11; `pending` no implica ausencia de hechos |
| Espejos | Los dos `news.json` comparten SHA `0b5c393e194f8824c720d9203b2e31d97a446d66`; los dos RSS SHA `796a602ab891ae98dcb0b817281f06dfb735d0a2` |
| Ledger investigación | 41 jornadas; muchas aún sin fuentes/categorías/pasada inversa verificadas. No equiparar mera reconciliación de conteos a certificación editorial |
| Visual Desk | Cola de 159 entradas, 1 `complete`, 28 prioridades P0, registro de 5 assets |
| Backlog | 82 tareas: 50 `done`, 8 `in_progress`, 20 `queued`, 2 `blocked`, 2 `cancelled` |
| Build editorial | [Build PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38163424466), [Validate Content PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38163424635), [Visual Sync PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38163424528) sobre el commit editorial `7efebd14` |
| Pages | [Deploy PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38163500923) sobre bundle `7524f982`; esto no sustituye auditoría visual de navegador real en todos los dispositivos |
| Newsroom | Una única tarea editorial **activa**, hora local de Santiago minuto 21, destino solo repo nuevo; tarea horaria antigua deshabilitada. No se acredita continuidad autónoma completa solo por su configuración |
| Rendimiento | `news.json` ~2,56 MB en bruto, descargado por la portada incluso al no abrir reportajes; corrección separada [PR #2](https://github.com/cookiecodespy/ai-race-gazette/pull/2), en validación, no desplegada a este corte |

## Brechas que impiden cerrar v1.0

1. **Histórico P05–P08 — P0:** doble auditoría real de cada fecha: fuentes primarias, discovery abierto, categorías, candidatos descartados y revisión inversa. No marcar fechas `complete` sin evidencia; primero 8–14 Sep, luego 15–21, 22–30 y octubre. Reabrir 1–7 según Research Backbone v1.
2. **Reporter V2 — QA factual P1:** 159/159 artículos constan como V2, 0 legacy, 0 bajo 900 palabras (auditoría del CI 11-oct; mediana 1.534 palabras). Permanecen por corroborar fechas y afirmaciones: 76 piezas tienen solo una fuente primaria enlazada (no implica falsedad). La longitud no prueba por sí sola calidad.
3. **Visual Desk — P0:** producir, revisar y publicar arte específico para las 28 prioridades P0; cumplir regla de reutilización dominante <=30% y atribución correcta. No marcar briefs como arte completado.
4. **Continuidad operativa — P0:** documentar al menos 3 corridas desatendidas reales de Newsroom con publicaciones o no-op comprobable, integridad atómica, ausencia de sobrescritura por carreras y recuperación; no inferirlo de la última hora ejecutada.
5. **QA y lanzamiento P10 — P0:** inspección factual de fechas/claims, SEO social real, accesibilidad, móvil, tiempo de carga y ejercicio de rollback; usar el release gate estricto al final.

## Organización para terminar, sin alargar el proyecto artificialmente

**Carril editorial:** Histórico primero por bloque de fechas. Una sesión crea evidencias y publica solo eventos nuevos verificados o enriquece reportajes existentes. Completar fuentes/categorías/pasada inversa en el mismo bloque antes de cerrarlo.

**Carril técnico:** Corregir fallos que afecten usabilidad o fiabilidad, no añadir features por curiosidad. La mejora de carga diferida es necesaria por peso real de la portada. Nuevas ideas van a backlog salvo requisito verificable.

**Carril visual:** Lote de grabados originales P0, sin simular imágenes documentales. Producir imágenes con fuentes, QA y registro canónico; no frenar la publicación editorial por falta de arte.

**Carril de verificación:** Publicar `release_readiness.py` al final de cada bloque, junto con enlaces a CI, evidence y SHA. Diferenciar `done`, `in_progress`, `queued` y `blocked` según `backlog.json`.

## Regla de traspaso de chat

El siguiente chat no pregunta por el último resumen: lee HEAD y `source/docs/recovery-after-interruption.md`, corre `source/scripts/release_readiness.py`, compara cinco archivos editoriales, consulta checklist/ledger/Visual Desk, y continúa la primera tarea bloqueante de P05–P10. Nunca crea una segunda Newsroom ni escribe en `cookiecodespy/cookiecodespy.github.io`.

**Definición de terminado:** 4/4 gates medibles de `release_readiness.py` PASS más gates independientes de autonomía/rollback, SEO, accesibilidad y firma editorial. CI verde por sí solo no cierra el lanzamiento.


## Cierre técnico verificado posteriormente — 11 octubre 2026

- PR de rendimiento [#2](https://github.com/cookiecodespy/ai-race-gazette/pull/2) integrado a `main` en `cb5de8bf28885d273ca91e14e4993fc6ab1900fc` después de [CI PR PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38166547065).
- [Build main PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38166668611), bundle `75ac5ab92fad92cf9c50a364726ff800cec25e64`, [Pages PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38166740122).
- La publicación contiene 159 archivos JSON por reportaje y `data/news-index.json` de **162.395 bytes** (objetivo <500 KB) frente a 2.561.682 bytes del archivo editorial completo. Los dos `news.json` conservan su SHA idéntico `0b5c393e194f8824c720d9203b2e31d97a446d66`.
- Tarea `PERF-ARCHIVE-LAZY-DELIVERY` cerrada con CI, navegador y Pages comprobados. La auditoría manual integral `QA-WEB` continúa pendiente.
- El informe automático de calidad de la compilación arrojó **159 V2, 0 legacy, 0 artículos inferiores a 900 palabras, mediana de 1.534 palabras**, sin certificar factualmente todos los claims.
- No interpretar estos números como datos en tiempo real para futuras sesiones: siempre actualizar desde main.
