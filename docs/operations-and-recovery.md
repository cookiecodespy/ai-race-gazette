# Operación y recuperación de AI Race Gazette

## Repositorios y publicación

- Código y archivo canónicos: `cookiecodespy/ai-race-gazette`, rama `main`.
- Pages: publicar `main` / raíz, modo de construcción `legacy`.
- URL estable: https://cookiecodespy.github.io/ai-race-gazette/
- Portafolio: `cookiecodespy/cookiecodespy.github.io`; no publicar Gazette allí después del cambio de la tarea.
- El marcador público debe contener exactamente `source_repository=cookiecodespy/ai-race-gazette`.
- El workflow de build comprueba calidad y publica únicamente el frontend compilado. Solicita explícitamente una construcción de Pages, porque los commits hechos con `GITHUB_TOKEN` no disparan una por sí mismos. No necesita un PAT adicional.
- Validación editorial y sincronización visual responden a cambios de datos. El smoke diario comprueba origen, espejos, RSS y navegador. No son tareas de redacción horaria.

Referencia técnica: [GitHub Pages y GITHUB_TOKEN](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) y [solicitar build de Pages](https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build).

## Estado de separación — 10 de octubre de 2026

**Completado:** La única Scheduled Task activa de Gazette fue modificada EN ChatGPT, no duplicada, conservando el ID `6ac671bed2e8819184ed6fce0a20e531`, frecuencia horaria al minuto 21 y destino único `cookiecodespy/ai-race-gazette/main`. La tarea antigua `Actualizar AI Race Gazette` permanece desactivada.

**Completado:** conciliación final: ambos repositorios compartían los mismos blobs Git para `data/news.json`, su espejo, `feed.xml`, su espejo y `source/docs/history-coverage.json` antes de retirar el proyecto antiguo. Se verificaron 112 artículos e igual número de entradas RSS, sin ids ni eventKeys duplicados.

**Completado:** el PR [#9](https://github.com/cookiecodespy/cookiecodespy.github.io/pull/9) se actualizó sobre el último `main` usando un commit de conciliación, y se fusionó como `7cc3743d0251ca9e14b809c36d15dc1631085921`. Ahora el repositorio original contiene solo `index.html` (blob `4ce9eaa66cefeded9599c76aa1b27e647bdf3ed4`) y `.gitignore` (blob `7ab523525cf0b347807f1777294f0c7088670761`), exactamente los mismos archivos y hashes que en junio de 2026. Backups: también `backup/portfolio-final-cutover-2026-10-10`.

**Completado:** prueba [GitHub Actions post-cutover](https://github.com/cookiecodespy/ai-race-gazette/actions/runs/38032993104): éxito; comprobó ambos sitios HTTP, marcador de origen, HTML byte por byte del portafolio original, HTML del nuevo Gazette, JSON y RSS públicos/canónicos/espejos y 112 artículos.

**Pendiente de observación:** verificar el primer run de la Scheduled Task posterior a la actualización; un no-op verificable no produce commit, y eso es correcto. Si hay noticia material, comprobar que se publica solo en el nuevo repositorio y que el CI valida. El servicio NO debe escribir jamás al repositorio del portafolio.

### Diagnóstico y recuperación tras el corte

1. Comprobar que la tarea ID `6ac671bed2e8819184ed6fce0a20e531` sigue activa, es la única tarea horaria de Gazette y apunta solo al nuevo repositorio.
2. Comprobar `main` de Gazette, `data/news.json` y espejo, RSS y espejo, `source/docs/history-coverage.json`, CI y Pages. Comparar id/eventKey, ledger y hashes; un no-op horario no requiere commit.
3. Comprobar que `cookiecodespy/cookiecodespy.github.io/main` mantiene solamente el portafolio y no recibe publicaciones de Gazette.
4. Ante conflicto de noticias, volver a consultar `main`, conciliar por id/eventKey y nunca forzar pushes. Mantener backups y recuperar mediante commits nuevos de reversión si fuera necesario.

## Verificación reproducible

Desde `source/`, con Node 22 y Python 3:

```bash
npm ci
npm test
python3 -m unittest discover -s tests -p '*_test.py'
python3 scripts/check_publication_integrity.py
python3 scripts/editorial.py --validate-only
python3 scripts/quality-audit.py
python3 scripts/validate_source_registry.py
python3 scripts/validate_coverage_audit.py
python3 scripts/validate_visual_desk.py --strict
python3 scripts/validate_backlog.py
python3 scripts/refresh_master_checklist.py --check
npm run build
npm run test:sites
npx playwright install chromium
npm run preview -- --host 127.0.0.1 --port 4173
# En otra terminal:
npm run test:browser
npm run test:live
```

La validación de esquema no prueba cada afirmación periodística. El histórico y la deuda visual conservan sus estados reales; esta migración no los cierra artificialmente.

El publicador `source/scripts/publish.py` exige que el HEAD local coincida con el `main` remoto antes de subir blobs. Reconciliar cambios locales sobre el último main; no hacer un commit local previo al publicador API. Para cambios versionados localmente, usar `git push` normal sin force. Si el remoto avanza durante el upload, la actualización no forzada aborta y no publica un árbol parcial.

## Respaldos y rollback

- Original: conservar `backup/before-gazette-separation-2026-10-09` y `backup/pre-cutover-2026-10-10` (112 artículos al crearse).
- Gazette: conservar `archive/original-gazette-history` y `backup/pre-cutover-2026-10-10` (estado anterior a esta intervención).
- Para fallos de código, revertir el commit específico en un nuevo commit. Nunca restablecer `main` con force ni restaurar un archivo de noticias viejo completo.
- Para fallos editoriales, corregir solo eventos afectados sobre la última versión y regenerar espejos/ledger.
- Si Pages falla, consultar API/configuración y el run antes de solicitar otro build. Comprobar respuesta HTTP, marcador y datos, no solo un run verde.
- Volver temporalmente al sitio del original requeriría antes conciliar allí todas las novedades y coordinar un único escritor; no deshabilitar Pages ni invertir la migración automáticamente.

Diagnóstico de solo lectura:

```bash
gh api repos/cookiecodespy/ai-race-gazette/pages
gh api repos/cookiecodespy/ai-race-gazette/pages/builds/latest
gh run list --repo cookiecodespy/ai-race-gazette --limit 10
curl -fsS https://cookiecodespy.github.io/ai-race-gazette/gazette-deployment.txt
```
