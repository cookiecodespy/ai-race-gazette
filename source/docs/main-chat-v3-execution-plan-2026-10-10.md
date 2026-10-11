# AI Race Gazette — Main Chat V3: plan de ejecución y cierre v1.0

**Fecha de apertura:** 2026-10-10, America/Santiago.  
**Estado:** plan adoptado; ninguna fase se da por terminada por el mero hecho de crear este documento.  
**Repositorio canónico:** `cookiecodespy/ai-race-gazette`, rama `main`.  
**Fuente operativa de tareas:** `source/ops/backlog.json` y su vista generada `source/docs/master-checklist.md`. Este documento no sustituye esos archivos ni autoriza la edición manual del checklist.

## 0. Propósito y criterio de honestidad

Trabajar en una secuencia intensiva desde Main Chat V3 con la meta de terminar v1.0 lo antes posible, idealmente dentro de la sesión de cierre del propietario. **No declarar la v1.0 por una fecha límite**: un producto con jornadas sin auditoría, legacy sin tratar, arte P0 sin resolver o pruebas rojas no está cerrado. Conservar siempre:
- Estado: terminado con evidencia / en curso / pendiente / bloqueado / descartado con razón.
- La diferencia entre software desplegado, funcionamiento editorial real y experiencia final usable.
- Una publicación por evento relevante, fuentes verificadas, Reporter V2, cero noticias inventadas y cero fechas cerradas sin doble auditoría.
- Un solo escritor a la vez sobre news.json; relectura y conciliación contra `main` antes de escribir.

## 1. Línea base auditada

**GitHub `main` observado:** `1cac5e295cfe8c2fcc94074ccb01a2e3bb4c8ccf` (cola visual sincronizada a las 23:26 UTC del 10/10). Esta SHA es solo una referencia temporal; al ejecutar cada lote, consultar HEAD de nuevo.

- Cola: **62 tareas**: 23 done, 5 in_progress, 30 queued, 3 blocked, 1 cancelled; **23 tareas P0 aún abiertas**.
- Fases operativas: P05 en curso; P06–P10 pendientes.
- Ledger: **40 días** (2026-09-01 a 2026-10-10), 24 partial, 16 pending; **0 complete bajo el cierre actual**; suma declarada de 123 artículos verificados por fecha, a reconciliar en cada publicación contra news.json real.
- Visual Desk: 123 solicitudes; 74 P0, 45 P1, 2 P2, 2 P3; 1 `complete`, 84 `brief-ready`, 38 `needs-art-direction`. Cinco assets registrados en manifest.
- Migración editorial: 47 piezas legacy consignadas en último informe; confirmar conteo vivo en datos antes de cada lote.
- Repositorio y portafolio separados. La tarea horaria existente `AI Race Gazette Newsroom` apunta a este repositorio, cada hora al minuto 21 (America/Santiago); la tarea antigua permanece deshabilitada. **No crear otra Scheduled Task**.
- Últimos checks examinados: validación editorial SUCCESS para commit `5fbedea`, pages deployment SUCCESS para `1cac5e2`. Un smoke público previo de 10/10 falló con 503 en `gazette-deployment.txt`; no dar ese control por aprobado hasta repetirlo y verificar el resultado público.

**Limitación de la observación:** estado GitHub y automatización comprobados; no equivale a una revisión humana independiente de todos los artículos, imágenes ni a un navegador público aprobado en este momento.

## 2. Método de trabajo para todas las fases

1. **Preflight:** GitHub HEAD; cola, coverage, estado CI y automatización; no repetir commits anteriores.
2. **Trabajo en lote pequeño verificable:** investigar fuentes, abrirlas, registrar evidencia y descartar rumores no sustentados. Agrupar cambios relacionados, no mezclar temas visuales con Newsroom.
3. **Commit coherente y seguro:** reconsultar `main`; deduplicar IDs y eventKeys; si cambió, recomputar y reconciliar. Nunca forzar sobrescritura. En publicación editorial cambiar juntos los dos JSON, los dos RSS y el ledger; cuando cierre una fecha incluir también `source/research/coverage-audit.json`.
4. **Validación:** datos, fuente/fecha, duplicados, RSS, coverage, reglas Reporter V2 y CI. Visual Desk: manifest, WebP, alt/crédito, crop, carga pública y ausencia de elementos engañosos.
5. **Certificación:** enlazar commit, CI y artefactos; pasar los IDs de backlog correspondientes a done solamente con evidencia; regenerar `master-checklist.md` mediante su script.
6. **Recuperación:** si la ejecución se interrumpe, volver a `source/docs/recovery-after-interruption.md`. Si la escritura programada exige aprobación, no hacer bucles: registrar paquete pendiente y mantener la tarea horaria habilitada.

