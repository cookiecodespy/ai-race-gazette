import { dateLabel, monthLabel } from '../news.js';
import { Rule, MiniArticle, Illustration } from './ArchivePieces.jsx';

const coverageStatusLabel = status => ({complete:'Cobertura completa',partial:'Cobertura parcial',pending:'Pendiente de revisión','reviewed-no-material-news':'Revisado · sin novedades materiales'}[status]||status);
const coverageEmptyMessage = status => status==='reviewed-no-material-news'?'Este día fue revisado de forma exhaustiva y no encontramos una novedad material verificable que justificara un artículo.':status==='complete'?'Este día está auditado como completo; no hay artículos materiales publicados para esta fecha.':status==='partial'?'La cobertura de este día todavía es parcial. Puede haber novedades pendientes de verificación.':'Este día está pendiente de una revisión histórica completa.';
const calendarDays = (month,coverage) => {
 const [year,monthNumber]=month.split('-').map(Number);
 const total=new Date(Date.UTC(year,monthNumber,0)).getUTCDate();
 const mondayOffset=(new Date(Date.UTC(year,monthNumber-1,1)).getUTCDay()+6)%7;
 const byDate=new Map(coverage.map(row=>[row.date,row]));
 return {mondayOffset,days:Array.from({length:total},(_,i)=>{const date=`${month}-${String(i+1).padStart(2,'0')}`;return {day:i+1,date,coverage:byDate.get(date)||null};})};
};
function CoverageCalendar({dailyCoverage,month}) {
 if(!dailyCoverage?.length)return null;
 const months=[...new Set(dailyCoverage.map(row=>row.date.slice(0,7)))].sort();
 const activeMonth=month!=='all'&&months.includes(month)?month:months.at(-1);
 const {mondayOffset,days}=calendarDays(activeMonth,dailyCoverage);
 const monthRows=dailyCoverage.filter(row=>row.date.startsWith(activeMonth));
 const totals=monthRows.reduce((acc,row)=>{acc[row.status]=(acc[row.status]||0)+1;return acc;},{});
 return <section className="coverage-calendar" aria-labelledby="coverage-calendar-title">
  <div className="coverage-calendar-heading"><div><span className="eyebrow">Cronología auditable</span><h2 id="coverage-calendar-title">{monthLabel(activeMonth)}</h2></div><p>{totals.complete||0} completos · {totals['reviewed-no-material-news']||0} sin novedades · {(totals.partial||0)+(totals.pending||0)} por cerrar</p></div>
  <div className="calendar-legend" aria-label="Leyenda de cobertura"><span className="complete">Completo</span><span className="partial">Parcial</span><span className="pending">Pendiente</span><span className="reviewed-no-material-news">Sin novedades</span></div>
  <div className="calendar-grid" role="group" aria-label={`Cobertura de ${monthLabel(activeMonth)}`}>
   {['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].map(label=><div className="calendar-weekday" key={label}>{label}</div>)}
   {Array.from({length:mondayOffset},(_,i)=><div className="calendar-pad" aria-hidden="true" key={`pad-${i}`}/>)}
   {days.map(({day,date,coverage})=><a className={`calendar-day ${coverage?.status||'pending'}`} href={`#edicion/${date}`} aria-label={`${dateLabel(date,true)} · ${coverageStatusLabel(coverage?.status||'pending')} · ${coverage?.verifiedArticles||0} noticias`} key={date}><strong>{day}</strong><span>{coverage?.verifiedArticles||0} {coverage?.verifiedArticles===1?'noticia':'noticias'}</span><small>{coverageStatusLabel(coverage?.status||'pending')}</small></a>)}
  </div>
 </section>;
}
function Edition({edition,coverage,allCoverage}) {
 const dates=allCoverage.map(row=>row.date);
 const index=dates.indexOf(edition.date);
 const previous=index>0?dates[index-1]:null;
 const next=index>=0&&index<dates.length-1?dates[index+1]:null;
 const nav=<div className="article-nav"><a href="#">Volver a la hemeroteca</a><span className="edition-day-nav">{previous&&<a href={`#edicion/${previous}`}>← {dateLabel(previous)}</a>}{next&&<a href={`#edicion/${next}`}>{dateLabel(next)} →</a>}</span></div>;
 if(!edition.articles.length)return <section className="daily-edition empty-edition">{nav}<Rule/><div className="section-meta"><span>Edición diaria · {coverageStatusLabel(coverage?.status||'pending')}</span><span>{dateLabel(edition.date)}</span></div><h1 className="edition-title">La carrera de la IA,<br/>día a día.</h1><div className={`empty-edition-panel ${coverage?.status||'pending'}`}><span className="eyebrow">Estado de la jornada</span><h2>{coverageStatusLabel(coverage?.status||'pending')}</h2><p>{coverageEmptyMessage(coverage?.status||'pending')}</p><p><b>{coverage?.verifiedArticles||0} noticias verificadas</b> registradas para esta fecha.</p></div></section>;
 return <section className="daily-edition">{nav}<Rule/><div className="section-meta"><span>Edición diaria · {coverageStatusLabel(coverage?.status||'partial')}</span><span>{dateLabel(edition.date)}</span></div><h1 className="edition-title">La carrera de la IA,<br/>día a día.</h1><div className="edition-lead"><a href={`#articulo/${edition.articles[0].id}`}><div className="eyebrow">{edition.articles[0].company}</div><h2>{edition.articles[0].title}</h2><p>{edition.articles[0].summary}</p><span className="read-label">Leer la noticia completa</span></a><Illustration article={edition.articles[0]} hero/></div><Rule/><div className="headlines">{edition.articles.slice(1).map((a,i)=><MiniArticle key={a.id} article={a} index={i}/>)}</div></section>;
}

export { CoverageCalendar, Edition, coverageStatusLabel, coverageEmptyMessage, calendarDays };
