import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {SITE,renderArticlePage,renderSitemap,pagePath,articleUrl,makeNewsIndex} from '../scripts/generate-static-articles.mjs';
const article={id:'security-brief',date:'2026-09-01',announcedAt:'2026-09-01',verifiedAt:'2026-10-10',
 company:'Research Lab',title:'Model < security & privacy',summary:'Brief "verified" report',tags:['Seguridad'],
 image:'assets/hero.webp',imageAlt:'Editorial drawing',imageCredit:'Editorial illustration',
 source:{name:'Original research',url:'https://example.com/news/model'},body:['Contains <safe> text'],
 sections:[{heading:'How it works',paragraphs:['Technical details.']}],analysis:'Our analysis',watch:'Future updates'};
test('indexable article HTML includes SSR title, source, escaping and canonical',()=>{
 const html=renderArticlePage(article);
 assert.match(html,/property="og:type" content="article"/);
 assert.match(html,/noticias\/2026-09-01\/security-brief\//);
 assert.match(html,/Model &lt; security &amp; privacy/);
 assert.ok(!html.includes('<safe>'));
 assert.match(html,/<h2>How it works<\/h2>/);
 assert.match(html,/https:\/\/example.com\/news\/model/);
 assert.match(html,/"@type":"NewsArticle"/);
 assert.equal(articleUrl(article),SITE+pagePath(article));
});
test('rejects unsafe sources and duplicate canonical paths',()=>{
 assert.throws(()=>renderArticlePage({...article,source:{name:'X',url:'javascript:alert(1)'}}),/Unsafe/);
 assert.throws(()=>renderSitemap([article,article]),/Duplicate/);
});
test('lightweight index preserves cover metadata without article bodies',()=>{
 const sample={...article,keyPoints:['A','B','C'],articleVersion:2};
 const slim=makeNewsIndex({archiveStart:'2026-09-01',coverageStart:'2026-09-01',updatedAt:'2026-10-11',dailyCoverage:[],articles:[sample]});
 assert.equal(slim.articles.length,1);
 assert.deepEqual(slim.articles[0].keyPoints,['A','B']);
 assert.equal(slim.articles[0].body,undefined);
 assert.equal(slim.articles[0].source,undefined);
 assert.equal(slim.articles[0].articleVersion,2);
});
test('compiled archive serves one static document per article plus sitemap',async()=>{
 const data=JSON.parse(await readFile('public/data/news.json','utf8'));
 const sample=data.articles[0];
 const rawIndex=await readFile('dist/client/data/news-index.json','utf8');
 assert.ok(Buffer.byteLength(rawIndex)<500*1024,'Initial JSON must stay below 500 KB');
 const index=JSON.parse(rawIndex);
 assert.equal(index.articles.length,data.articles.length);
 assert.equal(index.updatedAt,data.updatedAt);
 assert.equal(JSON.stringify(index.dailyCoverage),JSON.stringify(data.dailyCoverage));
 for(const item of index.articles)assert.equal(item.body,undefined);
 const story=JSON.parse(await readFile('dist/client/data/articles/'+sample.id+'.json','utf8'));
 assert.deepEqual(story,sample);
 const body=await readFile('dist/client/'+pagePath(sample)+'index.html','utf8');
 assert.ok(body.length>1000);
 assert.ok(body.includes(sample.id));
 const sitemap=await readFile('dist/client/sitemap.xml','utf8');
 assert.equal((sitemap.match(/<url>/g)||[]).length,data.articles.length+1);
 assert.ok(sitemap.includes(articleUrl(sample)));
 assert.ok((await stat('dist/client/robots.txt')).size>10);
});
