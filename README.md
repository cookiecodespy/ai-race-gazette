# AI Race Gazette

**Un periódico digital en español para seguir y entender la evolución de la inteligencia artificial.**

[Leer el periódico](https://cookiecodespy.github.io/ai-race-gazette/) · [Explorar el archivo](https://cookiecodespy.github.io/ai-race-gazette/) · [Suscribirse al RSS](https://cookiecodespy.github.io/ai-race-gazette/feed.xml) · [Roadmap](ROADMAP.md)

AI Race Gazette reúne noticias e informes sobre modelos, investigación, agentes, infraestructura, chips, productos y compañías emergentes. Su identidad visual se inspira en los diarios impresos: portadas ilustradas, tipografía editorial y una hemeroteca organizada por fecha.

El sitio está **publicado y en evolución**. La reconstrucción histórica y la revisión de determinados artículos siguen abiertas. La presencia de una noticia en el archivo no significa que su jornada esté auditada de forma exhaustiva.

## Qué ofrece

- **Portadas y artículos completos.** Cada noticia tiene su propia página con contexto, detalles técnicos, limitaciones y fuentes, cuando están disponibles.
- **Hemeroteca diaria.** Distingue fechas verificadas, parcialmente investigadas y pendientes. Un día sin artículos no se considera automáticamente un día sin novedades.
- **Búsqueda y filtros.** Permite explorar por compañía, tema y fecha desde una vista de portadas o de lista.
- **Cobertura abierta.** Incorpora empresas, laboratorios y proyectos relevantes sin depender de un catálogo cerrado.
- **Actualización editorial.** Un proceso periódico busca novedades materiales y las añade solamente cuando hay respaldo documental.
- **RSS.** Publica un feed para seguir las noticias desde lectores externos.

## Criterios editoriales

AI Race Gazette prioriza anuncios, documentación, investigaciones y repositorios originales. Distingue entre hechos documentados, afirmaciones del proveedor, reportes todavía no confirmados y análisis editorial.

Las fechas corresponden al evento investigado, no necesariamente a la fecha en que otro medio lo comenta. Las actualizaciones conservan la identidad de la noticia para evitar duplicados. No se crean titulares para rellenar jornadas del calendario.

Las ilustraciones generadas se identifican como arte editorial. No se presentan como fotografías documentales ni sustituyen a las fuentes.

Consulta la [política editorial](source/docs/editorial-policy.md) y el [estándar de artículos](source/docs/gazette-v1-standard.md).

La [arquitectura V4 y sus gates de lanzamiento](source/docs/architecture-v4.md) explican los cuatro carriles, la publicación segura, el refactor de componentes y los riesgos todavía abiertos.

## Tecnología

El sitio se publica en GitHub Pages. La interfaz se desarrolla con React y Vite; la validación de contenido y la preparación del archivo utilizan scripts en Python y Node.js.

```text
/
├── index.html         # Sitio publicado
├── assets/            # Recursos públicos
├── data/news.json     # Archivo editorial publicado
├── feed.xml           # Feed RSS
├── source/            # Aplicación, pruebas y herramientas
│   ├── src/components/    # Artículos, calendario y portadas
│   ├── src/lib/           # Utilidades del frontend
│   ├── scripts/
│   ├── tests/
│   ├── docs/
│   └── visual/
└── docs/              # Documentación técnica de migración y operación
```

Para ejecutar las comprobaciones de desarrollo:

```bash
cd source
npm ci
npm test
python3 -m unittest discover -s tests -p '*_test.py'
python3 scripts/editorial.py --validate-only
python3 scripts/quality-audit.py
python3 scripts/release_readiness.py  # estado real, sin bloquear builds
npm run build
```

Los workflows de GitHub Actions validan el contenido, ejecutan pruebas y construyen el sitio. Las actualizaciones editoriales mantienen sincronizados el archivo público, su copia de compilación y el RSS.

## Estado del proyecto

La infraestructura principal está desplegada. Antes de publicar la versión **v1.0** quedan tres líneas de trabajo: completar la auditoría de septiembre y octubre, enriquecer los artículos anteriores al formato editorial actual y finalizar la biblioteca visual con pruebas de accesibilidad, SEO y experiencia móvil.

El [roadmap público](ROADMAP.md) resume las etapas y los criterios de lanzamiento. El seguimiento técnico detallado vive en la cola de trabajo versionada.

## Alcance y atribución

Este es un proyecto editorial independiente, sin afiliación con las empresas mencionadas. Las marcas y los materiales de terceros pertenecen a sus respectivos titulares. Las fuentes se atribuyen en los artículos.

El código es públicamente visible, pero la publicación del repositorio no constituye por sí sola una autorización general para reutilizarlo. Los términos de licencia todavía no se han definido.
