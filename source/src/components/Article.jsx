import { estimatedReadingMinutes, dateLabel } from '../news.js';
import { asset } from '../lib/assets.js';
import { Rule, MiniArticle, Illustration } from './ArchivePieces.jsx';

function DetailList({title,items,className=''}) {
 if(!items?.length)return null;
 return <section className={`detail-card ${className}`}><h2>{title}</h2><dl>{items.map((item,i)=><div className="detail-row" key={item.label+i}><dt>{item.label}</dt><dd>{item.value}{item.note&&<small>{item.note}</small>}</dd></div>)}</dl></section>;
}
function BulletBlock({title,items,className=''}) {
 if(!items?.length)return null;
 return <section className={`report-block ${className}`}><h2>{title}</h2><ul>{items.map((item,i)=><li key={item+i}>{item}</li>)}</ul></section>;
}
function AvailabilityCard({availability}) {
 if(!availability)return null;
 const groups=[['Plataformas',availability.platforms],['Regiones',availability.regions],['Requisitos',availability.requirements],['Notas',availability.notes]].filter(([,items])=>items?.length);
 return <section className="detail-card availability-card"><h2>Disponibilidad</h2>{availability.status&&<p className="availability-status">{availability.status}</p>}{groups.map(([label,items])=><div className="availability-group" key={label}><h3>{label}</h3><ul>{items.map((item,i)=><li key={item+i}>{item}</li>)}</ul></div>)}</section>;
}
function Timeline({items}) {
 if(!items?.length)return null;
 return <section className="report-block timeline-block"><h2>Cronología</h2><ol>{items.map((item,i)=><li key={item.date+item.label+i}><time dateTime={item.date}>{dateLabel(item.date,true)}</time><div><strong>{item.label}</strong>{item.description&&<p>{item.description}</p>}</div></li>)}</ol></section>;
}
function ComparisonBlock({items}) {
 if(!items?.length)return null;
 return <section className="report-block comparison-block"><h2>Contexto competitivo</h2>{items.map((item,i)=><article key={item.subject+i}><h3>{item.subject}</h3><p>{item.comparison}</p><small><b>Base:</b> {item.basis}{item.caveat&&<> · {item.caveat}</>}</small></article>)}</section>;
}
function MediaGallery({items}) {
 if(!items?.length)return null;
 return <div className="article-media-grid">{items.map((media,i)=><figure key={media.src+i}><img src={asset(media.src)} alt={media.alt} loading="lazy"/><figcaption>{media.caption&&<span>{media.caption} </span>}{media.credit}</figcaption></figure>)}</div>;
}
function Article({article,articles,onShare}) {
 const readingMinutes=estimatedReadingMinutes(article);
 const isV2=article.articleVersion===2;
 const secondaryMedia=(article.media||[]).filter(media=>media.src!==article.image);
 return <article className={isV2?'full-article reporter-v2':'full-article'}>
  <div className="article-nav"><a href="#">Volver a la portada</a><a href={`#edicion/${article.date}`}>Edición del {dateLabel(article.date,true)}</a></div>
  <Rule/>
  <div className="section-meta"><span>{article.company} · {dateLabel(article.date)}</span><span>{article.tags.join(' · ')}</span></div>
  {isV2&&<div className="reporter-strip"><span>Informe Reporter V2</span><span>{article.product||'Cobertura especial'}</span></div>}
  <h1>{article.title}</h1>
  <p className="article-deck">{article.summary}</p>
  <div className="byline"><span>Redacción AI Race Gazette · {readingMinutes} min de lectura{isV2?' · Informe ampliado':''}</span><button onClick={onShare}>Copiar enlace</button></div>
  <Illustration article={article} hero/>
  {article.quickTakeaways?.length>0&&<section className="quick-brief"><div><span className="quick-kicker">Lectura rápida</span><h2>En 30 segundos</h2></div><ul>{article.quickTakeaways.map((point,i)=><li key={point+i}>{point}</li>)}</ul></section>}
  <div className="story-layout">
   <div className="story">
    {article.executiveSummary&&<section className="report-block executive-summary"><span className="report-label">Resumen ejecutivo</span><h2>La noticia, en contexto</h2><p>{article.executiveSummary}</p></section>}
    {(article.body||[]).map((p,i)=><p key={i}>{p}</p>)}
    <MediaGallery items={secondaryMedia}/>
    {article.sections?.map((section,i)=><section className={`report-block report-section ${section.kind||''}`} key={section.heading+i}><h2>{section.heading}</h2>{section.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</section>)}
    <Timeline items={article.timeline}/>
    <ComparisonBlock items={article.comparisons}/>
    <section className="analysis gazette-analysis"><span className="report-label">Opinión separada de los hechos</span><h2>La lectura del Gazette</h2><p>{article.analysis}</p><small>Análisis editorial · AI Race Gazette</small></section>
    <BulletBlock title="Consejos prácticos" items={article.practicalAdvice} className="advice-block"/>
    <BulletBlock title="Datos útiles" items={article.usefulFacts} className="useful-block"/>
    <BulletBlock title="Datos curiosos" items={article.curiosities} className="curiosity-block"/>
    <BulletBlock title="Limitaciones y preguntas abiertas" items={article.limitations} className="limitations-block"/>
    {article.finalSummary&&<section className="report-block final-summary"><span className="report-label">Cierre</span><h2>Resumen final</h2><p>{article.finalSummary}</p></section>}
    <section className="report-block watch-block"><h2>Qué seguir ahora</h2><p>{article.watch}</p></section>
   </div>
   <aside className="article-aside">
    <div className="key-box"><h2>Puntos clave</h2><ol>{article.keyPoints.map(p=><li key={p}>{p}</li>)}</ol></div>
    <DetailList title="En números y detalles" items={article.technicalDetails}/>
    <DetailList title="Precio" items={article.pricing} className="pricing-card"/>
    <AvailabilityCard availability={article.availability}/>
    <div className="source-box"><h2>Sobre esta cobertura</h2><p>{article.announcedAt?`Anuncio original: ${dateLabel(article.announcedAt)}.`:'Fecha original sin confirmar.'}</p><p>Revisada el {dateLabel(article.verifiedAt)}.</p>{article.verificationNote&&<p>{article.verificationNote}</p>}<p>Hechos, claims del proveedor y análisis editorial se distinguen según la política del Gazette.</p>{article.imageStatus==='needs-specific-art'&&<p><b>Visual:</b> la ilustración actual es temporal; existe un brief para arte específico.</p>}{article.corrections?.map(c=><p key={c.date+c.note}><b>Corrección · {dateLabel(c.date)}:</b> {c.note}</p>)}</div>
   </aside>
  </div>
  <section className="sources"><div className="source-heading"><span className="report-label">Fuentes y trazabilidad</span><h2>Consulta la evidencia original</h2><p>El Gazette prioriza anuncios, documentación, papers y repositorios primarios; las fuentes secundarias se usan para contexto adicional.</p></div><div className="source-links"><a className="button primary" href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.name} · Fuente principal</a>{article.relatedSources?.map(s=><a className="related-source" key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>)}</div></section>
  {articles.some(a=>a.date===article.date&&a.id!==article.id)&&<><Rule/><h2 className="related-title">Más noticias del mismo día</h2><div className="headlines">{articles.filter(a=>a.date===article.date&&a.id!==article.id).slice(0,8).map((a,i)=><MiniArticle key={a.id} article={a} index={i}/>)}</div></>}
 </article>;
}

export { Article };
