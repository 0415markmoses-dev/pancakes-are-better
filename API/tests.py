from django.conf import settings
from django.test import SimpleTestCase


class DeploymentSettingsTests(SimpleTestCase):
    def test_vercel_host_is_allowed(self):
        self.assertTrue(any(host.endswith('.vercel.app') for host in settings.ALLOWED_HOSTS))
