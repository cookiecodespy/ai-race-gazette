#!/usr/bin/env node
// Static SEO export derived from the canonical newsroom data, never hand-edited.
import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const SITE='https://cookiecodespy.github.io/ai-race-gazette/';
export const html = v => String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
export const pagePath = a => 'noticias/'+a.date+'/'+a.id+'/';
export const articleUrl = a => SITE+pagePath(a);
const paragraphs = xs => (xs||[]).map(t=>'<p>'+html(t)+'</p>').join('\n');
const bullets = xs => xs?.length?'<ul>'+xs.map(t=>'<li>'+html(t)+'</li>').join('')+'</ul>':'';
const safe = u => typeof u==='string' && /^https:\/\/[^<>"\s]+$/.test(u);
const json = obj => JSON.stringify(obj).replace(/</g,'\\u003c').replace(/>/g,'\\u003e').replace(/&/g,'\\u0026');

export function renderArticlePage(a){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(a.date)||!/^[a-z0-9-]+$/.test(a.id))throw Error('Invalid article path');
 if(!safe(a.source?.url))throw Error('Unsafe source URL: '+a.id);
 const link=articleUrl(a),image=SITE+(a.image||'assets/hero.webp');
 const title=a.title+' — AI Race Gazette';
 const ld={'@context':'https://schema.org','@type':'NewsArticle',headline:a.title,
  description:a.summary,datePublished:a.announcedAt||a.date,dateModified:a.verifiedAt||a.date,
  mainEntityOfPage:{'@type':'WebPage','@id':link},image:[image],
  publisher:{'@type':'NewsMediaOrganization',name:'AI Race Gazette',url:SITE},
  author:{'@type':'Organization',name:'AI Race Gazette'},inLanguage:'es-CL'};
 const head=[
  '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">',
  '<title>'+html(title)+'</title><meta name="description" content="'+html(a.summary)+'">',
  '<meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="'+html(link)+'">',
  '<link rel="alternate" type="application/rss+xml" title="Gazette RSS" href="'+SITE+'feed.xml">',
  '<meta property="og:type" content="article"><meta property="og:locale" content="es_CL">',
  '<meta property="og:site_name" content="AI Race Gazette">',
  '<meta property="og:title" content="'+html(title)+'"><meta property="og:description" content="'+html(a.summary)+'">',
  '<meta property="og:url" content="'+html(link)+'"><meta property="og:image" content="'+html(image)+'">',
  '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="'+html(title)+'">',
  '<meta name="twitter:description" content="'+html(a.summary)+'"><meta name="twitter:image" content="'+html(image)+'">',
  '<script type="application/ld+json">'+json(ld)+'</script>',
  '<style>*{box-sizing:border-box}body{margin:0;color:#281a0e;background:#e9d7b5;font:18px/1.6 Georgia,serif}',
  'a{color:#603a24;text-underline-offset:3px}a:focus-visible{outline:3px solid #792c1e;outline-offset:4px}',
  '.page{max-width:920px;margin:22px auto;padding:clamp(20px,5vw,65px);background:#f8e8c8;border:11px solid #bd9865;box-shadow:0 7px 27px #57351e30}',
  '.brand{font-size:clamp(28px,5vw,50px);text-decoration:none;font-weight:bold;letter-spacing:.06em}',
  '.mast{text-align:center;border-bottom:4px double #60482c;padding-bottom:20px;margin-bottom:22px}',
  '.small{font-size:.75em;color:#5a432d}.byline{text-transform:uppercase;letter-spacing:.06em;font-size:.8em}',
  'h1{font-size:clamp(32px,4vw,52px);line-height:1.08}h2{line-height:1.2;margin-top:1.6em}',
  '.summary{font-size:1.25em;line-height:1.35}.hero{margin:25px 0;border:1px solid #957450;padding:10px}',
  '.hero img{max-width:100%;width:100%;display:block;max-height:450px;object-fit:cover}',
  '.links{border-top:2px solid #634a31;padding-top:20px;margin-top:30px}li{margin-bottom:9px}',
  '.cta{display:inline-block;padding:10px 16px;border:1px solid #70522e;margin:15px 0}',
  '@media(max-width:600px){body{font-size:16px}.page{margin:0;border-width:5px;padding:20px}}</style></head><body>'
 ].join('\n');
 const sections=(a.sections||[]).map(s=>'<section><h2>'+html(s.heading)+'</h2>'+paragraphs(s.paragraphs)+'</section>').join('\n');
 const sources=[a.source,...(a.relatedSources||[])].filter(s=>safe(s?.url))
  .map(s=>'<li><a href="'+html(s.url)+'" rel="noopener noreferrer">'+html(s.name||'Fuente')+'</a></li>').join('');
 const content=[
  '<div class="page"><header class="mast"><a class="brand" href="'+SITE+'">AI RACE GAZETTE</a><div class="small">HEMEROTECA DE INTELIGENCIA ARTIFICIAL</div></header>',
  '<main><article><div class="byline">'+html(a.company)+' · '+html(a.date)+' · '+html((a.tags||[]).join(' · '))+'</div>',
  '<h1>'+html(a.title)+'</h1><p class="summary">'+html(a.summary)+'</p>',
  '<a class="cta" href="'+SITE+'#articulo/'+encodeURIComponent(a.id)+'">Abrir versión interactiva</a>',
  '<figure class="hero"><img src="'+html(image)+'" alt="'+html(a.imageAlt||'Ilustración editorial conceptual')+'">',
  '<figcaption class="small">'+html(a.imageCredit||'Ilustración editorial · Gazette')+'</figcaption></figure>',
  a.executiveSummary?'<section><h2>Resumen ejecutivo</h2><p>'+html(a.executiveSummary)+'</p></section>':'',
  paragraphs(a.body),
  a.quickTakeaways?.length?'<section><h2>En 30 segundos</h2>'+bullets(a.quickTakeaways)+'</section>':'',
  sections,
  a.analysis?'<section><h2>La lectura del Gazette</h2><p>'+html(a.analysis)+'</p><p class="small">Análisis editorial</p></section>':'',
  a.practicalAdvice?.length?'<section><h2>Consejos prácticos</h2>'+bullets(a.practicalAdvice)+'</section>':'',
  a.limitations?.length?'<section><h2>Limitaciones</h2>'+bullets(a.limitations)+'</section>':'',
  a.finalSummary?'<section><h2>Resumen final</h2><p>'+html(a.finalSummary)+'</p></section>':'',
  a.watch?'<section><h2>Qué seguir</h2><p>'+html(a.watch)+'</p></section>':'',
  '<aside class="links"><h2>Fuentes verificables</h2><ul>'+sources+'</ul><p class="small">Fecha original: '+html(a.announcedAt||a.date)+' · Verificada: '+html(a.verifiedAt||a.date)+'</p></aside>',
  '</article></main><footer class="links"><a href="'+SITE+'">Volver a la portada</a> · <a href="'+SITE+'feed.xml">RSS</a></footer></div></body></html>\n'
 ].join('\n');
 return head+content;
}
export function renderSitemap(articles) {
 const urls=[SITE,...articles.map(articleUrl)];
 if(new Set(urls).size!==urls.length)throw Error('Duplicate canonical article URLs');
 return '<?xml version="1.0" encoding="utf-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+
  urls.map(u=>'<url><loc>'+html(u)+'</loc></url>').join('\n')+'\n</urlset>\n';
}
export async function generate({source=path.join(ROOT,'public/data/news.json'),out=path.join(ROOT,'dist/client')}={}) {
 const news=JSON.parse(await readFile(source,'utf8'));
 if(!Array.isArray(news.articles)||news.articles.length===0)throw Error('Empty archive');
 await rm(path.join(out,'noticias'),{recursive:true,force:true});
 const seen=new Set();
 for(const article of news.articles) {
  const dest=path.join(out,pagePath(article),'index.html');
  if(seen.has(dest))throw Error('Duplicate SEO article path');
  seen.add(dest);await mkdir(path.dirname(dest),{recursive:true});
  await writeFile(dest,renderArticlePage(article));
 }
 await writeFile(path.join(out,'sitemap.xml'),renderSitemap(news.articles));
 await writeFile(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+SITE+'sitemap.xml\n');
 console.log('Generated '+seen.size+' article pages and a sitemap from canonical news.json');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await generate();
