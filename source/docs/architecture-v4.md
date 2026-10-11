# AI Race Gazette — arquitectura y operación V4

**Contrato canónico:** [gazette-v1-standard.md](gazette-v1-standard.md). **Estado actual:** ejecutar `python3 source/scripts/release_readiness.py` desde la raíz o `python3 scripts/release_readiness.py` desde `source/`. Este documento describe decisiones duraderas; no mantiene un contador manual que pueda quedar obsoleto.

## 1. Repositorio y límites

- Repositorio único de publicación: `cookiecodespy/ai-race-gazette`, rama `main`.
- El repositorio personal `cookiecodespy/cookiecodespy.github.io` es un portafolio separado. No editar ni publicar Gazette allí.
- `/index.html`, `/assets/`, `/data/news.json` y `/feed.xml` se sirven desde Pages; `source/` contiene la aplicación editable y sus herramientas.
- La carpeta `source/public/` reproduce los datos y RSS públicos. Son espejos exactos, no archivos editoriales independientes.

## 2. Responsabilidades del código

| Ruta | Responsabilidad |
|---|---|
| `source/src/App.jsx` | Estado de filtros, ruta, búsqueda, carga de datos, metadatos y composición |
| `source/src/components/ArchivePieces.jsx` | Portadas, piezas de lista, masthead y primitivas visuales |
| `source/src/components/Article.jsx` | Reportero V2 y renderizado compatible de informes legacy |
| `source/src/components/Coverage.jsx` | Calendario, estados y vista de edición diaria |
| `source/src/news.js` | Filtros, agrupamiento por fecha, formato de fechas y lectura |
| `source/src/lib/assets.js` | Resolución de rutas Vite bajo el base path del sitio |
| `source/scripts/editorial.py` | Validación factual estructural, Reporter V2 y RSS |
| `source/scripts/check_publication_integrity.py` | Espejos, semántica RSS y coherencia del calendario |
| `source/scripts/quality-audit.py` | Diagnóstico de profundidad, compañías y uso de ilustraciones |
| `source/scripts/release_readiness.py` | Informe legible de gates de v1.0, no aprobación automática |
| `source/ops/backlog.json` | Única fuente del checklist de cierre |
| `source/docs/master-checklist.md` | Checklist generado de forma determinista |
| `source/research/coverage-audit.json` | Evidencia de dos pasadas de investigación por fecha |
| `source/visual/asset-manifest.json` | Proveniencia y licencias/créditos de ilustraciones |
| `source/visual/image-queue.json` | Cola de arte específico por artículo |

Mantener `source/worker/index.js`, `source/.openai/hosting.json`, la preparación de Sites y pruebas del worker para no romper la distribución de prototipos.

## 3. Carriles de operación

**Newsroom horario:** investiga actualidad y una ventana retrospectiva de al menos 48 horas. Puede modificar solo los dos JSON, los dos RSS y `source/docs/history-coverage.json`, siempre como unidad lógica consistente. No altera el frontend ni los assets; si no hay noticia o corrección material, no debe hacer commit.

**Historical Backfill:** verifica el archivo antiguo por fecha y por actor/categoría. Publica nuevos informes Reporter V2, migra legacy conservando `id`/`eventKey` y documenta la evidencia de fuentes. Una fecha con noticias no equivale a fecha `complete`.

**Visual Desk:** prepara y publica grabados aprobados. Mantiene sincronizados binario WebP, manifest, cola y campos de imagen del artículo. El asset de una noticia no debe simular fotografía documental.

**Arquitectura/QA:** modifica componentes, scripts, tests, documentación o CI deliberadamente. No debe perseguir la actualidad ni reescribir el archivo histórico por accidente.

## 4. Protocolo de escritura segura

1. Leer el SHA actual de `main` y descargar el contenido canónico justo antes de construir el cambio.
2. Preservar todos los registros ajenos al cambio; deduplicar por `id` y `eventKey`, no por URL.
3. Crear un único commit lógico con todos los espejos afectados y validadores acordes.
4. Actualizar `main` sin `force`, condicionado a la cabeza inicial. Si otro proceso avanzó, descartar la publicación preparada, releer y conciliar.
5. Verificar commit, pruebas, RSS y Pages antes de dar el trabajo por terminado.
6. Si CI queda rojo, el trabajo vuelve a estado abierto aunque el commit exista.

El `[skip ci]` se reserva al commit generado del bundle, nunca a publicaciones de noticias que deben validar contenido.

## 5. Gates de lanzamiento v1.0

**Automatizables:** (a) concordancia de calendarios y doble auditoría documentada para todos los días; (b) cero legacy pendiente sin excepción editorial aprobada y Reporter V2 válido; (c) cola visual P0 resuelta con créditos, media y arte aprobado; (d) backlog de P05–P10 sin tareas abiertas. Se muestran en la pestaña de resumen de GitHub Actions mediante `release_readiness.py --summary`, sin bloquear las compilaciones mientras el archivo esté en construcción.

**Independientes:** comprobar ejecución y recuperación de la Scheduled Task, concurrencia contra Newsroom, Pages real en móvil y escritorio, accesibilidad, metadatos vistos por crawlers sin JavaScript, rollback y firma editorial. **CI verde no equivale a v1.0 aprobada**.

## 6. Dos riesgos de arquitectura abiertos

**Payload editorial.** `data/news.json` incluye cuerpos completos, incluso para lectores que solo abren la portada. La alternativa de índice liviano + artículo bajo demanda debe mantener compatibilidad con la automatización que hoy solo modifica cinco archivos. Publicar un índice derivado desactualizado es peor que una carga inicial más pesada. Aceptación: menos de 500 KB iniciales de JSON sin compresión y cero artículos desincronizados en una carrera entre Newsroom y compilación. Ver `PERF-ARCHIVE-LAZY-DELIVERY`.

**SEO y tarjetas por artículo.** Las rutas `#articulo/<id>` se gestionan en el navegador: actualizar OpenGraph después de montar React ayuda a la pestaña, pero muchos crawlers sociales no ejecutan JavaScript. No declarar resuelto SEO individual hasta tener URL indexable y metadatos prerenderizados por noticia, canonical y sitemap validados sin JS. Ver `QA-SEO-PREVIEW`.

## 7. Comprobación reproducible

Desde `source/`:

```bash
npm ci
npm test
python3 -m unittest discover -s tests -p '*_test.py'
python3 scripts/editorial.py --validate-only
python3 scripts/check_publication_integrity.py
python3 scripts/validate_research_ledger.py
python3 scripts/validate_backlog.py
python3 scripts/validate_visual_desk.py
python3 scripts/release_readiness.py
npm run build
npm run test:sites
```

La auditoría `release_readiness.py --strict` es para un candidato final; se espera que falle mientras queden gates medibles abiertos. El modo normal es informativo y no bloqueante.

Este documento permite retomar trabajo desde cualquier chat: verificar `main`, consultar el scorecard, leer `source/docs/recovery-after-interruption.md` y avanzar por la cola del repositorio, no por métricas recordadas.
