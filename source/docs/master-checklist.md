# AI Race Gazette — checklist maestro de cierre

> Archivo generado desde `source/ops/backlog.json`. Edita la cola, no las casillas de esta página. Regenera con `python3 scripts/refresh_master_checklist.py`.

## Línea base histórica (no métricas vivas)

- Apertura: 2026-10-08.
- Archivo inicial: 53 artículos, 5 Reporter V2 y 48 legacy.
- Calendario inicial: 37 jornadas, 7 cerradas y 30 abiertas.
- Commit base: `5bc6358c50002d6dee4db567494665f7fc9d014f`.

## Progreso de la cola

- 6 fases; 78 tareas; 38 completadas; 6 en curso; 32 pendientes o bloqueadas; 2 descartadas con razón.

## P05 — 8–14 septiembre: reconstrucción Reporter V2

**Estado:** in_progress. **Gate:** Cada fecha auditada por fuentes + categorías + segunda pasada y artículos extensos

- [x] **H-SEP08-IMAGES25** · P0 · done — ChatGPT Images 2.5: informe Reporter V2
  - Criterio: V2, fuente primaria, mirrors, RSS y coverage
  - Commit: `5bc6358c50002d6dee4db567494665f7fc9d014f`
- [x] **H-SEP08-MISTRAL** · P0 · done — Mistral: ronda Serie D por €3.000 millones
  - Criterio: Publicar V2 con términos atribuidos, fuentes oficiales y contexto competitivo
  - Evidencia: https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/
- [x] **H-SEP10-GPTLIVE** · P0 · done — OpenAI: GPT-Live-1 API y evaluación de voz
  - Criterio: Publicar V2 técnico y precio/estado correctamente atribuidos
  - Evidencia: https://openai.com/index/introducing-gpt-live-1-in-the-api/
- [x] **H-SEP09-FORTRAN** · P1 · done — Investigar Mistral: agentes para Fortran
  - Criterio: Evaluar materialidad, fecha y fuentes; publicar V2 o descartar con motivo
  - Evidencia: https://mistral.ai/news/legacy-code-modernization/
- [x] **H-SEP10-CLOUDERA** · P1 · done — Investigar alianza Mistral–Cloudera
  - Criterio: Confirmar efectos técnicos y fecha, publicar V2 o descartar con motivo
  - Evidencia: https://mistral.ai/news/mistral-x-cloudera/
- [ ] **H-0814-SOURCES** · P0 · in_progress — Barrido oficial, emergentes y categorías 8–14
  - Criterio: Registro por día/fuente/sector, candidatos y descartes sin inventar métricas
- [ ] **H-0814-GOOGLE** · P0 · in_progress — Revisar Google/DeepMind día a día 8–14
  - Criterio: Comprobar novedades relevantes, fechas y completar matriz
  - Evidencia: https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai
- [x] **H-SEP10-LEGACY** · P1 · done — Enriquecer Gemini para Windows
  - Criterio: Conservar id/eventKey, recuperar fuentes y publicar informe Reporter V2
  - Evidencia: https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-windows/
- [ ] **H-0814-GATE** · P0 · blocked — Cerrar estados 8–14 con doble auditoría
  - Criterio: Todos los candidatos resueltos, evidencia de dos pasadas, cobertura y RSS consistentes
  - Depende de: H-0814-SOURCES, H-0814-GOOGLE, H-SEP08-MISTRAL, H-SEP10-GPTLIVE, H-SEP12-13, H-GOOGLE-DEEPMIND-0814
- [ ] **H-GOOGLE-SEP09-AIPLANS** · P1 · cancelled — Evaluar Google AI plans: nuevas herramientas y acceso
  - Criterio: Verificar fecha, independencia, materialidad, duplicados y fuentes; publicar Reporter V2 o descartar documentando la decisión.
  - Fecha investigada: 2026-09-09
  - Evidencia: https://blog.google/products-and-platforms/products/google-one/fall-2026-ai-plan-updates/
  - Motivo de descarte: El texto del 9 Sep es una recopilación de funciones con anuncios originales anteriores: voz Gmail/Docs/Keep del 3 Sep, Google Pics del 1 Sep, Sheets canvas del 13 Ago y Chrome en Gemini Spark del 30 Jul. No se verificó un lanzamiento material único que justifique artículo del 9 Sep. Reabrir únicamente ante prueba de nuevo acceso/cambio independiente fechado ese día.