## 3. Gates de ejecución (trabajo editorial y visual en paralelo, pero escrituras coordinadas)

### Gate G0 — Estabilidad operativa y migración (primero)
**Objetivo:** asegurar que nadie publique en el repositorio del portafolio y que la operación puede continuar durante el cierre.
- Verificar HEAD y exclusividad del repositorio canónico, árbol del portafolio (solo index.html y .gitignore), marcador de despliegue, permisos.
- Revisar mirrors JSON/RSS por hash + conteo RSS y ledger/coverage. Confirmar ausencia de anomalías; publicar cero cambios editoriales si no hay hechos nuevos.
- Verificar la única tarea horaria; obtener evidencia de ejecuciones posteriores al cutover. Observar tres ejecuciones sucesivas, al menos un no-op genuino cuando corresponda, y prueba de publicación/caso de bloqueo si ocurre.
- Resolver o clasificar el HTTP 503 del smoke: rerun reproducible, tolerancia acotada a error transitorio 503, sin ocultar fallo persistente.
- Ensayar conflicto de escritores y rollback **fuera de producción**, nunca mediante sobrescritura destructiva de `main`.
**Aprobación G0:** mirrors íntegros, último build/CI correcto, smoke público comprobado, tarea única confirmada y plan de recuperación validado. La publicación desatendida queda parcial si no se ha observado su evidencia completa.

### Gate G1 — P05: 8–14 de septiembre
**Objetivo:** cerrar todos los siete días del bloque bajo Research Backbone v1.
- `H-0814-SOURCES`, `H-0814-GOOGLE`, `H-GOOGLE-DEEPMIND-0814`, `H-SEP12-13`, `H-SEP08-11-REVERSE`, `H-SEP14-REVERSE`, `H-0814-GATE`.
- Resolver candidatos relevantes sin duplicar eventos; incluir emergentes, investigación/open-weight, agentes, chips, robótica, infraestructura y seguridad.
- Publicar Reporter V2 con contexto, técnica, precio/disponibilidad y fuentes cuando corresponda; enriquecer legacy de cada día preservando IDs.
- Documentar pasada por día/fuente y pasada inversa por actor/categoría, descartes, pendientes y razones.
**Aprobación G1:** 8–14 con `complete` o `reviewed-no-material-news` conforme a evidencia (sin inventar noticias), conteos válidos y CI verde.

### Gate G2 — P06: 15–21 de septiembre
**Objetivo:** investigación integral de siete fechas bajo el mismo estándar.
- Fechas actualmente pendientes no implican días sin novedades.
- Fuentes primarias + discovery abierto + pasada inversa; Reporter V2 de hallazgos materiales y migración de piezas legacy existentes.
**Aprobación G2:** 7/7 fechas cerradas con auditoría, RSS/mirrors consistentes y `H-1521-GATE` documentado.

### Gate G3 — P07: 22–30 de septiembre
**Objetivo:** reconstruir nueve fechas y enriquecer material ya publicado.
- Revisión por día, actor y categoría, incluyendo los casos parcialmente cubiertos.
- Revalidar fechas de anuncio vs fecha de publicación posterior, claims y etapa de acceso.
**Aprobación G3:** 9/9 fechas cerradas con evidencia y `H-2230-GATE` documentado.

### Gate G4 — P08: 1–10 de octubre y continuidad horaria
**Objetivo:** poner el archivo al día sin sacrificar la actualización en vivo.
- Auditar los diez días 1–10/oct (ampliar al día de cierre real si cambia la fecha).
- Resolver `H-OCT-GATE`, `OPS-NEWSROOM`, `OPS-RUN-PROOF`, `OPS-DAYCONTINUITY`, `OPS-CONCURRENCY-TEST`, `OPS-ROLLBACK-DRILL`.
- Registrar días sin novedad material como revisados solo tras el procedimiento completo, nunca por un cron vacío.
**Aprobación G4:** octubre cubierto con evidencia y automatización/conflictos/recuperación comprobados.

