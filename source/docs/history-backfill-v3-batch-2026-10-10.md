# Lote de reconstrucción histórica y Reporter V2 (2026-10-10)

Esta pasada publica **siete reportajes históricos nuevos** y enriquece **cuatro artículos legacy** sin reemplazar IDs. La tarea horaria de actualidad permanece separada y activa. No se certifica la cobertura diaria completa.

## Novedades publicadas

| Día | Evento | Fuente original |
| --- | --- | --- |
| 8 Sep | Seguridad y arquitectura de Meta Muse | https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse |
| 14 Sep | Waymo inicia viajes públicos en Las Vegas | https://waymo.com/blog/2026/09/ride-in-las-vegas/ |
| 14 Sep | Waymo acuerda preparar viajes en Tokio para 2027 | https://waymo.com/blog/2026/09/opening-tokyo-in-2027-with-nihon-kotsu-go/ |
| 14 Sep | Perplexity Portable Computer para Windows | https://www.perplexity.ai/hub/blog/portable-computer-for-windows-is-here |
| 15 Sep | Waymo y Allianz, seguros europeos de robotaxis | https://blog.waymo.com/blog/2026/09/allianzpartnership/ |
| 17 Sep | Waymo anuncia preparación en Singapur para 2028 | https://waymo.com/blog/2026/09/waymo-in-singapore/ |
| 21 Sep | Microsoft Global AI Diffusion del Q2 2026 | https://blogs.microsoft.com/on-the-issues/2026/09/21/the-continued-state-of-global-ai-diffusion-in-2026/ |

Commits de publicación: `453d67f6e173b05d5690dc68c9554448fddf6ac0`, `aaa447688749545f26c247fb04ddd1a53536e6fa`, `d66d323c6be623252bdbba6f64a122ef0b2ceb95`.

## Artículos cortos convertidos

Waymo Denver/San Diego/Tampa; Meta Muse Voice Transcribe; Perplexity Hybrid Compute para Mac; Meta Muse Spark 1.3. Commits `725ee9941dc0bf78a022d3fca1629bc506eed8f7`, `96f2141a2f6084dc41833f5ccd111af7b220616a`. Los cuatro conservan `id` y `eventKey`.

## Estado y control

132 noticias al cierre del lote, 89 Reporter V2, 43 legacy. El calendario contiene 40 fechas: 27 `partial` y 13 `pending`, **cero `complete` certificado por doble auditoría**. Cuatro fechas de P06 (16, 18, 19, 20 de septiembre) todavía no contienen noticias y requieren búsqueda abierta. Octubre 1–5 requiere auditoría; la automatización no realiza backfill. Quedan imágenes prioritarias sin producir.

Cada publicación modificó de forma consistente ambos JSON, ambos RSS y ledger de cobertura cuando hubo noticias nuevas. Los cambios solo de profundidad V2 afectaron los dos JSON sin alterar RSS ni fecha. Los workflows editoriales publicados para los lotes se verifican en Actions. El informe de evidencia no reemplaza el registro `source/research/coverage-audit.json`, cuya auditoría de fechas continúa pendiente.

No declarar septiembre completo ni versión 1.0 hasta finalizar las pasadas por fuente y por categoría, las piezas antiguas, la producción visual y las pruebas de autonomía/QA.