- [x] **H-GOOGLE-SEP14-DATAFLOW** · P1 · done — Evaluar Google Cloud Dataflow con GPU Blackwell
  - Criterio: Verificar fecha, independencia, materialidad, duplicados y fuentes; publicar Reporter V2 o descartar documentando la decisión.
  - Fecha investigada: 2026-09-14
  - Evidencia: https://cloud.google.com/blog/products/data-analytics/new-dataflow-features-to-enable-large-scale-ai-workloads/
- [ ] **H-GOOGLE-SEP09-GARTNER** · P1 · cancelled — Evaluar reconocimiento Gartner Google Gemini Enterprise
  - Criterio: Verificar fecha, independencia, materialidad, duplicados y fuentes; publicar Reporter V2 o descartar documentando la decisión.
  - Fecha investigada: 2026-09-09
  - Motivo de descarte: Reconocimiento en ranking de proveedor; el anuncio no introduce una capacidad técnica nueva ni disponibilidad material. Conservado como contexto, no pieza independiente.
- [x] **H-GOOGLE-SEP08-GTIG** · P0 · done — Google GTIG: informe de amenazas con agentes (8 Sep)
  - Criterio: Informe Reporter V2 extenso, fuente oficial, recomendaciones defensivas y fecha correcta.
  - Evidencia: https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai
- [ ] **H-GOOGLE-DEEPMIND-0814** · P1 · in_progress — Segunda revisión de Google DeepMind 8–14 septiembre
  - Criterio: Revisar todas las fechas en blogs, papers y repositorios DeepMind, registrar materialidad/duplicados y descartar con justificación.
- [x] **H-GOOGLE-SEP14-BIGQUERY** · P0 · done — BigQuery anuncia seis funciones de análisis aumentado para agentes
  - Criterio: Verificar fuentes originales, fecha, claims y publicar Reporter V2 profundo con evidencias.
  - Fecha investigada: 2026-09-14
  - Evidencia: https://cloud.google.com/blog/products/data-analytics/bigquery-augmented-analytics-tvfs
- [x] **H-GOOGLE-SEP09-MAPL** · P0 · done — MAPL‑EMIT publicado en fecha original del 1 de septiembre
  - Criterio: Verificar fuentes originales, fecha, claims y publicar Reporter V2 profundo con evidencias.
  - Fecha investigada: 2026-09-01
  - Evidencia: https://research.google/blog/mapping-global-methane-emissions-from-space-with-deep-learning/
- [x] **H-OPENAI-SEP11-HABITAT** · P0 · done — OpenAI Habitat: escalado y migración Python-Rust
  - Criterio: Revisar anuncio oficial y su cambio material, publicar V2 si corresponde; deduplicar y documentar estado de acceso.
  - Fecha investigada: 2026-09-11
  - Evidencia: https://openai.com/index/scaling-storage-one-billion-users-part-one/
- [x] **H-OPENAI-SEP11-ROSALIND** · P0 · done — GPT‑Rosalind sale de preview para organizaciones elegibles
  - Criterio: Revisar anuncio oficial y su cambio material, publicar V2 si corresponde; deduplicar y documentar estado de acceso.
  - Fecha investigada: 2026-09-11
  - Evidencia: https://openai.com/index/introducing-gpt-rosalind/
- [x] **H-OPENAI-SEP11-GPT-MIGRATION** · P0 · done — ChatGPT anuncia retiro futuro de custom GPTs y migración a plugins
  - Criterio: Revisar anuncio oficial y su cambio material, publicar V2 si corresponde; deduplicar y documentar estado de acceso.
  - Fecha investigada: 2026-09-11
  - Commit: `8f09831ae457dabdf757391ef4a2885b35dd3be5`
  - Evidencia: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- [ ] **H-SEP12-13** · P0 · in_progress — Cobertura exhaustiva del 12 y 13 de septiembre
  - Criterio: Fuentes por día, discovery abierto y pasada inversa; publicar V2 o registrar sin novedades con evidencia.
