# Main Chat V3 — G0 Preflight y evidencia inicial

**Corte observado:** 2026-10-10, America/Santiago.  
**Estado G0: PARTIAL**, con controles de infraestructura aprobados y pruebas operativas adicionales pendientes.  
**Plan:** [main-chat-v3-execution-plan-2026-10-10.md](main-chat-v3-execution-plan-2026-10-10.md).

## PASS comprobados

1. **Repositorio activo:** `cookiecodespy/ai-race-gazette`, branch `main`, permisos GitHub ligados a esta sesión con `push=true`, `admin=true`. El repositorio del portafolio `cookiecodespy/cookiecodespy.github.io` conserva en su raíz exclusivamente `.gitignore` e `index.html`. No se tocó el portafolio.
2. **Marcador de origen versionado:** `gazette-deployment.txt` contiene exactamente `source_repository=cookiecodespy/ai-race-gazette`.
3. **Mirrors por hash Git blob:** `data/news.json` = `source/public/data/news.json` (blob SHA `35dfd69dbd241807cb5a3757c6686427769db9ec`); `feed.xml` = `source/public/feed.xml` (blob SHA `11826a69e4f49b931fcb069edd94198d99eedaa6`). Son hashes del contenido versionado y verifican igualdad exacta de los pares.
4. **Última publicación editorial inspeccionada:** commit `5fbedea06510de51861a82fed527df8fa6f064cb` (10/10, NVIDIA y Reflection AI); [Validate AI Race Gazette Content](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38095003219): **success**.
5. **Despliegue del plan V3:** commit [`369ac741944cfda8d8de35364b6d2a11c131f345`](https://github.com/cookiecodespy/ai-race-gazette/commit/369ac741944cfda8d8de35364b6d2a11c131f345), con [GitHub Pages](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38097747498) **success**.
6. **Reejecución de smoke público:** la ejecución original del [10/10](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38073638623), tentativa 1, falló porque el marcador devolvió HTTP 503 en vez de 200; la **tentativa 2**, lanzada explícitamente desde Main Chat V3, finalizó **success**, job `public-smoke` aprobado. Esto valida la prueba pública en su reejecución, sin borrar el antecedente del 503.
7. **Una sola tarea horaria de Gazette en ChatGPT:** `AI Race Gazette Newsroom` ID `6ac671bed2e8819184ed6fce0a20e531`, enabled, con prompt explícito al nuevo repositorio y sin permiso de escribir el portafolio; programación por hora al minuto 21, hora Santiago. La tarea horaria antigua `Actualizar AI Race Gazette` está disabled. La última ejecución observada de Newsroom fue `2026-10-10T23:26:43Z`.

## Pendiente, no se debe marcar como PASS todavía

- `OPS-RUN-PROOF`: evidencia independiente de **tres ejecuciones consecutivas**, diferenciando publicación, no-op auténtico y bloqueos de aprobación. Una ejecución programada o su configuración no demuestra todas estas ramas.
- `OPS-CONCURRENCY-TEST`: simulación segura de dos escritores con SHA desactualizado y reconciliación, sin tocar noticias de producción.
- `OPS-ROLLBACK-DRILL`: ensayo de restauración desde Git y prueba de rollback de datos/arte sin afectar el portafolio.
- `OPS-NEWSROOM`: confirmar autonomía de publicación/no-op sin intervención cuando haya hecho material; no basta un commit manual para aprobarlo.
- Comprobación periodica de smoke/503 con vigilancia de reincidencia. **No introducir reintentos infinitos ni ocultar errores 5xx sistemáticos.**
- Este informe **no** audita cada noticia ni convierte fechas `partial` o `pending` en `complete`; tampoco valida exhaustivamente la experiencia visual/SEO/accesibilidad.

## Decisión

No existe bloqueo de despliegue que justifique detener la investigación histórica. Se puede empezar G1/P05 y Visual Desk piloto en paralelo **sin** tocar la Scheduled Task. G0 queda PARTIAL hasta la evidencia de sus gates operativos pendientes. El cierre v1.0 sigue condicionado al plan completo y al backlog canónico.

## Recuperación

En la próxima sesión leer este informe, el plan V3, `source/docs/recovery-after-interruption.md`, `source/ops/backlog.json`, volver a leer `main` y contrastar resultados nuevos. Nunca reutilizar ciegamente estas SHA como si fueran el HEAD actual.
