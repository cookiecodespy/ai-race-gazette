# Gazette · reconciliación técnica del registro de investigación

**Corte editorial:** 2026-10-10 · **Estado:** conciliación de datos, NO cierre de días por investigación.

## Hallazgo

El [archivo público](../../data/news.json) y su espejo, el RSS y el calendario [history-coverage.json](history-coverage.json) estaban sincronizados y pasaban el workflow editorial. Sin embargo, `source/research/coverage-audit.json` seguía con valores de antes de los lotes recientes: 15 fechas con recuentos o estados anteriores y ninguna fila para el 9 y 10 de octubre.

El workflow actual de integridad protege los **cinco archivos mutables** del Newsroom, pero no valida ni actualiza el registro de investigación. Esto no altera las noticias visibles, pero puede producir reportes internos erróneos de avance.

## Corrección

- Conteo real antes de reconciliar: **140** noticias distribuidas en **40** días.
- Recuento de fechas que requerían conciliación: **15**.
- Fechas agregadas al registro de investigación: **2026-10-09, 2026-10-10**.
- Todos los campos `verifiedArticles`, `candidateStats.published` y `archiveStatus` coinciden ahora con los reportajes y su calendario.
- Se mantienen intactas las evidencias de revisión `reviewedSourceIds`, `reviewedCategories`, `openDiscoveryPerformed`, `reversePassPerformed`, `auditMode`, `reviewedAt` y `auditDocument`. Las cifras de candidatos previos insuficientes se dejaron como **desconocidas**, no se inventaron barridos oficiales.

## Regla de continuidad

El Newsroom horario tiene permitido mutar solamente sus cinco archivos oficiales; no debe tocar la investigación histórica. Por eso, el registro de investigación es una **instantánea fechada**, no un espejo actualizado al segundo. Al finalizar cada bloque de Historical Backfill debe regenerarse su conciliación y declarar si hubo hallazgos de fuentes, sin confundir sincronizar conteos con investigar noticias.

**No dar por completa ninguna jornada** sin doble revisión por fuentes, categorías, actores emergentes y pasada inversa. Los días de octubre que todavía están sujetos a Newsroom pueden quedar desfasados tras la instantánea.

## Fechas corregidas

| Fecha | Conteo previo | Conteo de archivo |
| --- | ---: | ---: |
| 2026-09-08 | 4 | 5 |
| 2026-09-11 | 2 | 3 |
| 2026-09-12 | 1 | 2 |
| 2026-09-14 | 2 | 5 |
| 2026-09-15 | 0 | 2 |
| 2026-09-16 | 0 | 2 |
| 2026-09-17 | 0 | 1 |
| 2026-09-18 | 0 | 1 |
| 2026-09-21 | 0 | 1 |
| 2026-09-24 | 0 | 1 |
| 2026-09-25 | 0 | 2 |
| 2026-09-27 | 0 | 1 |
| 2026-10-06 | 4 | 6 |
| 2026-10-07 | 1 | 12 |
| 2026-10-08 | 2 | 27 |

Nuevas fechas registradas: 2026-10-09, 2026-10-10.