- [ ] **H-SEP08-11-REVERSE** · P0 · queued — Segunda pasada por compañías del 8 al 11 septiembre
  - Criterio: Revisar laboratorios, startups, open source, chips, modelos, seguridad y producto; resolver pendientes.
- [ ] **H-SEP14-REVERSE** · P0 · queued — Segunda pasada del 14 septiembre después de BigQuery y Dataflow
  - Criterio: Confirmar otros anuncios relevantes del día y registrar revisados/descartes antes de cerrar.
- [x] **H-SEP12-REWEIGHT** · P1 · done — Evaluar ReWeight de robótica (12 Sep)
  - Criterio: Corroborar arXiv, reproducibilidad y valor editorial; Reporter V2 o descarte con evidencia.
  - Fecha investigada: 2026-09-12
  - Commit: `6e634ec1493f21a35c62ca92e21f8c738b0e86a5`
  - Evidencia: https://arxiv.org/abs/2609.13851
- [x] **H-SEP08-ALPHAGENOME** · P0 · done — Google DeepMind AlphaGenome Atlas
  - Criterio: Reportaje V2, fuente primaria, límites clínicos y sincronización de publicación.
  - Fecha investigada: 2026-09-08
  - Commit: `ff2d3e0775cd8191362f54684df3fb9b052e918f`
  - Evidencia: https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/
- [x] **H-SEP12-ANTHROPIC** · P0 · done — Dario Amodei: evaluación independiente
  - Criterio: Reportaje V2 sobre propuesta con fecha y compromiso diferenciados, CI verde.
  - Fecha investigada: 2026-09-12
  - Commit: `ff2d3e0775cd8191362f54684df3fb9b052e918f`
  - Evidencia: https://darioamodei.com/post/we-must-pace-the-frontier
- [ ] **H-SEP12-JUMPSTART** · P1 · queued — Investigar JumpStart: 160.000 entrenamientos para aprendizaje offline
  - Criterio: Verificar versión original arXiv, fecha real de disponibilidad de suite de modelos/código, materialidad e independencia; publicar Reporter V2 si corresponde o justificar descarte con evidencia.
  - Fecha investigada: 2026-09-12
- [x] **H-P05-V3-FOUR-STORIES** · P0 · done — Publicar cuatro omisiones verificadas del 8 y 14 septiembre
  - Criterio: Meta seguridad Muse; Waymo Las Vegas y Tokio; Perplexity Portable Computer Windows. Reporter V2, fuentes oficiales, RSS/JSON consistentes y CI.
  - Commit: `aaa447688749545f26c247fb04ddd1a53536e6fa`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38099318855
- [x] **H-P05-GOOGLE-TOOLGRAD** · P1 · done — Reportaje ToolGrad Google 10 septiembre
  - Criterio: Publicación o validación realizada con evidencia, sin cerrar las fechas históricas por sí sola.
  - Commit: `e4fb631024dc887c16d80f89323368e65953b298`
  - Evidencia: https://research.google/blog/toolgrad-efficient-tool-use-dataset-generation-with-textual-gradients/

## P06 — 15–21 septiembre: reconstrucción Reporter V2

**Estado:** queued. **Gate:** Siete días revisados con documentación, artículos V2 y cierre verificable

- [ ] **H-1521-GATE** · P0 · queued — Reconstruir 15–21 septiembre
  - Criterio: Siete fechas complete/reviewed-no-material-news con evidencia y Reporter V2
- [x] **H-P06-V3-THREE-STORIES** · P0 · done — Recuperar eventos verificables de los días 15, 17 y 21 septiembre
  - Criterio: Waymo y Allianz, Waymo Singapur y Microsoft Global AI Diffusion publicados con evidencia y ledger parcial, sin declarar semana completa.
  - Commit: `d66d323c6be623252bdbba6f64a122ef0b2ceb95`
  - Evidencia: https://blogs.microsoft.com/on-the-issues/2026/09/21/the-continued-state-of-global-ai-diffusion-in-2026/
