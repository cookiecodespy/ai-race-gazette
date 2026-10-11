# Auditoría V5: eventKeys y fuentes compartidas

Fecha de revisión: 2026-10-11. Corte: 156 artículos Reporter V2.

## Método

Se cotejaron 156 IDs y 156 eventKeys únicos en data/news.json, se agruparon URLs primarias normalizadas y se compararon producto, objetivo, público y disponibilidad para las cuatro URLs reutilizadas. Una URL repetida no es sinónimo de un evento duplicado.

## Nueve artículos en cuatro fuentes compartidas

1. Anthropic, 8 octubre: https://claude.com/resources/articles/dashboards-and-motion aparece en claude-motion-2026, claude-dashboards-2026 y claude-docs-slides-design-free-2026. Son respectivamente generación de animaciones (beta), análisis de datos vivos (beta) y ampliación de disponibilidad de Docs/Slides/Design fuera de beta. Ver https://claude.com/resources/product-announcements.

2. Microsoft, 25 septiembre: https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/ respalda microsoft-copilot-code-apps-from-natural-language-2026-09-25 y microsoft-copilot-autopilot-persistent-enterprise-agent-2026-09-25. Code es desarrollo de soluciones y Managed Runtime; Autopilot, agente persistente con identidad/memoria. Diferentes capacidades, vías de despliegue e impacto.

3. Google, 2 septiembre: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/ respalda gemini-3-8-flash y gemini-3-8-flash-cyber. Uno es familia general para agentes y desarrollo; el otro, variante especializada para defensores con acceso condicionado. No equiparar disponibilidad.

4. Anthropic, 1 septiembre: https://www.anthropic.com/claude-fable-and-mythos-5-1 respalda claude-fable-5-1 y claude-mythos-5-1. La fuente aclara que comparten modelo subyacente. La separación editorial refleja las diferencias materiales de acceso y salvaguardas, NO dos arquitecturas base independientes.

## Resultado

PASS: 156 IDs únicos y 156 eventKeys únicos. Cuatro URLs compartidas por nueve piezas con efectos independientes o condiciones de acceso materialmente distintas; no fusionar por URL. La revisión no demuestra ausencia de duplicados semánticos entre URLs diferentes ni cierra la auditoría de precios, fechas o cobertura histórica. Esos trabajos permanecen en QA-CLAIMS-SAMPLING y QA-REVERSE.
