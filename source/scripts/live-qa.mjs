import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';

const BASE=(process.env.GAZETTE_LIVE_URL||'https://cookiecodespy.github.io/ai-race-gazette/').replace(/\/?$/,'/');
const errors=[];
const browser=await chromium.launch({headless:true});
let stats={passed:false,site:BASE};
try {
  const page=await browser.newPage({viewport:{width:1280,height:900}});
  page.on('pageerror',e=>errors.push(e.message));
  const markerResponse=await page.request.get(BASE+'gazette-deployment.txt');
  assert.equal(markerResponse.status(),200,'Dedicated deployment marker HTTP');
  assert((await markerResponse.text()).split(/\r?\n/).includes('source_repository=cookiecodespy/ai-race-gazette'),'Wrong deployment repository');
  const newsResponse=await page.request.get(BASE+'data/news.json',{timeout:30000});
  assert.equal(newsResponse.status(),200,'Published news.json HTTP');
  const news=await newsResponse.json();
  assert(news.articles?.length>0,'Public archive is empty');
  const ids=new Set(news.articles.map(a=>a.id));
  assert.equal(ids.size,news.articles.length,'Duplicate public article IDs');
  assert.equal(new Set(news.articles.map(a=>a.eventKey)).size,news.articles.length,'Duplicate public event keys');
  const newsMirror=await page.request.get(BASE+'source/public/data/news.json');
  assert.equal(newsMirror.status(),200,'Public JSON mirror HTTP');
  assert.deepEqual(await newsMirror.body(),await newsResponse.body(),'Public JSON mirrors differ');
  const rssResponse=await page.request.get(BASE+'feed.xml',{timeout:30000});
  assert.equal(rssResponse.status(),200,'Public RSS HTTP');
  const rssText=await rssResponse.text();
  const rssMirror=await page.request.get(BASE+'source/public/feed.xml');
  assert.equal(rssMirror.status(),200,'Public RSS mirror HTTP');
  assert.equal(await rssMirror.text(),rssText,'Public RSS mirrors differ');
  const rssItems=(rssText.match(/<item>/g)||[]).length;
  assert.equal(rssItems,news.articles.length,'Public RSS count differs from published JSON');

  await page.goto(BASE,{waitUntil:'domcontentloaded',timeout:45000});
  await page.locator('.news-cover').first().waitFor({timeout:30000});
  const cards=await page.locator('.news-cover').count();
  assert(cards>0&&cards<=news.articles.length,'Home cover cards inconsistent');
  assert(await page.locator('.coverage-calendar').count()>0,'Daily coverage calendar missing');
  await page.locator('.news-cover').first().click();
  await page.locator('.full-article h1').waitFor({timeout:20000});
  const route=new URL(page.url()).hash;
  assert.match(route,/#articulo\//,'Article navigation did not occur');
  assert(await page.locator('.sources a').count()>0,'Article lacks traceable source link');
  await page.locator('.hero-art img').first().waitFor();
  const hasImage=await page.locator('.hero-art img').first().evaluate(img=>img.complete&&img.naturalWidth>0);
  assert(hasImage,'Article illustration failed to load');
  await page.evaluate(()=>document.fonts.ready);
  await mkdir('qa',{recursive:true});
  await page.screenshot({path:'qa/live-desktop.png',fullPage:true});
  const desktopURL=page.url();

  const mobile=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
  mobile.on('pageerror',e=>errors.push(e.message));
  await mobile.goto(BASE,{waitUntil:'domcontentloaded',timeout:45000});
  await mobile.locator('.news-cover').first().waitFor({timeout:30000});
  const overflow=await mobile.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
  assert(overflow<=3,'Unexpected mobile horizontal overflow: '+overflow+'px');
  await mobile.screenshot({path:'qa/live-mobile.png',fullPage:true});

  assert.deepEqual(errors,[],'Browser JavaScript errors');
  stats={passed:true,site:BASE,sourceRepository:'cookiecodespy/ai-race-gazette',mirrorsIdentical:true,publicArticles:news.articles.length,rssItems,visibleCovers:cards,desktopURL,hasImage,mobileHorizontalOverflow:overflow,errors};
  console.log('Live Gazette OK: '+news.articles.length+' articles, RSS, images, mobile, no page errors');
} finally {
  await mkdir('qa',{recursive:true});
  await writeFile('qa/live-results.json',JSON.stringify(stats,null,2)+'\n');
  await browser.close();
}