- [x] **H-P06-GOOGLE-RESEARCH-SEP15-18** · P0 · done — Recuperar investigaciones Google sobre búsqueda rápida y logística
  - Criterio: Retrieve-for-Train (15 Sep) y MilleMiglia (18 Sep), Reporter V2, fuente primaria y publicación CI validada.
  - Commit: `5c5e00d8da126c378fe638a49d304db648df7e96`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38099838309
- [x] **H-SEP16-OPENAI-SAFETY-WORK** · P0 · done — Recuperar los dos informes originales de OpenAI del 16 septiembre
  - Criterio: Publicar Reporter V2 sobre protocolo y seis casos de desalineación y sobre estudio de tareas laborales, con fechas originales, límites, JSON/RSS/ledger y validación editorial.
  - Fecha investigada: 2026-09-16
  - Commit: `56014e74533dfb16844e6a045540cd297f3e8833`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38101568267
- [x] **H-P06-LEARNING-INTERACTIVES** · P1 · done — Reportaje Google Learning Interactives 17 septiembre
  - Criterio: Publicación o validación realizada con evidencia, sin cerrar las fechas históricas por sí sola.
  - Commit: `e4fb631024dc887c16d80f89323368e65953b298`
  - Evidencia: https://research.google/blog/the-future-of-practice-enabling-teachers-to-create-learning-interactives-with-generative-ui/

## P07 — 22–30 septiembre: reconstrucción y legacy

**Estado:** in_progress. **Gate:** Nueve fechas cerradas con fuentes y piezas antiguas enriquecidas

- [ ] **H-2230-GATE** · P0 · queued — Reconstruir 22–30 septiembre
  - Criterio: Nueve fechas cerradas y artículos previos enriquecidos
- [x] **H-P07-GOOGLE-MICROSOFT-SEP24-25** · P0 · done — Recuperar Google vídeo largo y Microsoft Code/Autopilot
  - Criterio: Reportajes separados para investigación Google 24 Sep y Microsoft Copilot Code y Autopilot 25 Sep, con preview y acceso distinguidos, sin declarar cierre diario.
  - Commit: `2f1d4dcbb5ea30c066644ca44453d32f643af3a0`
  - Evidencia: https://research.google/blog/coherent-long-form-video-generation/
- [x] **H-SEP27-LAMBDA-MAYES-DC** · P1 · done — Recuperar anuncio Lambda del 27 Sep sobre nuevo centro de datos Oklahoma
  - Criterio: Fuente primaria, fecha de anuncio separada de operación real, Reporter V2, pares JSON/RSS íntegros, ledger y CI verde.
  - Fecha investigada: 2026-09-27
  - Commit: `95f58ba9d6dc355c9a7fd01f72858e854f118678`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38101856248
- [x] **H-P07-MICROSOFT-EVILTOKENS** · P1 · done — Reportaje Microsoft EvilTokens 22 septiembre
  - Criterio: Publicación o validación realizada con evidencia, sin cerrar las fechas históricas por sí sola.
  - Commit: `e4fb631024dc887c16d80f89323368e65953b298`
  - Evidencia: https://blogs.microsoft.com/on-the-issues/2026/09/22/disrupting-eviltokens-the-ai-chatbot-built-for-cybercrime/
- [ ] **H-P07-MENTALHEALTHBENCH-SEP23** · P1 · queued — MentalHealthBench de OpenAI 23 septiembre
  - Criterio: Verificar el trabajo original, escribir Reporter V2 y actualizar archivos y registro de investigación de forma atómica antes de marcar como publicado.
  - Fecha investigada: 2026-09-23
- [ ] **H-P07-DIFFUSION-CONTROLLER-SEP29** · P1 · queued — Diffusion Controller de Google Research 29 septiembre
  - Criterio: Verificar el trabajo original, escribir Reporter V2 y actualizar archivos y registro de investigación de forma atómica antes de marcar como publicado.
  - Fecha investigada: 2026-09-29