### Gate G5 — P09: Reporter V2 y Visual Desk
**Objetivo:** experiencia de periódico histórico, no simple lista de artículos.
- Migrar los ~47 legacy, o registrar excepciones editoriales genuinas, con recuento vivo.
- Primer lote de validación visual: 10–12 grabados originales en WebP, narrativamente específicos, empezando por MAPL-EMIT, AlphaGenome, ChatGPT Images 2.5 y NASA/IBM Luna; QA editorial/crop/crédito/alt/HTTP público.
- Escalar por prioridad hasta resolver **todos los P0 de imagen o justificar excepciones individuales válidas**. No confundir brief listo con archivo generado y publicado.
- Mantener fallback para breaking news, evitar repetición dominante de `hero.webp`, asegurar responsividad y lectura.
- No generar/pulir imágenes en el ciclo Newsroom horario. Art Desk solo cambia campos visuales y arte.
**Aprobación G5:** cero deuda legacy sin resolver; cero P0 visual sin arte aprobado o excepción editorial trazable; sitio web visualmente revisado en móvil/escritorio.

### Gate G6 — P10: auditoría final y release v1.0
**Objetivo:** confirmar el producto final, no solo que el código compila.
- Replay 1–7 sep, pasada inversa completa de las 40 fechas y revisión de las compañías/categorías.
- Control de fuentes/claims y fechas originales; revisión semántica de duplicados, medios, autoría y derechos.
- QA pública real de portada/lista, navegación artículo, filtros, días vacíos, móvil, teclado, contraste, lector de pantalla, enlaces, sitemap/canonical/OpenGraph, RSS, performance y assets.
- Validación final reproducible y sin tareas P0 abiertas; excepciones firmadas y publicadas en el reporte de release.
**Aprobación G6:** `QA-RELEASE-GATE` PASS y etiqueta/reporte v1.0 con hash, métricas, CI, smoke y lista de excepciones. Solo entonces anunciar «terminado».

## 4. Orden de ejecución inmediato desde este chat

- **Ahora:** documentar plan y baseline. G0 lectura y diagnóstico de smoke 503 sin tocar noticias. No modificar/dejar inactiva la tarea horaria.
- **Siguiente lote editorial:** H-0814-SOURCES + H-SEP12-13 + H-SEP08-11-REVERSE; decidir/publicar únicamente lo verificado y cerrar G1 después de segunda auditoría.
- **Siguiente lote visual en paralelo:** generar lote piloto de 10–12, inspeccionar y publicar bajo protocolo Visual Desk; ampliar solo cuando el QA del primer lote funcione.
- **Después:** G2, G3 y G4 con un lote por subbloque verificable; mantener Newsroom viva.
- **Finalmente:** cerrar deuda legacy/P0 visual, G6 y publicación de reporte. Nunca cambiar estados del backlog por anticipado.

## 5. Estrategia de velocidad sin sacrificar calidad

- Paralelizar **investigación de fuentes** y **dirección artística** porque sus entregables son independientes.
- Serializar escrituras sobre datos/manifest. Releer `main` antes de publicar cada lote.
- No agregar funciones cosméticas nuevas al alcance v1.0: cualquier sugerencia atractiva que no resuelva un gate se anota como backlog post-v1.
- Evitar recontar/rehacer piezas ya publicadas. Preferir enriquecer la existente con ID/eventKey estable.
- La tarea horaria sigue activa durante todo el cierre. Toda modificación de pruebas/código ocurre fuera del flujo editorial horario.
- El avance se mide por **fechas certificadas, artículos legacy resueltos, arte específico publicado, P0 cerrados y gates verificables**, no por horas invertidas ni número de commits.

## 6. Cuadro de seguimiento

| Gate | Backlog | Estado inicial | Evidencia obligatoria |
| --- | --- | --- | --- |
| G0 | OPS + cutover | Parcial | checks repo, CI, run horario, mirrors, smoke, recuperación |
| G1 | P05 | En curso | 8–14 sep cerrados; matriz y doble pasada |
| G2 | P06 | Pendiente | 15–21 sep cerrados y V2 |
| G3 | P07 | Pendiente | 22–30 sep cerrados y V2 |
| G4 | P08 | Pendiente | octubre al día + pruebas Newsroom |
| G5 | P09 | Pendiente | legacy resuelto, arte P0 aprobado o excepción |
| G6 | P10 | Pendiente | QA final y firma del release |

**No hace falta crear otra tarea ni un segundo proyecto**. Main Chat V3 coordina; GitHub y los registros de CI son la fuente de verdad para cada cierre.
