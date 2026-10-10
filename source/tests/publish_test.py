"""Regression: stale local data must never overwrite a newer remote archive."""
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import publish


class PublicationBaseTest(unittest.TestCase):
    def test_stale_snapshot_aborts_before_validation_or_blob_upload(self):
        with patch.object(publish.subprocess, 'check_output', return_value='old\n'), \
             patch.object(publish, 'api', return_value={'object': {'sha': 'new'}}) as api, \
             patch.object(publish, 'validate') as validate:
            with self.assertRaisesRegex(RuntimeError, 'fetch and reconcile'):
                publish.publish('must not publish')
            api.assert_called_once_with('git/ref/heads/main')
            validate.assert_not_called()

    def test_current_snapshot_pins_original_parent(self):
        with patch.object(publish.subprocess, 'check_output', return_value='current\n'), \
             patch.object(publish, 'api', return_value={'object': {'sha': 'current'}}):
            self.assertEqual(publish.checked_base_ref(), 'current')


if __name__ == '__main__':
    unittest.main()