## P08 — Octubre hasta la fecha y Newsroom continua

**Estado:** queued. **Gate:** Octubre al día; publicación programada verificada; controles editoriales automáticos, concurrencia y rollback probados.

- [ ] **H-OCT-GATE** · P0 · queued — Completar 1 octubre hasta fecha actual
  - Criterio: Jornadas reales cerradas, sin inventar noticias ni fechas futuras
- [ ] **OPS-NEWSROOM** · P0 · queued — Probar publicación desatendida de Scheduled Task
  - Criterio: Demostrar commit horario autónomo o documentar aprobación pendiente
- [ ] **OPS-DAYCONTINUITY** · P1 · queued — Cerrar huecos de ledger en días nuevos sin noticias
  - Criterio: Calendario al día incluso cuando la tarea horaria hace no-op
- [x] **OPS-CONTENT-CI** · P0 · done — Validación CI de cambios solo editoriales
  - Criterio: Workflow separado verifica ambos JSON, ambos RSS, fechas, eventKeys, conteos y reglas editoriales con ejecución real.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37795004760
- [x] **OPS-LIVE-CHECKLIST** · P0 · done — Generar y verificar checklist desde JSON
  - Criterio: Un solo JSON gobierna casillas, estados, razones y progreso; script determinista y comprobación --check en CI.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37797427043
- [ ] **OPS-RUN-PROOF** · P0 · queued — Demostrar tres ejecuciones reales de Newsroom horario
  - Criterio: Verificar al menos tres ejecuciones consecutivas, no-op silencioso y publicación autorizada cuando aparezca un evento.
- [ ] **OPS-CONCURRENCY-TEST** · P0 · queued — Prueba de colisión Newsroom y Backfill
  - Criterio: Simular dos writers, comprobar SHA conflict/rebase y ausencia de pérdida o duplicación en JSON/RSS.
- [ ] **OPS-ROLLBACK-DRILL** · P1 · queued — Ensayar rollback y restauración de datos/arte
  - Criterio: Documentar y ensayar restauración desde Git con evidencia, sin afectar la raíz de cookiecodespy.github.io.
- [x] **OPS-RESUME-SAFE** · P0 · done — Recuperación verificable después de interrupciones de chat
  - Criterio: Documentar y probar recuperación desde commits, GitHub Actions y backlog sin duplicar publicaciones.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/blob/main/ai-race-gazette/source/docs/recovery-after-interruption.md
- [x] **OPS-STALE-BUILD-GUARD** · P0 · done — Evitar despliegues de bundles obsoletos por carreras de GitHub
  - Criterio: CI impide publicar dist si fuentes React, scripts de compilación o assets cambiaron desde checkout.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37798281532
- [x] **OPS-RESEARCH-LEDGER-RECONCILE** · P1 · done — Conciliar registro de investigación y comprobarlo con CI
  - Criterio: Publicación o validación realizada con evidencia, sin cerrar las fechas históricas por sí sola.
  - Commit: `0030af86d257ef568abfbcf90529575470063f92`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38102880261

## P09 — Enriquecimiento de legacy y Visual Desk

**Estado:** queued. **Gate:** Artículos legacy enriquecidos o exceptuados con evidencia; ilustraciones específicas de titulares importantes y estándares visuales.

- [ ] **ED-LEGACY48** · P0 · in_progress — Migrar todos los artículos legacy restantes a Reporter V2
  - Criterio: Cero legacy sin excepciones justificadas y fuentes comprobadas; quedan 37 de 143 artículos al corte. Conservar IDs y validar cada migración.
- [ ] **VIS-PREMIUM** · P1 · queued — Crear lote visual periódico de grabados específicos
  - Criterio: Disminuir el fallback repetido, resolver P0 de imagen y mantener créditos
- [ ] **VIS-GENERATION** · P1 · queued — Explorar generación automática por noticia con QA
  - Criterio: Pipeline de imágenes, permisos y costes probados antes de activar
