# Revisión editorial de candidatos · 9 y 12 de septiembre de 2026

**Corte de investigación:** 10 de octubre de 2026 (Santiago).  
**Estado:** resoluciones por evento, **no** auditoría exhaustiva diaria. Los días del 9 y 12 de septiembre continúan `partial` hasta completar fuentes oficiales, categorías, descubrimiento abierto y pasada inversa del bloque P05.

## 9 de septiembre — planes Google AI

- **Fuente revisada (9 Sep):** https://blog.google/products-and-platforms/products/google-one/fall-2026-ai-plan-updates/
- El texto resume funcionalidades de voz en Gmail/Docs/Keep, Pics, Sheets canvas, Spark y beneficios para estudiantes. Las fuentes originales sitúan varias de esas novedades antes del 9 de septiembre.
- **3 Sep, voz en Workspace:** https://blog.google/products-and-platforms/products/workspace/voice-features-gmail-docs-keep/
- **1 Sep, Google Pics:** https://blog.google/products-and-platforms/products/workspace/google-pics/
- **13 Ago, Sheets canvas:** https://blog.google/products-and-platforms/products/workspace/sheets-canvas-for-google-sheets-spreadsheets/
- **30 Jul, Spark con Chrome:** https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/
- **Decisión:** no publicar una noticia independiente del 9 Sep como si todas estas funciones debutaran allí. La pieza es un resumen de acceso y herramientas con posible utilidad como contexto. Queda documentada como descartada para noticia independiente; reabrir si se acredita un cambio material original de fecha 9 Sep no representado en otro evento.

## 12 de septiembre — ReWeight

- **Paper primario:** https://arxiv.org/abs/2609.13851 (v1 enviado el 12 Sep 2026 UTC).
- **Texto técnico accesible:** https://arxiv.org/html/2609.13851v1
- **Página del equipo y demostraciones:** https://reweight-vla.github.io/
- Universidad de Hong Kong / TeleAI. El paper presenta recuperación y ponderación de demostraciones humanas para post-training VLA.
- Los autores reportan 39 % de éxito con datos robot exclusivamente, 44 % con mezcla aleatoria y 57 % con ReWeight en ocho tareas simuladas; en cuatro pruebas físicas comunican 68,8 % con ReWeight frente a 40,0 % robot-only. Son resultados de los autores dentro de sus ensayos, no benchmarks comerciales independientes.
- **Publicado:** [Reporter V2 ReWeight](https://github.com/cookiecodespy/ai-race-gazette/commit/6e634ec1493f21a35c62ca92e21f8c738b0e86a5). RSS inicialmente introducido en posición incorrecta dentro del mismo día; [corrección del orden](https://github.com/cookiecodespy/ai-race-gazette/commit/5ac9b15c81a24fb445af21a2e27094084d507d81), [validación posterior PASS](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38098743612).
- La jornada 12 Sep permanece parcial hasta completar el resto del espectro de compañías y categorías, y su segunda revisión.

## Candidato nuevo — JumpStart

- **Paper primario:** https://arxiv.org/abs/2609.13730
- Trabajo sobre 160.000+ entrenamientos de aprendizaje offline en 114 datasets, con metodología de evaluación y políticas preentrenadas, según los autores.
- El primer envío de arXiv figura el 12 Sep, pero otras páginas de distribución muestran fechas posteriores para los recursos. Antes de publicar verificar cuándo estuvieron realmente disponibles modelos, código y suite de evaluación; no confundir fecha de paper con fecha de liberación efectiva.
- Se añade `H-SEP12-JUMPSTART` a la cola como investigación P1, no noticia confirmada.

## Tareas de fase que continúan

- `H-SEP12-13`, `H-0814-SOURCES`, `H-0814-GOOGLE`, `H-GOOGLE-DEEPMIND-0814` y ambas segundas pasadas.
- **Sin cierre diario ni cambio a `complete`**. Mantener la política de una noticia por evento material y no inventar eventos para llenar calendario.
