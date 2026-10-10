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

## Bloqueo de coordinación

La tarea horaria pertenece a ChatGPT. Esta intervención no la actualizó ni creó una sustituta. El PR de limpieza [#9](https://github.com/cookiecodespy/cookiecodespy.github.io/pull/9) debe seguir en borrador mientras no exista evidencia del cambio de destino.

Mientras la tarea siga escribiendo en el original, el sitio independiente puede quedar atrasado después de esta conciliación. No iniciar otro redactor horario ni considerar cerrado el cutover. Conservar el original completo y reconciliar nuevamente al cambiar la tarea.

Instrucción para el chat principal de ChatGPT:

> Actualiza la Scheduled Task existente «AI Race Gazette Newsroom», sin crear otra y conservando su ID y cadencia horaria. Su único destino de lectura/escritura operativa debe ser cookiecodespy/ai-race-gazette, rama main. Retira el prefijo ai-race-gazette/ de las rutas internas: data/news.json, source/public/data/news.json, feed.xml, source/public/feed.xml y source/docs/history-coverage.json. Conserva Reporter V2, investigación de las últimas 48 horas, fuentes verificadas, deduplicación por id/eventKey, cobertura histórica, no-op sin novedades y publicaciones atómicas sin skip-ci. Antes de cambiar el destino, verifica que no quede una ejecución anterior escribiendo en el portafolio. Confirma el ID, prompt efectivo, horario, próxima ejecución y que existe una sola tarea horaria activa. No fusiones el PR #9 todavía: devuelve esa evidencia para conciliar ambos main por última vez y cerrar la separación con verificación posterior.

## Última conciliación y limpieza

1. Confirmar el cambio de la tarea y que ninguna ejecución antigua sigue escribiendo. No cambiar la política editorial.
2. Refetch de ambos `main`. Comparar artículos por `id` y `eventKey` contra la última conciliación documentada; preservar novedades de ambos lados. Resolver cambios incompatibles del mismo evento manualmente.
3. Actualizar en un commit atómico ambos JSON, ambos RSS, el ledger diario y datos visuales que correspondan. No copiar un archivo antiguo encima del nuevo. Rechazar un push si cambió el padre; volver a conciliar.
4. Ejecutar validators, CI, build, smoke público y confirmar el marcador.
5. Crear un respaldo del último `main` del original. Actualizar el PR #9 contra ese `main` y revisar que elimine únicamente Gazette y sus cuatro workflows. Conservar el `index.html` original (blob `4ce9eaa66cefeded9599c76aa1b27e647bdf3ed4`) y `.gitignore`.
6. Fusionar solo tras satisfacer todos los gates. Verificar ambas URLs y ausencia de escrituras posteriores de Gazette en el portafolio. Una ejecución horaria real debe probar continuidad; un no-op válido no exige commit.

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