- [ ] **VIS-P0-ORIGINALS** · P0 · queued — Lote de grabados específicos para reportajes prioritarios
  - Criterio: Resolver briefs P0 con WebP originales, credit/alt y prueba visual; reducir las 46 reutilizaciones hero.
- [ ] **VIS-REUSE-RULES** · P1 · queued — Política cuantificada de reutilización visual
  - Criterio: Definir presupuesto visual, tipos de grabado, niveles de especificidad y umbral de repetición con QA.
- [ ] **ED-LEGACY-BATCH** · P0 · queued — Migración Reporter V2 por lotes de artículos antiguos
  - Criterio: Cerrar historias legacy por semana/actor, revisar fuentes y no alterar identificadores ni inventar contenido.
- [ ] **VIS-AUTO-QUEUE-REFRESH** · P1 · in_progress — Sincronizar cola visual tras publicaciones Newsroom
  - Criterio: Refrescar image-queue y asset-manifest automáticamente, sin pisar noticias ni commits vacíos y con tres ejecuciones validadas.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37798603043
- [x] **ED-P09-V3-FOUR-LEGACY** · P0 · done — Migrar cuatro artículos cortos originales del 1–2 septiembre
  - Criterio: Waymo, Meta Muse Voice, Perplexity Hybrid Mac y Meta Muse Spark migrados a Reporter V2 conservando IDs y fuentes originales.
  - Commit: `96f2141a2f6084dc41833f5ccd111af7b220616a`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38099084180
- [x] **ED-SEP01-VIDEO-FALCON-V2** · P1 · done — Migrar Gemini agentic video y Falcon Guardian a Reporter V2
  - Criterio: Conservar IDs y fuentes originales, ampliar ambos informes con detalles técnicos, disponibilidad, límites y pruebas de integridad.
  - Fecha investigada: 2026-09-01
  - Commit: `e4dacc14b1692092add71ab294b40605da2c9be6`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38101653220
- [x] **ED-P09-FOUR-LAUNCHES-V2** · P1 · done — Ampliar Claude 5.5 y OpenAI DevDay a Reporter V2
  - Criterio: Publicación o validación realizada con evidencia, sin cerrar las fechas históricas por sí sola.
  - Commit: `ba928730edbfad01c3fa1bfc8331577dfd311d94`
  - Evidencia: https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38103011095

## P10 — Segunda auditoría y lanzamiento v1.0

**Estado:** queued. **Gate:** Segunda auditoría histórica por fecha y empresa, QA factual, social/SEO, accesibilidad y release gate sin tareas P0 pendientes.

- [ ] **QA-REVERSE** · P0 · queued — Segunda pasada por empresa/tema y replay 1–7 Sep
  - Criterio: No omisiones materiales conocidas; fechas, rumores y claims auditados
- [ ] **QA-WEB** · P1 · queued — QA UX, móvil, SEO social, RSS, accesibilidad
  - Criterio: Browser QA y enlaces/previews comprobados
- [ ] **QA-LAUNCH** · P0 · blocked — Aprobar lanzamiento Gazette v1.0
  - Criterio: Gates P05–P10 con evidencias y excepciones explícitas
  - Depende de: H-0814-GATE, H-1521-GATE, H-2230-GATE, H-OCT-GATE, ED-LEGACY48, QA-REVERSE
- [ ] **QA-SEP01-REOPEN** · P0 · queued — Reauditar 1 Sep por omisión de MAPL‑EMIT tras cierre legacy
  - Criterio: Rehacer checklist completo y segunda pasada de 1 Sep, resolver omisiones y volver a cerrar el día solo con evidencia.
  - Fecha investigada: 2026-09-01
- [ ] **QA-SEP02-07-REOPEN** · P0 · queued — Volver a auditar del 2 al 7 de septiembre
  - Criterio: Registrar fuentes, categorías, discovery y pasada inversa por fecha; cerrar solo con evidencias verificadas.
- [ ] **QA-CLAIMS-SAMPLING** · P0 · queued — Auditoría cruzada de fechas, precios, disponibilidad y fuentes
  - Criterio: Reabrir las fuentes del archivo completo, contrastar claims del proveedor, registrar errores y correcciones.
