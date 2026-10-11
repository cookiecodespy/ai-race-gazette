"""Non-blocking release scorecard derived from canonical Gazette JSON ledgers."""
import argparse, json, os
from collections import Counter
from pathlib import Path
from editorial import _article_words

ROOT = Path(__file__).resolve().parents[1]

def assess(news, days, queue, backlog):
    articles = news['articles']
    statuses = Counter(row['status'] for row in days)
    counts = Counter(a['date'] for a in articles)
    public = news.get('dailyCoverage', [])
    calendars_match = (days == public and
                       all(counts[row['date']] == row['verifiedArticles'] for row in days))
    closed = statuses['complete'] + statuses['reviewed-no-material-news']
    legacy = sum(a.get('articleVersion') != 2 for a in articles)
    short_v2 = sum(a.get('articleVersion') == 2 and _article_words(a) < 500 for a in articles)
    p0 = sum(x.get('queuePriority') == 'P0' and x.get('productionStatus') != 'complete'
             for x in queue.get('items', []))
    fresh = queue.get('generatedFromNewsUpdatedAt') == news.get('updatedAt')
    unfinished = sum(t['status'] not in ('done','cancelled') for t in backlog['items'])
    gates = [
        {'name':'Cobertura histórica', 'passed':calendars_match and closed == len(days),
         'detail':f"{closed}/{len(days)} días cerrados; {statuses['partial']} parciales; {statuses['pending']} pendientes"},
        {'name':'Reporter V2', 'passed':legacy == 0 and short_v2 == 0,
         'detail':f"{len(articles)-legacy} V2, {legacy} legacy, {short_v2} V2 cortos"},
        {'name':'Visual Desk', 'passed':p0 == 0 and fresh,
         'detail':f"{p0} prioridades P0 pendientes; cola {'vigente' if fresh else 'atrasada'}"},
        {'name':'Backlog', 'passed':unfinished == 0,
         'detail':f"{len(backlog['items'])-unfinished}/{len(backlog['items'])} tareas resueltas"}
    ]
    return {'articles':len(articles),'dates':len(days),'passed':sum(x['passed'] for x in gates),
            'total':len(gates),'gates':gates,'v1Ready':False,
            'manualGates':['autonomía programada','Pages y rollback','SEO por artículo','accesibilidad'],
            'note':'Nunca inferir v1.0 por conteos: faltan gates operativos independientes.'}

def markdown(report):
    lines = ['## AI Race Gazette — release readiness','',
             f"**{report['articles']} artículos · {report['dates']} fechas · {report['passed']}/{report['total']} gates medibles**",
             '','| Gate | Estado | Evidencia |','|---|---|---|']
    lines += [f"| {g['name']} | {'PASS' if g['passed'] else 'PENDIENTE'} | {g['detail']} |" for g in report['gates']]
    lines += ['', '**Falta auditar aparte:** '+', '.join(report['manualGates'])+'.',
              '', 'Reporte informativo. CI verde no equivale a producto editorial v1.0 terminado.']
    return '\n'.join(lines)+'\n'

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--json',action='store_true')
    parser.add_argument('--summary',action='store_true')
    parser.add_argument('--strict',action='store_true')
    args=parser.parse_args()
    def load(p):return json.loads((ROOT/p).read_text(encoding='utf-8'))
    report=assess(load('public/data/news.json'),load('docs/history-coverage.json'),
                  load('visual/image-queue.json'),load('ops/backlog.json'))
    print(json.dumps(report,ensure_ascii=False,indent=2) if args.json else markdown(report))
    if args.summary and os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'],'a',encoding='utf-8') as f:f.write(markdown(report))
    if args.strict and report['passed']!=report['total']:raise SystemExit(1)

if __name__=='__main__':main()
