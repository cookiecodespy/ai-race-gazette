import sys, unittest
from copy import deepcopy
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from release_readiness import assess, markdown

class ReadinessTests(unittest.TestCase):
    def setUp(self):
        self.news={'updatedAt':'2026-10-10T00:00:00Z',
                   'articles':[{'date':'2026-10-10','articleVersion':2,'title':'Informe',
                       'sections':[{'heading':'Detalle','paragraphs':['contexto '*600]}]}],
                   'dailyCoverage':[{'date':'2026-10-10','status':'complete','verifiedArticles':1}]}
        self.days=deepcopy(self.news['dailyCoverage'])
        self.queue={'generatedFromNewsUpdatedAt':self.news['updatedAt'],
                    'items':[{'queuePriority':'P3','productionStatus':'complete'}]}
        self.backlog={'items':[{'status':'done'}]}

    def test_measurable_gates_do_not_automatically_certify_final_release(self):
        result=assess(self.news,self.days,self.queue,self.backlog)
        self.assertEqual((result['passed'],result['total']),(4,4))
        self.assertFalse(result['v1Ready'])
        self.assertIn('4/4',markdown(result))

    def test_legacy_partial_and_art_p0_remain_visible(self):
        self.days[0]['status']='partial'
        self.news['articles'][0].pop('articleVersion')
        self.queue['items'][0].update(queuePriority='P0',productionStatus='brief-ready')
        self.backlog['items'][0]['status']='queued'
        result=assess(self.news,self.days,self.queue,self.backlog)
        self.assertEqual(result['passed'],0)
        self.assertIn('legacy',result['gates'][1]['detail'])
        self.assertIn('PENDIENTE',markdown(result))

if __name__=='__main__':unittest.main()