- [ ] **QA-EVENT-DEDUP** · P1 · queued — Revisar eventos distintos con una misma URL
  - Criterio: Evaluar duplicados semánticos en historias con fuente principal común sin fusionar eventos verdaderamente independientes.
- [x] **QA-HTTP-SMOKE** · P0 · done — Smoke tests públicos de artículos, RSS e imágenes
  - Criterio: Comprobar HTTP 200, assets, navegación móvil y RSS desplegado tras publicación; incluir URLs concretas.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37798281530
- [ ] **QA-SEO-PREVIEW** · P1 · queued — Auditar SEO y tarjetas al compartir artículos
  - Criterio: Revisar metadatos disponibles a crawlers sin JavaScript, canonical, sitemap, OG y previews por artículo.
- [ ] **QA-A11Y** · P1 · queued — Auditar contraste, teclado, lectores de pantalla y responsive
  - Criterio: Pruebas de focus, landmarks, alt, tamaños móviles y correcciones de accesibilidad comprobadas.
- [ ] **QA-RELEASE-GATE** · P0 · queued — Validación final de release v1.0 sin P0 abiertos
  - Criterio: Firmar criterios editorial, histórico, visual, SEO, automatización y CI antes de declarar producto acabado.
  - Depende de: QA-LAUNCH
- [x] **QA-READTIME-REGRESSION** · P1 · done — Reparar tiempo de lectura real en Reporter V2
  - Criterio: Cómputo correcto de palabras con secciones V2, más dos pruebas y CI verde sin alterar el estilo.
  - Commit: `85e4144be915c44138a6dda572bc22176c42948d`
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37795939872
- [x] **QA-COVERAGE-HARDGATE** · P0 · done — Impedir cierres diarios sin auditoría Backbone v1
  - Criterio: Bloquear cierre sin doble pasada, cero candidatos abiertos, fuentes/categorías revisadas y documento verificable; CI verde.
  - Commit: `d16846fd56558b8bb29be5191f968ff0316ddc80`
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37796206364
- [ ] **QA-MAJOR-STORY-CORROBORATION** · P1 · queued — Revisar reportajes mayores que citan una sola fuente
  - Criterio: Reabrir fuentes primarias, validar claims y usar documentación o corroboración externa donde exista; no fabricar una segunda fuente.
- [ ] **QA-EDITORIAL-METRICS-LIVE** · P1 · queued — Panel interno verificable de avance y frescura
  - Criterio: Generar métricas verificables de artículos, legacy, días registrados/auditados, última publicación y trabajo pendiente desde JSON de main.
- [x] **QA-PUBLIC-MOBILE-LIVE** · P1 · done — Prueba diaria del sitio público en móvil y escritorio
  - Criterio: Smoke automatizado comprueba JSON/RSS, navegación, imágenes, ausencia de errores JS y desbordamiento horizontal móvil.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37798281530
- [x] **QA-RSS-SEMANTICS** · P1 · done — Validar coherencia semántica RSS con cada artículo
  - Criterio: RSS principal y espejo coinciden en títulos, resúmenes, URL de origen, fecha y enlaces de todas las noticias; pruebas de regresión que rechazan cambios desincronizados.
  - Evidencia: https://github.com/cookiecodespy/cookiecodespy.github.io/actions/runs/37798463907
- [ ] **OPS-GAZETTE-CUTOVER** · P0 · blocked — Confirmar tarea ChatGPT y cerrar separación del portafolio
  - Criterio: Una sola tarea horaria con destino exclusivo ai-race-gazette, última conciliación de ambos main, Pages/CI verificados y PR #9 fusionado sin cambiar el portafolio.

## Reglas para nuevas tareas

Toda tarea descubierta se agrega a `source/ops/backlog.json` con ID estable, fase, prioridad, dueño, evidencia y criterio de aceptación. No se borra historial ni se marca `done` sin evidencia. Un día con noticias no se considera completo sin doble revisión documentada. Concurrencia: releer `main` y deduplicar por `eventKey` antes de escribir.
